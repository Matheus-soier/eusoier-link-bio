"use client";

import { useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=<>/";
const FRAMES = 32;

type ScrambleTextProps = {
  text: string;
  delay?: number;
  className?: string;
};

// Decodes the text left to right with random glyphs. Server renders the final
// text, so crawlers and no-JS visitors see the real content.
export const ScrambleText = ({ text, delay = 0, className }: ScrambleTextProps) => {
  const [output, setOutput] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let raf = 0;

    const tick = () => {
      frame += 1;
      const revealed = (frame / FRAMES) * text.length;
      setOutput(
        text
          .split("")
          .map((char, i) =>
            char === " " || i < revealed ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
          )
          .join(""),
      );
      if (frame < FRAMES) raf = requestAnimationFrame(tick);
    };

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [text, delay]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{output}</span>
    </span>
  );
};
