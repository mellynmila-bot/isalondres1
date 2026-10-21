import React, { useState } from 'react';
import { translations, Language } from '../data/translations';
import { siteData } from '../data/siteData';
import { SparkleStar, GoldDivider } from './Ornaments';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FaqProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const t = translations[lang].faq;

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0E0E0F] text-[#F5F1E8] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1C1E] border border-[#C9A24D]/40 rounded-full mb-2">
            <SparkleStar className="w-3 h-3 text-[#C9A24D]" fill="#C9A24D" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E9D597]">
              FAQ &amp; Care
            </span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#F5F1E8] tracking-tight text-balance">
            {t.titleKey1}
            <span className="text-[#C9A24D]">{t.titleKey2}</span>
          </h2>

          <p className="text-sm sm:text-base text-[#B9B3A5] font-light max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <GoldDivider dark className="my-6" />
        </div>

        {/* 12 FAQs Accordion */}
        <div className="space-y-3.5">
          {siteData.faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-[6px] transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#1C1C1E] border-[#C9A24D] shadow-[0_4px_20px_rgba(201,162,77,0.12)]'
                    : 'bg-[#141414] border-[#C9A24D]/30 hover:border-[#C9A24D]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#C9A24D] font-bold">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="font-serif-display text-base sm:text-lg text-[#F5F1E8] font-medium leading-snug">
                      {faq.question[lang]}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-[#C9A24D] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E9D597]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-left border-t border-[#C9A24D]/20 animate-in fade-in duration-200 space-y-2">
                    {/* Short concise answer first (GEO standard) */}
                    <p className="text-xs sm:text-sm font-semibold text-[#E9D597] leading-relaxed">
                      {faq.shortAnswer[lang]}
                    </p>
                    {/* Detailed explanation */}
                    <p className="text-xs sm:text-sm text-[#B9B3A5] font-light leading-relaxed">
                      {faq.fullAnswer[lang]}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
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
