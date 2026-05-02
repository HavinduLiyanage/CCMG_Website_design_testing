import type { SVGProps } from "react";

const base = (size = 24): Partial<SVGProps<SVGSVGElement>> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
});

export function ArrowUpRightIcon({ size = 16, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeftIcon({ size = 24, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M19 12H5M5 12L12 19M5 12L12 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ size = 24, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeIcon({ size = 24, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function StatusUpIcon({ size = 24, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M21 7L13.5 14.5L9.5 10.5L3 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7H21V13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ size = 28, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 8H20M4 16H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ size = 28, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M6 6L18 18M6 18L18 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function XSocialIcon({ size = 18, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(size)} {...rest} viewBox="0 0 24 24">
      <path
        d="M17.5 3h3.2l-7 8 8.3 10h-6.5l-5.1-6.6L4.6 21H1.4l7.5-8.6L1 3h6.7l4.6 6.1L17.5 3Zm-1.1 16h1.8L7.7 5H5.8l10.6 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(size)} {...rest} viewBox="0 0 24 24">
      <path
        d="M4.98 3.5a2.5 2.5 0 1 1-.02 5.001A2.5 2.5 0 0 1 4.98 3.5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.84v1.57h.05c.54-1.02 1.86-2.1 3.83-2.1C21.5 8.97 22 11.36 22 14.4V21h-4v-5.85c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21h-4V9.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PhoneIcon({ size = 16, ...rest }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
