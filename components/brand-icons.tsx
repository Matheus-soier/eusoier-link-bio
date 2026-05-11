import type { SVGProps } from "react";
import Image from "next/image";

type BrandIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type RasterIconProps = {
  size?: number;
  className?: string;
};

export const IconSinapseS = ({ size = 20, className }: RasterIconProps) => {
  const width = size * 2.2;
  const height = size * 1.6;
  return (
    <Image
      src="/linktree/icon-sinapse.png"
      alt=""
      aria-hidden
      width={Math.round(width * 2)}
      height={Math.round(height * 2)}
      unoptimized
      className={className}
      style={{ width, height, objectFit: "contain" }}
    />
  );
};

export const IconSociosAI = ({ className }: RasterIconProps) => (
  <Image
    src="/linktree/icon-socios-ai.png"
    alt=""
    aria-hidden
    width={144}
    height={81}
    unoptimized
    className={className}
    style={{ width: 72, height: 72, objectFit: "contain" }}
  />
);

export const IconMindloop = ({ size = 20, className }: RasterIconProps) => {
  const width = size * 2.2;
  const height = size * 1.6;
  return (
    <Image
      src="/linktree/icon-mindloop.png"
      alt=""
      aria-hidden
      width={Math.round(width * 2)}
      height={Math.round(height * 2)}
      unoptimized
      className={className}
      style={{ width, height, objectFit: "contain" }}
    />
  );
};

export const BrandInstagram = ({
  size = 20,
  className,
  ...props
}: BrandIconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      height="17"
      rx="5"
      stroke="currentColor"
      strokeWidth="2"
      width="17"
      x="3.5"
      y="3.5"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.2" cy="6.8" fill="currentColor" r="1.2" />
  </svg>
);

export const BrandYoutube = ({
  size = 20,
  className,
  ...props
}: BrandIconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 8.3c0-1.9-1.4-3.4-3.2-3.6C16.2 4.5 14.3 4.4 12 4.4s-4.2.1-5.8.3C4.4 4.9 3 6.4 3 8.3v7.4c0 1.9 1.4 3.4 3.2 3.6 1.6.2 3.5.3 5.8.3s4.2-.1 5.8-.3c1.8-.2 3.2-1.7 3.2-3.6V8.3Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path d="m10 8.6 6 3.4-6 3.4V8.6Z" fill="currentColor" />
  </svg>
);

export const BrandWhatsapp = ({
  size = 20,
  className,
  ...props
}: BrandIconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.4 19.7 5.6 16A8 8 0 1 1 8 18.4l-3.6 1.3Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M9.2 8.7c.2-.5.4-.6.7-.6h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.1.1-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5 0l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.6.7-.6.3-1.6.4-2.8-.1-2.2-.9-4-2.7-4.9-4.9-.5-1.2-.4-2.2-.1-2.8Z"
      fill="currentColor"
    />
  </svg>
);

export const BrandX = ({
  size = 20,
  className,
  ...props
}: BrandIconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
      fill="currentColor"
    />
  </svg>
);

export const BrandDiscord = ({
  size = 20,
  className,
  ...props
}: BrandIconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.4 6.2A13.8 13.8 0 0 1 10 5.4l.5 1a11.4 11.4 0 0 1 3 0l.5-1a13.8 13.8 0 0 1 2.6.8c1.7 2.5 2.4 5 2.1 7.5a13 13 0 0 1-3.3 1.7l-.8-1.2c.5-.2 1-.5 1.4-.8a8.5 8.5 0 0 1-8 0c.4.3.9.6 1.4.8l-.8 1.2a13 13 0 0 1-3.3-1.7c-.3-2.5.4-5 2.1-7.5Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <circle cx="9.5" cy="11.5" fill="currentColor" r="1.2" />
    <circle cx="14.5" cy="11.5" fill="currentColor" r="1.2" />
  </svg>
);
