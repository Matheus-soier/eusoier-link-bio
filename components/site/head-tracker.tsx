"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import head from "@/lib/head-manifest.json";

// Frames come from short clips of the head turning in 8 directions. Each
// direction is one horizontal sprite of `head.frames` frames, from barely
// turned to fully turned. The pointer picks the direction (angle) and the
// frame (distance), eased so the head sweeps through the in-between frames.
const BASE = "/head/";
const FACE = { x: 0.507, y: 0.44 };
const EASE = 0.1;
const DEAD_ZONE = 0.12;

type Sprite = { angle: number; image: HTMLImageElement };

const loadImage = async (src: string) => {
  const image = new window.Image();
  image.src = src;
  await image.decode();
  return image;
};

// Smallest absolute difference between two angles, in degrees.
const angleDistance = (a: number, b: number) => Math.abs(((a - b + 540) % 360) - 180);

export const HeadTracker = ({ alt, className }: { alt: string; className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let center: HTMLImageElement | null = null;
    const sprites: Sprite[] = [];
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let activeAngle: number | null = null;
    let lastKey = "";
    let raf = 0;
    let idle = 0;
    let disposed = false;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.min(Math.round(canvas.clientWidth * ratio), head.frameWidth);
      canvas.width = width;
      canvas.height = Math.round((width * head.frameHeight) / head.frameWidth);
      lastKey = "";
      draw();
    };

    const pickSprite = (angle: number) => {
      let best: Sprite | null = null;
      for (const sprite of sprites) {
        if (!best || angleDistance(sprite.angle, angle) < angleDistance(best.angle, angle)) {
          best = sprite;
        }
      }
      // Hysteresis: keep the current direction until another one is clearly closer.
      const active = sprites.find((sprite) => sprite.angle === activeAngle);
      if (
        active &&
        best &&
        angleDistance(active.angle, angle) < angleDistance(best.angle, angle) + 8
      ) {
        return active;
      }
      return best;
    };

    const draw = () => {
      if (!center) return;
      const magnitude = Math.min(1, Math.hypot(current.x, current.y));
      const angle = (Math.atan2(current.y, current.x) * 180) / Math.PI;
      const sprite = magnitude > DEAD_ZONE ? pickSprite(angle) : null;
      const frame = sprite
        ? Math.round(((magnitude - DEAD_ZONE) / (1 - DEAD_ZONE)) * (head.frames - 1))
        : 0;
      const key = sprite ? `${sprite.angle}:${frame}` : "center";
      if (key === lastKey) return;
      lastKey = key;
      activeAngle = sprite?.angle ?? null;

      context.fillStyle = "#fff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      if (sprite) {
        const { frameWidth, frameHeight } = head;
        context.drawImage(
          sprite.image,
          frame * frameWidth,
          0,
          frameWidth,
          frameHeight,
          0,
          0,
          canvas.width,
          canvas.height,
        );
      } else {
        context.drawImage(center, 0, 0, canvas.width, canvas.height);
      }
    };

    const tick = () => {
      current.x += (target.x - current.x) * EASE;
      current.y += (target.y - current.y) * EASE;
      draw();
      const settled =
        Math.abs(target.x - current.x) < 0.002 && Math.abs(target.y - current.y) < 0.002;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const lookAt = (x: number, y: number) => {
      target.x = x;
      target.y = y;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const handlePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dx = event.clientX - (rect.left + FACE.x * rect.width);
      const dy = event.clientY - (rect.top + FACE.y * rect.height);
      const distance = Math.hypot(dx, dy) || 1;
      const reach = Math.min(1, distance / (rect.width * 0.55));
      lookAt((dx / distance) * reach, (dy / distance) * reach);
    };

    const handleLeave = () => lookAt(0, 0);

    (async () => {
      center = await loadImage(`${BASE}${head.center}`);
      if (disposed) return;
      resize();
      setLive(true);
      window.addEventListener("pointermove", handlePointer);
      window.addEventListener("pointerdown", handlePointer);
      document.documentElement.addEventListener("pointerleave", handleLeave);

      // Sprites stream in after the first paint; each direction works as soon as it lands.
      for (const direction of head.directions) {
        const image = await loadImage(`${BASE}${direction.src}`).catch(() => null);
        if (disposed) return;
        if (image) sprites.push({ angle: direction.angle, image });
      }

      if (!window.matchMedia("(pointer: fine)").matches) {
        const glance = () => {
          const angle = Math.random() * Math.PI * 2;
          const reach = Math.random() < 0.3 ? 0 : 0.45 + Math.random() * 0.55;
          lookAt(Math.cos(angle) * reach, Math.sin(angle) * reach);
          idle = window.setTimeout(glance, 1600 + Math.random() * 2400);
        };
        idle = window.setTimeout(glance, 1200);
      }
    })();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(idle);
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerdown", handlePointer);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div className={className}>
      <Image
        src={`${BASE}${head.center}`}
        alt={alt}
        fill
        priority
        sizes="(min-width: 768px) 100vh, 85vh"
        className="object-contain"
        style={{ visibility: live ? "hidden" : "visible" }}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
};
