import React from 'react';
import { translations, Language } from '../data/translations';
import { siteData } from '../data/siteData';
import { BrandLogo, SparkleStar } from './Ornaments';
import { ModalType } from './LegalModals';
import { Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenModal: (type: ModalType) => void;
  onOpenCookieBanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenModal,
  onOpenCookieBanner,
}) => {
  const t = translations[lang].footer;

  const legalNotice =
    siteData.legal.activeOption === 'sole_trader'
      ? siteData.legal.soleTraderText
      : siteData.legal.ltdText;

  return (
    <footer className="bg-[#F1ECE2] text-[#141414] border-t border-[#C9A24D]/40 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Line 1: Wordmark logo + Instagram icon + Discreet Book Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-6 border-b border-[#C9A24D]/25">
          <BrandLogo
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          <div className="flex items-center gap-3">
            <a
              href={siteData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @isadorab.lash"
              className="w-9 h-9 rounded-full bg-white border border-[#C9A24D]/40 hover:border-[#C9A24D] flex items-center justify-center text-[#141414] hover:text-[#C9A24D] transition-colors shadow-xs"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={siteData.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#0E0E0F] hover:bg-[#1C1C1E] text-[#F5F1E8] rounded-md transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E9D597]" />
              <span>{t.scheduleCta}</span>
            </a>
          </div>
        </div>

        {/* Lines 2, 3, 4: Copyright, Legal Registration & Contact */}
        <div className="space-y-2 text-xs sm:text-[13px] text-[#6B6B6B]">
          {/* Line 2: Copyright */}
          <p className="font-medium text-[#141414]">{t.copyright}</p>

          {/* Line 3: UK Legal Registration (Sole Trader / Ltd in English) */}
          <p className="font-mono text-[11px] sm:text-xs text-[#6B6B6B]">
            {legalNotice}
          </p>

          {/* Line 4: Mandatory Contact */}
          <p className="text-xs">
            {t.contact}
          </p>
        </div>

        {/* Line 5: Modal Links separated by Gold Dot */}
        <div className="flex items-center justify-center gap-3 text-xs text-[#4A4A4A] pt-2">
          <button
            onClick={() => onOpenModal('privacy')}
            className="hover:text-[#8F7030] hover:underline transition-colors cursor-pointer"
          >
            {t.privacyPolicy}
          </button>

          <SparkleStar className="w-2.5 h-2.5 text-[#C9A24D]" fill="#C9A24D" />

          <button
            onClick={() => onOpenModal('terms')}
            className="hover:text-[#8F7030] hover:underline transition-colors cursor-pointer"
          >
            {t.termsOfUse}
          </button>

          <SparkleStar className="w-2.5 h-2.5 text-[#C9A24D]" fill="#C9A24D" />

          <button
            onClick={onOpenCookieBanner}
            className="hover:text-[#8F7030] hover:underline transition-colors cursor-pointer"
          >
            {t.cookieSettings}
          </button>
        </div>

        {/* Discreet decorative footer note */}
        <p className="text-[10px] text-[#8F7030]/80 uppercase tracking-widest pt-4">
          London, UK · Lash Extensions &amp; Brows Specialist
        </p>
      </div>
    </footer>
  );
};
