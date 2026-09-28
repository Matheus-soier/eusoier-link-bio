"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/components/ui/cn";

// Fades its children in the first time they scroll into view.
export const Reveal = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("scroll-reveal", visible && "is-visible", className)}>
      {children}
    </div>
  );
};
