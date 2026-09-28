"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { cn } from "@/components/ui/cn";

// Row list with an image preview that follows the mouse (desktop only).
export const ProjectList = ({ projects }: { projects: Project[] }) => {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse" || !previewRef.current) return;
    previewRef.current.style.transform = `translate3d(${event.clientX + 28}px, ${event.clientY - 80}px, 0)`;
  };

  return (
    <div onPointerMove={handlePointerMove} onPointerLeave={() => setActive(null)}>
      <ul>
        {projects.map((project, i) => (
          <li key={project.name}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              onPointerEnter={(event) => event.pointerType === "mouse" && setActive(i)}
              onFocus={() => setActive(null)}
              className={cn(
                "group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-3 border-b border-line py-5 outline-none transition-colors",
                "hover:border-fg/30 focus-visible:border-accent",
                i === 0 && "border-t",
              )}
            >
              <span className="font-mono text-[11px] text-muted">{project.index}</span>
              <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="text-lg tracking-[-0.02em] text-fg transition-transform duration-300 group-hover:translate-x-1">
                  {project.name}
                </span>
                <span className="text-sm text-muted">{project.description}</span>
              </span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-muted transition-colors group-hover:text-fg">
                <span className="hidden sm:inline">{project.domain}</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 hidden aspect-video w-[300px] md:block"
      >
        {projects.map((project, i) => (
          <Image
            key={project.name}
            src={project.image}
            alt=""
            fill
            sizes="300px"
            className={cn(
              "rounded-md border border-line object-cover shadow-2xl transition-[opacity,scale] duration-300",
              active === i ? "scale-100 opacity-100" : "scale-95 opacity-0",
            )}
          />
        ))}
      </div>
    </div>
  );
};
