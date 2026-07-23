import React from "react";
import Link from "next/link";

interface ChavaniaLogoProps {
  /** Tailwind text-size class, e.g. "text-3xl". Defaults to "text-3xl". */
  size?: string;
  /** Extra classes forwarded to the outer element. */
  className?: string;
  /** Dot diameter relative to the current font size. 0.18 works well for most sizes. */
  dotScale?: number;
}

/**
 * Renders the "chavania" wordmark with the tittle (dot) on the letter 'i'
 * replaced by a custom orange dot that matches the project's secondary colour.
 *
 * Trick: the Turkish dotless-i character (ı / U+0131) is used in place of 'i'
 * so the font draws no dot of its own. A small <span> circle is then absolutely
 * positioned above the letter to act as the dot, coloured with --secondary.
 */
export default function ChavaniaLogo({
  size = "text-3xl",
  className = "",
  dotScale = 0.19,
}: ChavaniaLogoProps) {
  const DotlessI = () => (
    <span className="relative inline-block">
      {/* dotless i — no tittle drawn by the font */}
      ı
      {/* custom orange dot */}
      <span
        aria-hidden
        className="absolute rounded-full bg-secondary"
        style={{
          width:  `${dotScale}em`,
          height: `${dotScale}em`,
          top: `0.25em`,
          left: `60%`,
          transform: `translateX(-50%)`,
        }}
      />
    </span>
  );

  return (
    <Link href="/" className={`flex-shrink-0 ${className}`}>
      <span
        className={`${size} font-bold tracking-tighter font-segoe text-primary`}
        // screen readers should read "chavania", not "chavanıa"
        aria-label="chavania"
      >
        chavan<DotlessI />a
      </span>
    </Link>
  );
}
