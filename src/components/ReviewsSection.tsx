import React from 'react';
import { translations, Language } from '../data/translations';
import { siteData } from '../data/siteData';
import { SparkleStar, GoldDivider } from './Ornaments';
import { Star, MessageCircle } from 'lucide-react';

interface ReviewsProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsProps> = ({ lang }) => {
  const t = translations[lang].reviews;

  return (
    <section id="avaliacoes" className="py-24 sm:py-32 bg-[#FBF9F5] text-[#141414] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1ECE2] border border-[#C9A24D]/40 rounded-full mb-2">
            <SparkleStar className="w-3 h-3 text-[#C9A24D]" fill="#C9A24D" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7030]">
              {lang === 'pt' ? 'Experiências Reais' : 'Client Stories'}
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

        {/* 6 Testimonials: Grid 3x2 on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.testimonials.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-[6px] p-6 border border-[#C9A24D]/35 hover:border-[#C9A24D] shadow-xs hover:shadow-[0_8px_25px_rgba(201,162,77,0.12)] transition-all duration-300 flex flex-col justify-between space-y-5 relative"
            >
              {/* Top: 5 Gold Stars & Service */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1" aria-label="5 de 5 estrelas">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#C9A24D] text-[#C9A24D]"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8F7030] bg-[#F1ECE2] px-2.5 py-0.5 rounded-[4px] border border-[#C9A24D]/30">
                    {review.service}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-[#141414] font-light leading-relaxed italic relative pt-2">
                  <span className="text-[#C9A24D] font-serif-display text-2xl mr-1 select-none">“</span>
                  {review.text}
                  <span className="text-[#C9A24D] font-serif-display text-2xl ml-1 select-none">”</span>
                </p>
              </div>

              {/* Bottom: Client Name */}
              <div className="pt-3 border-t border-[#C9A24D]/20 flex items-center justify-between">
                <span className="font-serif-display text-base text-[#0E0E0F] font-semibold tracking-wide">
                  {review.name}
                </span>
                <span className="text-[11px] text-[#6B6B6B] uppercase tracking-wider">
                  Verified Client
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
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
    </section>
  );
};
