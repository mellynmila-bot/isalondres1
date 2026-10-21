import React from 'react';
import { translations, Language } from '../data/translations';
import { siteData } from '../data/siteData';
import { SparkleStar } from './Ornaments';
import { MapPin, Eye, Sparkles, MessageCircle, ArrowDown } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 sm:pt-28 md:pt-36 md:pb-24 bg-[#FBF9F5] flex items-center overflow-hidden">
      {/* Subtle background ambient gold glow */}
      <div className="absolute top-1/4 right-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#E9D597]/20 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-[#C9A24D]/10 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Photo Column: ON MOBILE IT IS FIRST (order-1), ON DESKTOP IT IS RIGHT (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center relative py-4 lg:py-6">
            {/* Ambient decorative sparkles */}
            <div className="absolute -top-2 left-4 sm:-top-4 sm:-left-2 text-[#C9A24D] animate-twinkle">
              <SparkleStar className="w-5 sm:w-6 h-5 sm:h-6" fill="#C9A24D" />
            </div>
            <div className="absolute top-1/2 -right-2 sm:-right-4 text-[#E9D597] animate-twinkle-delay">
              <SparkleStar className="w-4 sm:w-5 h-4 sm:h-5" fill="#E9D597" />
            </div>
            <div className="absolute -bottom-2 left-8 sm:left-6 text-[#C9A24D] animate-twinkle">
              <SparkleStar className="w-4 h-4" fill="#C9A24D" />
            </div>

            {/* Displaced decorative outer gold line */}
            <div
              className="absolute w-[240px] sm:w-[320px] md:w-[360px] h-[350px] sm:h-[460px] md:h-[520px] max-w-[80vw] rounded-[9999px] border border-[#C9A24D]/40 -translate-x-2 sm:-translate-x-3 -translate-y-2 sm:-translate-y-3 pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Oval Frame */}
            <div className="relative w-[230px] sm:w-[310px] md:w-[350px] h-[340px] sm:h-[450px] md:h-[510px] max-w-[80vw] rounded-[9999px] p-2 border-2 border-[#C9A24D] bg-[#FBF9F5] shadow-[0_15px_45px_rgba(201,162,77,0.22)]">
              <div className="w-full h-full rounded-[9999px] overflow-hidden relative border border-[#E9D597]/70 bg-[#1C1C1E]">
                <img
                  src={siteData.photos.hero}
                  alt={lang === 'pt' ? "Isadora - Lash & Brow Artist em Londres" : "Isadora - Lash & Brow Artist in London"}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle soft vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Text Column: ON MOBILE IT IS SECOND (order-2), ON DESKTOP IT IS LEFT (lg:order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1ECE2] border border-[#C9A24D]/40 rounded-full">
              <SparkleStar className="w-3 h-3 text-[#C9A24D]" fill="#C9A24D" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#8F7030]">
                {t.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl text-[#0E0E0F] leading-[1.14] tracking-tight text-balance">
              <span className="text-[#C9A24D]">{t.titleKey1}</span>
              {t.titleKey2}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl font-light">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
              <a
                href={siteData.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-button inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-md transition-all shadow-md hover:shadow-[0_6px_22px_rgba(201,162,77,0.35)] cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.bookButton}</span>
              </a>

              <a
                href="#servicos"
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#141414] hover:text-[#8F7030] border border-[#C9A24D]/60 hover:border-[#C9A24D] rounded-md transition-all bg-white/50 hover:bg-white text-center cursor-pointer"
              >
                <span>{t.servicesButton}</span>
                <ArrowDown className="w-4 h-4 text-[#C9A24D]" />
              </a>
            </div>

            {/* 3 Trust Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-[#C9A24D]/20">
              <div className="p-3.5 rounded-[6px] bg-[#F1ECE2]/70 border border-[#C9A24D]/35 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center gap-2 text-[#8F7030] mb-1">
                  <MapPin className="w-4 h-4 text-[#C9A24D] shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0E0E0F]">London</span>
                </div>
                <p className="text-xs text-[#6B6B6B] leading-snug">{t.card1}</p>
              </div>

              <div className="p-3.5 rounded-[6px] bg-[#F1ECE2]/70 border border-[#C9A24D]/35 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center gap-2 text-[#8F7030] mb-1">
                  <Eye className="w-4 h-4 text-[#C9A24D] shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0E0E0F]">Mapping</span>
                </div>
                <p className="text-xs text-[#6B6B6B] leading-snug">{t.card2}</p>
              </div>

              <div className="p-3.5 rounded-[6px] bg-[#F1ECE2]/70 border border-[#C9A24D]/35 transition-transform hover:-translate-y-0.5">
                <div className="flex items-center gap-2 text-[#8F7030] mb-1">
                  <Sparkles className="w-4 h-4 text-[#C9A24D] shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0E0E0F]">Técnicas</span>
                </div>
                <p className="text-xs text-[#6B6B6B] leading-snug">{t.card3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
