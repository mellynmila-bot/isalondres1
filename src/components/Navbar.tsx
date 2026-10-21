import React, { useState, useEffect } from 'react';
import { BrandLogo } from './Ornaments';
import { translations, Language } from '../data/translations';
import { siteData } from '../data/siteData';
import { Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicos', label: t.services },
    { href: '#galeria', label: t.gallery },
    { href: '#sobre', label: t.about },
    { href: '#avaliacoes', label: t.reviews },
    { href: '#studio', label: t.studio },
    { href: '#faq', label: t.faq },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#C9A24D]/25 shadow-[0_4px_20px_rgba(201,162,77,0.06)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <div className="shrink-0">
            <BrandLogo
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wider uppercase text-[#141414]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#8F7030] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A24D] hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Language Switch */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Language Switch Pill */}
            <button
              onClick={onToggleLang}
              aria-label={t.langSwitchLabel}
              title={t.langSwitchLabel}
              className="inline-flex items-center border border-[#C9A24D]/40 hover:border-[#C9A24D] rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider text-[#141414] hover:text-[#8F7030] transition-all bg-white/60 hover:bg-white shadow-xs cursor-pointer select-none"
            >
              <span className={lang === 'pt' ? 'text-[#8F7030] font-bold' : 'text-[#6B6B6B]'}>PT</span>
              <span className="mx-1 text-[#C9A24D]/60" aria-hidden="true">|</span>
              <span className={lang === 'en' ? 'text-[#8F7030] font-bold' : 'text-[#6B6B6B]'}>EN</span>
            </button>

            {/* Book Now Primary Button */}
            <a
              href={siteData.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-button inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-md transition-all shadow-xs hover:shadow-[0_4px_16px_rgba(201,162,77,0.3)] cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#0E0E0F]" />
              <span>{t.bookCta}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Lang toggle + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              aria-label={t.langSwitchLabel}
              className="border border-[#C9A24D]/40 rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#141414] bg-white/80"
            >
              {lang.toUpperCase()}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="p-2 text-[#0E0E0F] hover:text-[#C9A24D] transition-colors focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#0E0E0F]/60 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#FBF9F5] shadow-2xl p-6 flex flex-col justify-between border-l border-[#C9A24D]/30 animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C9A24D]/20">
                <BrandLogo />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#141414] hover:text-[#C9A24D] cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-5 text-sm uppercase tracking-wider font-medium text-[#141414]">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="py-1 hover:text-[#8F7030] transition-colors flex items-center justify-between border-b border-black/5"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#C9A24D] text-xs">→</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#C9A24D]/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase text-[#6B6B6B] tracking-wider">Language / Idioma:</span>
                <button
                  onClick={onToggleLang}
                  className="border border-[#C9A24D] rounded-full px-3 py-1 text-xs font-semibold text-[#0E0E0F] bg-white shadow-xs"
                >
                  {lang === 'pt' ? 'Mudar para English' : 'Mudar para Português'}
                </button>
              </div>

              <a
                href={siteData.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-button flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold uppercase tracking-wider bg-[#C9A24D] text-[#0E0E0F] rounded-md shadow-md text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.bookCta} (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
