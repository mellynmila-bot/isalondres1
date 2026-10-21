import { useState, useEffect } from 'react';
import { Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { StudioSection } from './components/StudioSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';
import { CookieBanner } from './components/CookieBanner';
import { LegalModals, ModalType } from './components/LegalModals';

export default function App() {
  // Multilingual State (pt-BR default)
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('isadora_lang');
      if (saved === 'en' || saved === 'pt') return saved;
      // Also check query param ?lang=en
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const qLang = params.get('lang');
        if (qLang === 'en') return 'en';
      }
    } catch {
      // localStorage may fail in restricted sandboxes
    }
    return 'pt';
  });

  // Cookie Consent State
  const [cookieConsent, setCookieConsent] = useState<'accepted' | 'declined' | null>(() => {
    try {
      const saved = localStorage.getItem('isadora_cookie_consent');
      if (saved === 'accepted' || saved === 'declined') return saved;
    } catch {
      // fallback
    }
    return null;
  });

  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // Sync lang with HTML attributes and document title
  useEffect(() => {
    try {
      localStorage.setItem('isadora_lang', lang);
    } catch {
      // Ignore storage errors
    }

    const htmlTag = document.documentElement;
    htmlTag.lang = lang === 'pt' ? 'pt-BR' : 'en-GB';

    const title =
      lang === 'pt'
        ? 'Isadora | Extensão de Cílios e Sobrancelhas em Londres'
        : 'Isadora | Lash Extensions & Brows in London';
    const desc =
      lang === 'pt'
        ? 'Extensão de cílios (Fox Eyes, Volume 5D, Brasileiro, Siren), sobrancelhas e Hidralips em Londres. Agende o seu horário com a Isadora.'
        : 'Lash extensions (Fox Eyes, Volume 5D, Brazilian Volume, Siren), brows and Hydralips in London. Book your appointment with Isadora.';

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);
  }, [lang]);

  // Initial banner display logic (show after 1.5 seconds if unset)
  useEffect(() => {
    if (cookieConsent === null) {
      const timer = setTimeout(() => {
        setShowCookieBanner(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [cookieConsent]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const handleAcceptCookies = () => {
    setCookieConsent('accepted');
    setShowCookieBanner(false);
    try {
      localStorage.setItem('isadora_cookie_consent', 'accepted');
    } catch {
      // Ignore
    }
  };

  const handleDeclineCookies = () => {
    setCookieConsent('declined');
    setShowCookieBanner(false);
    try {
      localStorage.setItem('isadora_cookie_consent', 'declined');
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#141414] font-body selection:bg-[#C9A24D]/25 selection:text-[#0E0E0F] overflow-x-hidden w-full">
      {/* 0. Top Fixed Navbar */}
      <Navbar lang={lang} onToggleLang={handleToggleLang} />

      {/* Main Content Sections (Strict Alternating Backgrounds) */}
      <main>
        {/* 1. Hero (Branco #FBF9F5) */}
        <Hero lang={lang} />

        {/* 2. Serviços (Preto #0E0E0F) */}
        <ServicesSection lang={lang} />

        {/* 3. Galeria (Branco #FBF9F5) */}
        <GallerySection lang={lang} />

        {/* 4. Sobre + Instagram (Preto #0E0E0F) */}
        <AboutSection
          lang={lang}
          hasAcceptedCookies={cookieConsent === 'accepted'}
          onAcceptCookies={handleAcceptCookies}
        />

        {/* 5. Feedbacks / Reviews (Branco #FBF9F5) */}
        <ReviewsSection lang={lang} />

        {/* 6. Studio (Preto #0E0E0F) */}
        <StudioSection
          lang={lang}
          hasAcceptedCookies={cookieConsent === 'accepted'}
          onAcceptCookies={handleAcceptCookies}
        />

        {/* 7. Agendamento + Educação (Branco #FBF9F5) */}
        <BookingSection lang={lang} />

        {/* 8. FAQ (Preto #0E0E0F) */}
        <FaqSection lang={lang} />
      </main>

      {/* 9. Rodapé (Marfim Claro #F1ECE2) */}
      <Footer
        lang={lang}
        onOpenModal={(type) => setActiveModal(type)}
        onOpenCookieBanner={() => setShowCookieBanner(true)}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingCta lang={lang} />

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <CookieBanner
          lang={lang}
          onAccept={handleAcceptCookies}
          onDecline={handleDeclineCookies}
        />
      )}

      {/* Floating In-Page Legal Modals */}
      <LegalModals
        modalType={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
