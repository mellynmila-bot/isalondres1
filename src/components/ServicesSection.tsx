import React from 'react';
import { translations, Language } from '../data/translations';
import { siteData, ServiceItem } from '../data/siteData';
import { SparkleStar, GoldDivider } from './Ornaments';
import { MessageCircle, ShieldCheck } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

export const ServicesSection: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang].services;

  const lashServices = siteData.services.filter((s) => s.category === 'lashes');
  const browServices = siteData.services.filter((s) => s.category === 'brows');
  const lipServices = siteData.services.filter((s) => s.category === 'lips');

  const groups = [
    { key: 'lashes', title: t.groups.lashes, items: lashServices },
    { key: 'brows', title: t.groups.brows, items: browServices },
    { key: 'lips', title: t.groups.lips, items: lipServices },
  ];

  const getServiceBookingUrl = (serviceName: string) => {
    const text =
      lang === 'pt'
        ? `Olá, Isa! Gostaria de agendar um horário para ${serviceName}. Pode me informar os horários disponíveis? ✨`
        : `Hello Isa, I would like to book an appointment for ${serviceName}. Could you please share your available times? ✨`;
    return `https://api.whatsapp.com/send?phone=${siteData.whatsappPhone}&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-[#0E0E0F] text-[#F5F1E8] relative overflow-hidden">
      {/* Subtle gold sparkles in background */}
      <div className="absolute top-12 left-10 text-[#C9A24D]/30 animate-twinkle">
        <SparkleStar className="w-5 h-5" fill="#C9A24D" />
      </div>
      <div className="absolute bottom-16 right-12 text-[#E9D597]/25 animate-twinkle-delay">
        <SparkleStar className="w-6 h-6" fill="#E9D597" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C1C1E] border border-[#C9A24D]/40 rounded-full mb-2">
            <SparkleStar className="w-3 h-3 text-[#C9A24D]" fill="#C9A24D" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E9D597]">
              {lang === 'pt' ? 'Menu de Serviços' : 'Service Menu'}
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

        {/* Grouped Services */}
        <div className="space-y-16">
          {groups.map((group) => (
            <div key={group.key} className="space-y-6">
              {/* Category Subheading */}
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#C9A24D]" aria-hidden="true" />
                <h3 className="font-serif-display text-xl sm:text-2xl text-[#E9D597] tracking-wider uppercase font-medium">
                  {group.title}
                </h3>
                <span className="grow h-[1px] bg-gradient-to-r from-[#C9A24D]/40 to-transparent" aria-hidden="true" />
              </div>

              {/* Service Cards Grid (2 cols desktop, 1 col mobile) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((service: ServiceItem) => (
                  <article
                    key={service.id}
                    className="flex flex-col sm:flex-row bg-[#1C1C1E] rounded-[6px] border border-[#C9A24D]/35 hover:border-[#C9A24D] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,162,77,0.12)] group"
                  >
                    {/* Image with subtle zoom on hover */}
                    <div className="sm:w-2/5 h-56 sm:h-auto relative overflow-hidden bg-[#141414] shrink-0 border-b sm:border-b-0 sm:border-r border-[#C9A24D]/25">
                      <img
                        src={service.image}
                        alt={`${service.name[lang]} - ${group.title}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between grow space-y-4">
                      <div className="space-y-2">
                        <div>
                          <h4 className="font-serif-display text-lg sm:text-xl text-[#F5F1E8] group-hover:text-[#E9D597] transition-colors leading-snug">
                            {service.name[lang]}
                          </h4>
                        </div>

                        <p className="text-xs sm:text-sm text-[#B9B3A5] font-light leading-relaxed">
                          {service.description[lang]}
                        </p>
                      </div>

                      {/* Card Action */}
                      <div className="pt-2">
                        <a
                          href={getServiceBookingUrl(service.name[lang])}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shimmer-button inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-[4px] transition-all cursor-pointer text-center"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#0E0E0F]" />
                          <span>{t.bookCard}</span>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Small Responsible Disclaimer Note */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-[6px] bg-[#1C1C1E]/60 border border-[#C9A24D]/30 flex items-center gap-3 text-center sm:text-left">
          <ShieldCheck className="w-5 h-5 text-[#C9A24D] shrink-0 mx-auto sm:mx-0" />
          <p className="text-xs text-[#B9B3A5] leading-relaxed">
            {t.disclaimer}
          </p>
        </div>

        {/* Section Bottom CTA Button */}
        <div className="mt-12 text-center">
          <a
            href={siteData.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button inline-flex items-center justify-center gap-2.5 px-9 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-md transition-all shadow-md hover:shadow-[0_6px_25px_rgba(201,162,77,0.35)] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.sectionButton}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
