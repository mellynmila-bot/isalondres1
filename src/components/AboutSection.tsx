import React from 'react';
import { translations, Language } from '../data/translations';
import { siteData } from '../data/siteData';
import { SparkleStar, GoldDivider } from './Ornaments';
import { Instagram, MessageCircle, ExternalLink, ShieldAlert } from 'lucide-react';

interface AboutProps {
  lang: Language;
  hasAcceptedCookies: boolean;
  onAcceptCookies: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({
  lang,
  hasAcceptedCookies,
  onAcceptCookies,
}) => {
  const t = translations[lang].about;
  const tInsta = translations[lang].instagram;

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#0E0E0F] text-[#F5F1E8] relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute top-1/4 right-8 text-[#C9A24D]/25 animate-twinkle">
        <SparkleStar className="w-5 h-5" fill="#C9A24D" />
      </div>
      <div className="absolute bottom-1/3 left-8 text-[#E9D597]/20 animate-twinkle-delay">
        <SparkleStar className="w-6 h-6" fill="#E9D597" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column About Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Isadora Portrait in Vertical Oval Frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4">
            {/* Displaced decorative outer gold line */}
            <div
              className="absolute w-[240px] sm:w-[310px] md:w-[350px] h-[350px] sm:h-[450px] md:h-[500px] max-w-[80vw] rounded-[9999px] border border-[#C9A24D]/40 -translate-x-2 sm:-translate-x-3 -translate-y-2 sm:-translate-y-3 pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Oval Frame */}
            <div className="relative w-[230px] sm:w-[300px] md:w-[340px] h-[340px] sm:h-[440px] md:h-[490px] max-w-[80vw] rounded-[9999px] p-2 border-2 border-[#C9A24D] bg-[#1C1C1E] shadow-[0_15px_45px_rgba(201,162,77,0.22)]">
              <div className="w-full h-full rounded-[9999px] overflow-hidden relative border border-[#E9D597]/60 bg-[#141414]">
                <img
                  src={siteData.photos.about}
                  alt={lang === 'pt' ? "Isadora Lash & Brow Artist" : "Isadora Lash & Brow Artist London"}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy, Quotes & Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1C1E] border border-[#C9A24D]/40 rounded-full">
              <SparkleStar className="w-3 h-3 text-[#C9A24D]" fill="#C9A24D" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E9D597]">
                {lang === 'pt' ? 'A Especialista' : 'The Specialist'}
              </span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#F5F1E8] tracking-tight text-balance">
              {t.titleKey1}
              <span className="text-[#C9A24D]">{t.titleKey2}</span>
            </h2>

            <p className="text-base sm:text-lg text-[#E9D597] font-serif-display italic">
              {t.subtitle}
            </p>

            {/* Quote with Allison Calligraphic Signature */}
            <div className="p-6 rounded-[6px] bg-[#1C1C1E] border-l-2 border-[#C9A24D] border-t border-r border-b border-[#C9A24D]/25 relative">
              <span className="text-[#C9A24D] font-serif-display text-4xl leading-none absolute -top-3 left-4 bg-[#1C1C1E] px-2 select-none" aria-hidden="true">
                “
              </span>
              <p className="text-sm sm:text-base text-[#F5F1E8] italic font-serif-display leading-relaxed pt-1">
                {t.quote}
              </p>
              <div className="text-right mt-3">
                <span className="font-script text-3xl sm:text-4xl text-[#E9D597] block tracking-wide select-none">
                  {t.author}
                </span>
              </div>
            </div>

            {/* Paragraph 1: Emotional */}
            <p className="text-sm sm:text-base text-[#B9B3A5] font-light leading-relaxed">
              {t.p1}
            </p>

            {/* Paragraph 2: Technical */}
            <p className="text-sm sm:text-base text-[#B9B3A5] font-light leading-relaxed">
              {t.p2}
            </p>

            {/* Trust Seals / Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              {t.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-[4px] bg-[#1C1C1E] border border-[#C9A24D]/35 text-center text-xs font-semibold text-[#E9D597] uppercase tracking-wider transition-all hover:border-[#C9A24D] hover:-translate-y-0.5"
                >
                  {badge}
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href={siteData.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-button inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-md transition-all shadow-md hover:shadow-[0_6px_25px_rgba(201,162,77,0.35)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.button}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider with Center Sparkle */}
        <GoldDivider dark className="my-20" />

        {/* Sub-block: Instagram & Reel */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            {/* Instagram Profile Header */}
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#8F7030] via-[#C9A24D] to-[#E9D597]">
                <img
                  src={siteData.photos.about}
                  alt="Isadora Instagram Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="text-left">
                <span className="font-serif-display text-lg text-[#F5F1E8] font-medium block leading-none">
                  Isadora Lash &amp; Brows
                </span>
                <a
                  href={siteData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C9A24D] hover:underline"
                >
                  {siteData.instagramHandle}
                </a>
              </div>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F5F1E8]">
              {tInsta.subtitle}
            </h3>
            <p className="text-sm text-[#B9B3A5] font-light max-w-lg mx-auto">
              {tInsta.description}
            </p>
          </div>

          {/* Reel Embed Container (Max Width ~400px, Fine Gold Frame) */}
          <div className="max-w-[400px] mx-auto">
            <div className="rounded-[8px] p-2 bg-[#1C1C1E] border border-[#C9A24D] shadow-[0_8px_35px_rgba(201,162,77,0.18)] overflow-hidden">
              {hasAcceptedCookies ? (
                <div className="relative aspect-[9/16] w-full bg-black rounded-[4px] overflow-hidden">
                  <iframe
                    src={siteData.reelEmbedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    scrolling="no"
                    title="Isadora Lash Reel"
                  />
                </div>
              ) : (
                <div className="aspect-[9/16] w-full bg-[#141414] rounded-[4px] flex flex-col items-center justify-center p-6 text-center space-y-4 border border-[#C9A24D]/25">
                  <ShieldAlert className="w-10 h-10 text-[#C9A24D]" />
                  <p className="text-xs text-[#B9B3A5] leading-relaxed">
                    {tInsta.cookiesBlocked}
                  </p>
                  <button
                    onClick={onAcceptCookies}
                    className="px-4 py-2 bg-[#C9A24D] text-[#0E0E0F] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#b8913d] transition-all cursor-pointer"
                  >
                    {tInsta.acceptCookiesCta}
                  </button>
                  <a
                    href={siteData.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#E9D597] underline inline-flex items-center gap-1"
                  >
                    <span>{lang === 'pt' ? 'Ver diretamente no Instagram' : 'View on Instagram'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Instagram Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={siteData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F5F1E8] hover:text-[#0E0E0F] bg-transparent hover:bg-[#E9D597] border border-[#C9A24D] rounded-md transition-all cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-[#C9A24D]" />
              <span>{tInsta.followButton}</span>
            </a>

            <a
              href={siteData.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-button inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-md transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{tInsta.bookButton}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
