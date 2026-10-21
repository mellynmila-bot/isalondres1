import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { translations, Language } from '../data/translations';
import { MessageCircle } from 'lucide-react';

interface FloatingCtaProps {
  lang: Language;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[lang].floatingButton;

  useEffect(() => {
    const handleScroll = () => {
      // Visible after scrolling past 350px (beyond hero)
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      className="fixed bottom-6 right-5 sm:right-7 z-40 animate-in fade-in zoom-in-90 duration-300"
      aria-label="Agendamento rápido"
    >
      <a
        href={siteData.whatsappDefaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.ariaLabel}
        className="shimmer-button flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-full shadow-[0_6px_25px_rgba(201,162,77,0.45)] hover:shadow-[0_8px_30px_rgba(201,162,77,0.6)] border border-[#E9D597] transition-all transform hover:-translate-y-1 cursor-pointer select-none"
      >
        <MessageCircle className="w-5 h-5 text-[#0E0E0F] shrink-0" />
        <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap">
          {t.text}
        </span>
      </a>
    </aside>
  );
};
