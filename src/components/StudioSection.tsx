import React, { useState, useEffect, useRef, useCallback } from 'react';
import { translations, Language } from '../data/translations';
import { siteData } from '../data/siteData';
import { SparkleStar, GoldDivider } from './Ornaments';
import {
  ShieldCheck,
  Sparkles,
  Lock,
  Award,
  Clock,
  MapPin,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ShieldAlert,
} from 'lucide-react';

interface StudioProps {
  lang: Language;
  hasAcceptedCookies: boolean;
  onAcceptCookies: () => void;
}

export const StudioSection: React.FC<StudioProps> = ({
  lang,
  hasAcceptedCookies,
  onAcceptCookies,
}) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const t = translations[lang].studio;

  // Icon mapping
  const featureIcons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#C9A24D]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#C9A24D]" />,
    Lock: <Lock className="w-5 h-5 text-[#C9A24D]" />,
    Award: <Award className="w-5 h-5 text-[#C9A24D]" />,
    Clock: <Clock className="w-5 h-5 text-[#C9A24D]" />,
    MapPin: <MapPin className="w-5 h-5 text-[#C9A24D]" />,
  };

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index % siteData.studioImages.length);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showNextLightbox = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % siteData.studioImages.length);
    }
  }, [activeLightboxIndex]);

  const showPrevLightbox = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + siteData.studioImages.length) % siteData.studioImages.length
      );
    }
  }, [activeLightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextLightbox();
      if (e.key === 'ArrowLeft') showPrevLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeLightboxIndex, closeLightbox, showNextLightbox, showPrevLightbox]);

  // Two complete sets for 100% seamless infinite looping
  const infiniteImageList = [...siteData.studioImages, ...siteData.studioImages];

  return (
    <section id="studio" className="py-20 sm:py-28 md:py-32 bg-[#0E0E0F] text-[#F5F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1C1E] border border-[#C9A24D]/40 rounded-full mb-2">
            <SparkleStar className="w-3 h-3 text-[#C9A24D]" fill="#C9A24D" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E9D597]">
              {lang === 'pt' ? 'O Ambiente' : 'Private Sanctuary'}
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#F5F1E8] tracking-tight text-balance">
            {t.titleKey1}
            <span className="text-[#C9A24D]">{t.titleKey2}</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#B9B3A5] font-light max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <GoldDivider dark className="my-6" />
        </div>

        {/* Studio Photos Infinite Carousel */}
        <div className="relative mb-16 overflow-hidden">
          {/* Header row with hint */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-[11px] sm:text-xs text-[#E9D597] italic tracking-wide">
              {t.carouselHint}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#B9B3A5] hidden sm:inline-block">
              Infinite Showcase
            </span>
          </div>

          {/* Infinite Marquee Track Container */}
          <div
            ref={marqueeContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="w-full overflow-hidden relative cursor-grab active:cursor-grabbing py-2"
          >
            {/* Subtle side fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#0E0E0F] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#0E0E0F] to-transparent z-10 pointer-events-none" />

            {/* Marquee Element */}
            <div
              className="animate-infinite-marquee flex gap-3.5 sm:gap-5"
              style={{
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {infiniteImageList.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="shrink-0 w-52 xs:w-60 sm:w-72 md:w-80 h-64 sm:h-72 rounded-[6px] p-1 bg-[#1C1C1E] border border-[#C9A24D]/40 hover:border-[#C9A24D] cursor-pointer group overflow-hidden transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(201,162,77,0.22)]"
                  role="button"
                  tabIndex={0}
                  aria-label="Abrir foto do estúdio"
                >
                  <div className="w-full h-full rounded-[4px] overflow-hidden relative bg-[#141414]">
                    <img
                      src={img.src}
                      alt={lang === 'pt' ? img.altPt : img.altEn}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-black/60 text-[#E9D597] border border-[#C9A24D] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 Studio Features Cards Grid 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {siteData.studioFeatures.map((feat) => (
            <div
              key={feat.id}
              className="p-5 sm:p-6 rounded-[6px] bg-[#1C1C1E] border border-[#C9A24D]/35 hover:border-[#C9A24D] transition-all hover:-translate-y-0.5 space-y-3"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-[#0E0E0F] border border-[#C9A24D]/40 flex items-center justify-center">
                {featureIcons[feat.icon] || <Sparkles className="w-5 h-5 text-[#C9A24D]" />}
              </div>
              <h3 className="font-serif-display text-base sm:text-lg text-[#F5F1E8] font-medium">
                {feat.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B3A5] font-light leading-relaxed">
                {feat.description[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* Google Maps Embed & Discretion Notice */}
        <div className="space-y-5 sm:space-y-6">
          <div className="rounded-[8px] p-1.5 sm:p-2 bg-[#1C1C1E] border border-[#C9A24D]/60 shadow-[0_10px_35px_rgba(201,162,77,0.15)] overflow-hidden">
            {hasAcceptedCookies ? (
              <div className="w-full h-[320px] sm:h-[400px] md:h-[440px] rounded-[4px] overflow-hidden bg-[#141414]">
                <iframe
                  src={siteData.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  title="London Studio Location"
                />
              </div>
            ) : (
              <div className="w-full h-[320px] sm:h-[400px] bg-[#141414] rounded-[4px] flex flex-col items-center justify-center p-6 text-center space-y-4 border border-[#C9A24D]/25">
                <ShieldAlert className="w-10 sm:w-12 h-10 sm:h-12 text-[#C9A24D]" />
                <p className="text-xs sm:text-sm text-[#B9B3A5] max-w-md">
                  {t.mapBlocked}
                </p>
                <button
                  onClick={onAcceptCookies}
                  className="px-6 py-2.5 bg-[#C9A24D] text-[#0E0E0F] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#b8913d] transition-all cursor-pointer"
                >
                  {t.acceptMapCta}
                </button>
              </div>
            )}
          </div>

          {/* Privacy & Location Discretion Notice (Highlighted card) */}
          <div className="p-4 sm:p-5 rounded-[6px] bg-[#1C1C1E] border border-[#C9A24D] flex items-center gap-3.5 sm:gap-4 shadow-sm">
            <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-[#0E0E0F] border border-[#C9A24D] flex items-center justify-center shrink-0">
              <Lock className="w-4 sm:w-5 h-4 sm:h-5 text-[#E9D597]" />
            </div>
            <p className="text-xs sm:text-sm text-[#F5F1E8] font-light leading-relaxed">
              {t.securityNotice}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-14 text-center">
          <a
            href={siteData.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-md transition-all shadow-md hover:shadow-[0_6px_25px_rgba(201,162,77,0.35)] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.button}</span>
          </a>
        </div>
      </div>

      {/* Lightbox for Studio Photos (Clean, NO caption/title underneath as requested) */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0E0E0F]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar: Counter & Close */}
          <div className="absolute top-4 left-0 right-0 px-4 sm:px-6 flex items-center justify-between z-10">
            <span className="text-xs uppercase tracking-widest text-[#E9D597] font-semibold bg-black/50 px-3 py-1 rounded-full border border-[#C9A24D]/30">
              {activeLightboxIndex + 1} / {siteData.studioImages.length}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2 text-[#F5F1E8] hover:text-[#C9A24D] bg-black/50 hover:bg-black/80 rounded-full border border-[#C9A24D]/30 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevLightbox();
            }}
            className="hidden sm:flex absolute left-4 p-3 text-[#F5F1E8] hover:text-[#C9A24D] bg-black/50 hover:bg-black/80 rounded-full border border-[#C9A24D]/30 cursor-pointer z-10 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Pure High-Res Photo Container (NO CAPTION UNDERNEATH) */}
          <div
            className="max-w-4xl max-h-[85vh] relative p-1.5 bg-[#1C1C1E] border border-[#C9A24D] rounded-[8px] overflow-hidden shadow-[0_15px_50px_rgba(201,162,77,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={siteData.studioImages[activeLightboxIndex].src}
              alt=""
              referrerPolicy="no-referrer"
              className="max-h-[80vh] w-auto max-w-[90vw] object-contain rounded-[4px]"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNextLightbox();
            }}
            className="hidden sm:flex absolute right-4 p-3 text-[#F5F1E8] hover:text-[#C9A24D] bg-black/50 hover:bg-black/80 rounded-full border border-[#C9A24D]/30 cursor-pointer z-10 transition-colors"
            aria-label="Próxima"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
