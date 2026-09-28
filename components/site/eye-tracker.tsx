"use client";

import { useEffect, useRef } from "react";
import { preload } from "react-dom";

// Coordinates are in the source photo's pixel space (2160 × 1837). The base
// photo has the irises painted out; these layers put them back and move them.
const VIEW = { width: 2160, height: 1837 };
const GAZE_ORIGIN = { x: 1095, y: 754 };
const MAX_OFFSET = { x: 9, y: 3 };
const EASE = 0.14;

const EYES = [
  {
    id: "left",
    src: "/brand/iris-left.png",
    iris: { x: 869, y: 716, size: 72 },
    clip: "852,753 870,746 890,741 905,740 920,741 940,747 958,755 958,778 940,781 920,786 905,787 885,786 870,784 852,780",
  },
  {
    id: "right",
    src: "/brand/iris-right.png",
    iris: { x: 1250, y: 721, size: 70 },
    clip: "1232,758 1250,750 1268,743 1285,741 1302,742 1320,748 1338,757 1338,782 1320,785 1300,789 1285,790 1268,789 1250,787 1232,784",
  },
];

export const EyeTracker = () => {
  EYES.forEach((eye) => preload(eye.src, { as: "image", fetchPriority: "high" }));

  const svgRef = useRef<SVGSVGElement>(null);
  const irisRefs = useRef<(SVGImageElement | null)[]>([]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf = 0;
    let idle = 0;

    const render = () => {
      current.x += (target.x - current.x) * EASE;
      current.y += (target.y - current.y) * EASE;
      const transform = `translate(${(current.x * MAX_OFFSET.x).toFixed(2)} ${(current.y * MAX_OFFSET.y).toFixed(2)})`;
      irisRefs.current.forEach((iris) => iris?.setAttribute("transform", transform));
      const settled =
        Math.abs(target.x - current.x) < 0.002 && Math.abs(target.y - current.y) < 0.002;
      raf = settled ? 0 : requestAnimationFrame(render);
    };

    const lookAt = (next: { x: number; y: number }) => {
      target = next;
      if (!raf) raf = requestAnimationFrame(render);
    };

    // Direction from the point between the eyes to the pointer, scaled by distance.
    const lookAtPoint = (clientX: number, clientY: number) => {
      const rect = svg.getBoundingClientRect();
      const originX = rect.left + (GAZE_ORIGIN.x / VIEW.width) * rect.width;
      const originY = rect.top + (GAZE_ORIGIN.y / VIEW.height) * rect.height;
      const dx = clientX - originX;
      const dy = clientY - originY;
      const distance = Math.hypot(dx, dy) || 1;
      const reach = Math.min(1, distance / (rect.width * 0.45));
      lookAt({ x: (dx / distance) * reach, y: (dy / distance) * reach });
    };

    const handleMove = (event: PointerEvent) => lookAtPoint(event.clientX, event.clientY);
    const handleLeave = () => lookAt({ x: 0, y: 0 });

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleMove);
    document.documentElement.addEventListener("pointerleave", handleLeave);

    // Touch screens have no hover, so the eyes glance around on their own.
    if (!window.matchMedia("(pointer: fine)").matches) {
      const glance = () => {
        const angle = Math.random() * Math.PI * 2;
        const reach = Math.random() < 0.35 ? 0 : 0.6 + Math.random() * 0.4;
        lookAt({ x: Math.cos(angle) * reach, y: Math.sin(angle) * reach });
        idle = window.setTimeout(glance, 1800 + Math.random() * 2200);
      };
      idle = window.setTimeout(glance, 1500);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(idle);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleMove);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        {EYES.map((eye) => (
          <clipPath key={eye.id} id={`eye-${eye.id}`}>
            <polygon points={eye.clip} />
          </clipPath>
        ))}
      </defs>
      {EYES.map((eye, i) => (
        <g key={eye.id} clipPath={`url(#eye-${eye.id})`}>
          <image
            ref={(node) => {
              irisRefs.current[i] = node;
            }}
            href={eye.src}
            x={eye.iris.x}
            y={eye.iris.y}
            width={eye.iris.size}
            height={eye.iris.size}
          />
        </g>
      ))}
    </svg>
  );
};
