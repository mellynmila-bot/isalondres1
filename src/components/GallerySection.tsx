import React, { useState, useEffect, useCallback } from 'react';
import { translations, Language } from '../data/translations';
import { siteData } from '../data/siteData';
import { SparkleStar, GoldDivider } from './Ornaments';
import { MessageCircle, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryProps {
  lang: Language;
}

export const GallerySection: React.FC<GalleryProps> = ({ lang }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const t = translations[lang].gallery;

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showNext = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % siteData.gallery.length);
    }
  }, [activeImageIndex]);

  const showPrev = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + siteData.gallery.length) % siteData.gallery.length
      );
    }
  }, [activeImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, closeLightbox, showNext, showPrev]);

  // Mobile swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) showNext();
    if (diff < -50) showPrev();
    setTouchStart(null);
  };

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[#FBF9F5] text-[#141414] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1ECE2] border border-[#C9A24D]/40 rounded-full mb-2">
            <SparkleStar className="w-3 h-3 text-[#C9A24D]" fill="#C9A24D" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7030]">
              Portfolio &amp; Art
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#0E0E0F] tracking-tight text-balance">
            {t.titleKey1}
            <span className="text-[#C9A24D]">{t.titleKey2}</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6B6B6B] font-light max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <GoldDivider className="my-6" />
        </div>

        {/* 8 Photos Grid: 4 cols on desktop, 2 cols on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {siteData.gallery.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-[6px] p-1 bg-white border border-[#C9A24D]/40 hover:border-[#C9A24D] overflow-hidden cursor-pointer shadow-xs hover:shadow-[0_8px_25px_rgba(201,162,77,0.2)] transition-all duration-300"
              role="button"
              tabIndex={0}
              aria-label={`${t.viewFullscreen}: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <div className="w-full h-full rounded-[4px] overflow-hidden relative bg-[#141414]">
                <img
                  src={item.src}
                  alt={lang === 'pt' ? item.altPt : item.altEn}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-black/60 text-[#E9D597] border border-[#C9A24D]/70 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Disclaimer */}
        <p className="mt-8 text-center text-xs text-[#6B6B6B] italic">
          {t.disclaimer}
        </p>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href={siteData.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button inline-flex items-center justify-center gap-2.5 px-9 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-md transition-all shadow-md hover:shadow-[0_6px_25px_rgba(201,162,77,0.35)] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.button}</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0E0E0F]/95 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Counter & Close */}
          <div className="absolute top-4 left-0 right-0 px-6 flex items-center justify-between z-10">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#E9D597] font-semibold bg-black/40 px-3 py-1 rounded-full border border-[#C9A24D]/30">
              {activeImageIndex + 1} / {siteData.gallery.length}
            </span>

            <button
              onClick={closeLightbox}
              className="p-2 text-[#F5F1E8] hover:text-[#C9A24D] bg-black/40 hover:bg-black/70 rounded-full border border-[#C9A24D]/30 transition-colors cursor-pointer"
              aria-label="Fechar galeria"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="hidden sm:flex absolute left-4 p-3 text-[#F5F1E8] hover:text-[#C9A24D] bg-black/40 hover:bg-black/70 rounded-full border border-[#C9A24D]/30 transition-colors cursor-pointer z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div
            className="max-w-4xl max-h-[82vh] relative p-1.5 bg-[#1C1C1E] border border-[#C9A24D] rounded-[8px] shadow-[0_10px_40px_rgba(201,162,77,0.3)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={siteData.gallery[activeImageIndex].src}
              alt={
                lang === 'pt'
                  ? siteData.gallery[activeImageIndex].altPt
                  : siteData.gallery[activeImageIndex].altEn
              }
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto object-contain rounded-[4px]"
            />
            <div className="p-3 text-center bg-[#1C1C1E] border-t border-[#C9A24D]/20">
              <p className="text-xs sm:text-sm text-[#F5F1E8] font-light">
                {lang === 'pt'
                  ? siteData.gallery[activeImageIndex].altPt
                  : siteData.gallery[activeImageIndex].altEn}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="hidden sm:flex absolute right-4 p-3 text-[#F5F1E8] hover:text-[#C9A24D] bg-black/40 hover:bg-black/70 rounded-full border border-[#C9A24D]/30 transition-colors cursor-pointer z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
