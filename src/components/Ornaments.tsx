import React from 'react';

/**
 * Fine gold eyelash curve ornament
 */
export const LashCurve: React.FC<{ className?: string; stroke?: string }> = ({
  className = "w-6 h-3 inline-block",
  stroke = "#C9A24D"
}) => (
  <svg
    viewBox="0 0 40 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Base curved eyelid line */}
    <path
      d="M3 13 C 14 6, 26 6, 37 13"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Delicate lash hairs */}
    <path d="M12 9 C 11 6, 10 3, 9 2" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M18 7 C 18 4, 18 2, 17 1" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M24 7 C 25 4, 26 2, 27 1" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
    <path d="M30 9 C 32 6, 34 3, 35 2" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/**
 * 4-point sparkle star
 */
export const SparkleStar: React.FC<{ className?: string; fill?: string }> = ({
  className = "w-4 h-4 inline-block",
  fill = "#C9A24D"
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 2 Q 12 12, 22 12 Q 12 12, 12 22 Q 12 12, 2 12 Q 12 12, 12 2 Z"
      fill={fill}
    />
  </svg>
);

/**
 * Section divider with fine gold hairline and center sparkle
 */
export const GoldDivider: React.FC<{
  className?: string;
  dark?: boolean;
}> = ({ className = "my-12", dark = false }) => (
  <div className={`relative flex items-center justify-center w-full max-w-xl mx-auto px-4 ${className}`} aria-hidden="true">
    <div className={`h-[1px] w-full ${dark ? 'bg-gradient-to-r from-transparent via-[#C9A24D]/40 to-transparent' : 'bg-gradient-to-r from-transparent via-[#C9A24D]/50 to-transparent'}`} />
    <div className="absolute px-3 bg-inherit">
      <SparkleStar className="w-3.5 h-3.5 text-[#C9A24D]" fill="#C9A24D" />
    </div>
  </div>
);

/**
 * Brand Logo Text with Stylized Eyelash Curve
 */
export const BrandLogo: React.FC<{
  dark?: boolean;
  onClick?: () => void;
}> = ({ dark = false, onClick }) => (
  <div
    onClick={onClick}
    className="inline-flex flex-col cursor-pointer group select-none text-left"
    role="banner"
  >
    <div className="flex items-center gap-1.5">
      <span className={`font-serif-display text-lg sm:text-2xl tracking-[0.16em] sm:tracking-[0.22em] font-medium transition-colors ${dark ? 'text-[#F5F1E8] group-hover:text-[#E9D597]' : 'text-[#0E0E0F] group-hover:text-[#8F7030]'}`}>
        ISADORA
      </span>
      <LashCurve className="w-4 sm:w-5 h-2 sm:h-2.5 text-[#C9A24D] -mt-0.5 sm:-mt-1 transform transition-transform group-hover:scale-110" />
    </div>
    <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.28em] font-medium uppercase text-[#C9A24D]">
      LASH &amp; BROWS · LONDON
    </span>
  </div>
);
