"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export const Clock = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <time className="tabular-nums" suppressHydrationWarning>
      {time ?? "--:--:--"}
    </time>
  );
};
