import React from 'react';
import { translations, Language } from '../data/translations';
import { SparkleStar } from './Ornaments';
import { ShieldCheck } from 'lucide-react';

interface CookieBannerProps {
  lang: Language;
  onAccept: () => void;
  onDecline: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  lang,
  onAccept,
  onDecline,
}) => {
  const t = translations[lang].cookiesBanner;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-[#FBF9F5] text-[#141414] p-5 rounded-[8px] border-2 border-[#C9A24D] shadow-[0_10px_35px_rgba(201,162,77,0.22)] animate-in slide-in-from-bottom duration-300"
      role="region"
      aria-label="Cookie consent banner"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-[#F1ECE2] border border-[#C9A24D]/50 flex items-center justify-center shrink-0 text-[#8F7030]">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="font-serif-display text-sm font-semibold text-[#0E0E0F]">
              Cookies &amp; Privacy (UK PECR)
            </span>
            <SparkleStar className="w-2.5 h-2.5 text-[#C9A24D]" fill="#C9A24D" />
          </div>
          <p className="text-xs text-[#6B6B6B] leading-relaxed">
            {t.message}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[#C9A24D]/25">
        <button
          onClick={onDecline}
          className="px-3.5 py-1.5 text-xs font-medium text-[#6B6B6B] hover:text-[#0E0E0F] hover:bg-[#F1ECE2] rounded-[4px] transition-colors cursor-pointer"
        >
          {t.decline}
        </button>

        <button
          onClick={onAccept}
          className="shimmer-button px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-[4px] shadow-xs cursor-pointer"
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
};
