"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import head from "@/lib/head-manifest.json";

// Frames come from short clips of the head turning in 8 directions. Each
// direction is a grid sprite running from barely turned to fully turned.
//
// Within a direction the pointer distance scrubs through the frames and the two
// neighbouring frames are cross-faded, so the head turns continuously. Moving
// between states (center, or one direction to another) fades quickly from the
// last drawn image, so an in-between blend never lingers on screen.
const BASE = "/head/";
const FACE = { x: 0.507, y: 0.44 };
const EASE = 0.075;
const STATE_FADE_MS = 180;
const DEAD_ZONE = 0.14;
const HYSTERESIS_DEG = 10;

type Size = keyof typeof head.sizes;
type Direction = { angle: number; frames: number; image: CanvasImageSource };

// Decode up front into GPU-ready bitmaps so drawing never stalls on a lazy decode.
const loadImage = async (src: string): Promise<CanvasImageSource> => {
  const image = new window.Image();
  image.src = src;
  await image.decode();
  return "createImageBitmap" in window ? createImageBitmap(image) : image;
};

// Smallest absolute difference between two angles, in degrees.
const angleDistance = (a: number, b: number) => Math.abs(((a - b + 540) % 360) - 180);

export const HeadTracker = ({ alt, className }: { alt: string; className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    // Only animate for a real mouse; touch screens and reduced motion keep the still frame.
    if (
      !canvas ||
      !context ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const size: Size = window.innerWidth < 768 ? "small" : "large";
    const { frameWidth, frameHeight } = head.sizes[size];
    const layer = document.createElement("canvas");
    const layerContext = layer.getContext("2d");
    if (!layerContext) return;

    let center: CanvasImageSource | null = null;
    const directions: Direction[] = [];
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let active: Direction | null = null;
    let fadeStart = -Infinity;
    let raf = 0;
    let disposed = false;

    const drawSprite = (ctx: CanvasRenderingContext2D, direction: Direction, index: number) => {
      const sx = (index % head.columns) * frameWidth;
      const sy = Math.floor(index / head.columns) * frameHeight;
      ctx.drawImage(
        direction.image,
        sx,
        sy,
        frameWidth,
        frameHeight,
        0,
        0,
        canvas.width,
        canvas.height,
      );
    };

    const nearest = (angle: number) => {
      let best: Direction | null = null;
      for (const direction of directions) {
        if (!best || angleDistance(direction.angle, angle) < angleDistance(best.angle, angle)) {
          best = direction;
        }
      }
      return best;
    };

    const render = (now: number) => {
      if (!center) return false;
      const magnitude = Math.min(1, Math.hypot(current.x, current.y));
      const angle = (Math.atan2(current.y, current.x) * 180) / Math.PI;

      let next: Direction | null = null;
      if (magnitude >= DEAD_ZONE) {
        const candidate = nearest(angle);
        const keep =
          active &&
          candidate &&
          angleDistance(active.angle, angle) <
            angleDistance(candidate.angle, angle) + HYSTERESIS_DEG;
        // While sprites are still loading, a far-off direction is worse than looking ahead.
        const close = candidate && angleDistance(candidate.angle, angle) <= 30;
        next = keep ? active : close ? candidate : null;
      }

      // State change: remember what is on screen and fade out of it.
      if (next !== active) {
        layerContext.clearRect(0, 0, layer.width, layer.height);
        layerContext.drawImage(canvas, 0, 0);
        fadeStart = now;
        active = next;
      }

      // Frames have a transparent background, so the name marquee stays behind the head.
      context.globalAlpha = 1;
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (!active) {
        context.drawImage(center, 0, 0, canvas.width, canvas.height);
      } else {
        const position = ((magnitude - DEAD_ZONE) / (1 - DEAD_ZONE)) * (active.frames - 1);
        const index = Math.floor(position);
        const fraction = position - index;
        drawSprite(context, active, index);
        if (fraction > 0.01 && index + 1 < active.frames) {
          context.globalAlpha = fraction;
          drawSprite(context, active, index + 1);
        }
      }

      const fade = Math.min(1, (now - fadeStart) / STATE_FADE_MS);
      if (fade < 1) {
        context.globalAlpha = 1 - fade * fade * (3 - 2 * fade);
        context.drawImage(layer, 0, 0);
      }
      context.globalAlpha = 1;
      return fade < 1;
    };

    const tick = (now: number) => {
      current.x += (target.x - current.x) * EASE;
      current.y += (target.y - current.y) * EASE;
      const fading = render(now);
      const settled =
        Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;
      raf = settled && !fading ? 0 : requestAnimationFrame(tick);
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const lookAt = (x: number, y: number) => {
      target.x = x;
      target.y = y;
      start();
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.min(Math.round(canvas.clientWidth * ratio), frameWidth);
      canvas.width = layer.width = width;
      canvas.height = layer.height = Math.round((width * frameHeight) / frameWidth);
      render(performance.now());
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
      center = await loadImage(`${BASE}${head.center[size]}`);
      if (disposed) return;
      resize();
      setLive(true);
      window.addEventListener("pointermove", handlePointer);
      document.documentElement.addEventListener("pointerleave", handleLeave);

      // Sprites stream in after the first paint; each direction works as soon as it lands.
      await Promise.all(
        head.directions.map(async (direction) => {
          const image = await loadImage(`${BASE}${direction[size]}`).catch(() => null);
          if (image && !disposed) {
            directions.push({ angle: direction.angle, frames: direction.frames, image });
          }
        }),
      );
      if (disposed) return;
      start();
    })();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointer);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div className={className}>
      <Image
        src={`${BASE}${head.center.large}`}
        alt={alt}
        fill
        priority
        sizes="(min-width: 768px) 100vh, 85vh"
        className="object-contain"
        style={{ visibility: live ? "hidden" : "visible" }}
      />
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
    </div>
  );
};
