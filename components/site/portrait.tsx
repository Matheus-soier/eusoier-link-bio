import Image from "next/image";

const corners = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

export const Portrait = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative h-[92px] w-[92px] p-1.5">
    {corners.map((position) => (
      <span
        key={position}
        aria-hidden="true"
        className={`absolute h-2.5 w-2.5 border-fg/60 ${position}`}
      />
    ))}
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="80px"
        className="object-cover brightness-[0.8] grayscale contrast-125"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.35)_0px,rgba(0,0,0,0.35)_1px,transparent_1px,transparent_3px)]"
      />
    </div>
  </div>
);
