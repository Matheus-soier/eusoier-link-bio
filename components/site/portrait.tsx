import Image from "next/image";

const corners = [
  "-left-1.5 -top-1.5 border-l border-t",
  "-right-1.5 -top-1.5 border-r border-t",
  "-bottom-1.5 -left-1.5 border-b border-l",
  "-bottom-1.5 -right-1.5 border-b border-r",
];

type PortraitProps = {
  src: string;
  alt: string;
  caption: string;
  location: string;
};

export const Portrait = ({ src, alt, caption, location }: PortraitProps) => (
  <div className="relative w-[220px] sm:w-[250px]">
    {corners.map((position) => (
      <span
        key={position}
        aria-hidden="true"
        className={`absolute h-3 w-3 border-fg/50 ${position}`}
      />
    ))}

    <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-card">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="250px"
        className="scale-110 object-cover object-[50%_30%] brightness-[0.72] grayscale contrast-[1.35]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.4)_0px,rgba(0,0,0,0.4)_1px,transparent_1px,transparent_3px)]"
      />
      <div aria-hidden="true" className="scan-beam absolute inset-x-0 h-24" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 font-mono text-[10px] uppercase tracking-[0.14em]">
        <span className="text-fg">{caption}</span>
        <span className="text-muted">{location}</span>
      </div>
    </div>
  </div>
);
