import React, { useState } from 'react';
import { translations, Language } from '../data/translations';
import { siteData } from '../data/siteData';
import { SparkleStar, GoldDivider } from './Ornaments';
import {
  MessageCircle,
  Copy,
  Check,
  Sparkles,
  Camera,
  Eye,
  Droplets,
  RefreshCw,
  Clock,
} from 'lucide-react';

interface BookingProps {
  lang: Language;
}

export const BookingSection: React.FC<BookingProps> = ({ lang }) => {
  const t = translations[lang].booking;

  // Form states
  const [name, setName] = useState('');
  const [service, setService] = useState('Fox Eyes');
  const [schedule, setSchedule] = useState('');
  const [firstTime, setFirstTime] = useState('Sim');
  const [effect, setEffect] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  // Icon mapper for tips
  const tipIcons: Record<string, React.ReactNode> = {
    Sparkle: <Sparkles className="w-4 h-4 text-[#C9A24D]" />,
    Camera: <Camera className="w-4 h-4 text-[#C9A24D]" />,
    Eye: <Eye className="w-4 h-4 text-[#C9A24D]" />,
    Droplets: <Droplets className="w-4 h-4 text-[#C9A24D]" />,
    RefreshCw: <RefreshCw className="w-4 h-4 text-[#C9A24D]" />,
    Clock: <Clock className="w-4 h-4 text-[#C9A24D]" />,
  };

  // Build the WhatsApp message dynamically
  const buildMessage = () => {
    const safeName = name.trim() || (lang === 'pt' ? '[Meu Nome]' : '[My Name]');
    const safeSchedule = schedule.trim() || (lang === 'pt' ? '[A combinar]' : '[To be discussed]');
    const safeEffect = effect.trim() || (lang === 'pt' ? '[Gostaria da sua sugestão]' : '[Open to your recommendation]');
    const safeNotes = notes.trim() || (lang === 'pt' ? 'Nenhuma observação' : 'None');

    if (lang === 'pt') {
      return `Olá, Isa! ✨ Gostaria de agendar um horário.

• Nome: ${safeName}
• Serviço: ${service}
• Melhor dia e horário: ${safeSchedule}
• Primeira vez / outra profissional: ${firstTime}
• Efeito desejado: ${safeEffect}
• Alergias/observações: ${safeNotes}

Pode me informar os horários disponíveis? ✨`;
    } else {
      return `Hello Isa! ✨ I would like to book an appointment.

• Name: ${safeName}
• Service: ${service}
• Preferred date & time: ${safeSchedule}
• First time / other artist: ${firstTime}
• Desired effect: ${safeEffect}
• Allergies/notes: ${safeNotes}

Could you please share your available times? ✨`;
    }
  };

  const currentMessage = buildMessage();

  const handleSendWhatsApp = () => {
    const encoded = encodeURIComponent(currentMessage);
    const url = `https://api.whatsapp.com/send?phone=${siteData.whatsappPhone}&text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(currentMessage).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="agendamento" className="py-24 sm:py-32 bg-[#FBF9F5] text-[#141414] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1ECE2] border border-[#C9A24D]/40 rounded-full mb-2">
            <SparkleStar className="w-3 h-3 text-[#C9A24D]" fill="#C9A24D" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F7030]">
              {lang === 'pt' ? 'Agendamento Direto' : 'Direct Booking'}
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

        {/* 2 Columns: Left Educational Cards, Right Mini-Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Educational Preparation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[1px] bg-[#C9A24D]" aria-hidden="true" />
              <h3 className="font-serif-display text-xl text-[#0E0E0F] tracking-wide font-medium">
                {t.eduTitle}
              </h3>
            </div>

            <div className="space-y-3">
              {siteData.educationTips.map((tip) => (
                <div
                  key={tip.id}
                  className="p-4 rounded-[6px] bg-[#F1ECE2]/75 border border-[#C9A24D]/35 hover:border-[#C9A24D] transition-all flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-[#C9A24D]/40 flex items-center justify-center shrink-0 mt-0.5">
                    {tipIcons[tip.icon]}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0E0E0F]">
                      {tip.title[lang]}
                    </h4>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                      {tip.description[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mini Form + WhatsApp Preview */}
          <div className="lg:col-span-7 bg-white p-4.5 sm:p-8 rounded-[8px] border border-[#C9A24D]/50 shadow-[0_8px_30px_rgba(201,162,77,0.12)] space-y-5 sm:space-y-6">
            <div className="border-b border-[#C9A24D]/25 pb-4">
              <h3 className="font-serif-display text-2xl text-[#0E0E0F] font-medium">
                {t.formTitle}
              </h3>
              <p className="text-xs text-[#6B6B6B] mt-1">
                {lang === 'pt'
                  ? 'Preencha os campos abaixo para gerar sua mensagem personalizada'
                  : 'Complete the fields below to prepare your tailored booking message'}
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0E0E0F] block">
                  {t.fieldName}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.placeholderName}
                  className="w-full px-3.5 py-2.5 rounded-[4px] border border-[#C9A24D]/40 focus:border-[#C9A24D] bg-[#FBF9F5] text-sm text-[#0E0E0F] focus:outline-none transition-colors"
                />
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0E0E0F] block">
                  {t.fieldService}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-[4px] border border-[#C9A24D]/40 focus:border-[#C9A24D] bg-[#FBF9F5] text-sm text-[#0E0E0F] focus:outline-none transition-colors cursor-pointer"
                >
                  {t.serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Schedule */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0E0E0F] block">
                  {t.fieldSchedule}
                </label>
                <input
                  type="text"
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value)}
                  placeholder={t.placeholderSchedule}
                  className="w-full px-3.5 py-2.5 rounded-[4px] border border-[#C9A24D]/40 focus:border-[#C9A24D] bg-[#FBF9F5] text-sm text-[#0E0E0F] focus:outline-none transition-colors"
                />
              </div>

              {/* First Time Selection */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0E0E0F] block">
                  {t.fieldFirstTime}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {t.firstTimeOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFirstTime(opt.value)}
                      className={`px-3 py-2 text-xs font-medium rounded-[4px] border transition-all text-center cursor-pointer ${
                        firstTime === opt.value
                          ? 'bg-[#C9A24D] text-[#0E0E0F] border-[#C9A24D] font-bold shadow-xs'
                          : 'bg-[#FBF9F5] text-[#6B6B6B] border-[#C9A24D]/30 hover:border-[#C9A24D]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Desired Effect */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0E0E0F] block">
                  {t.fieldEffect}
                </label>
                <input
                  type="text"
                  value={effect}
                  onChange={(e) => setEffect(e.target.value)}
                  placeholder={t.placeholderEffect}
                  className="w-full px-3.5 py-2.5 rounded-[4px] border border-[#C9A24D]/40 focus:border-[#C9A24D] bg-[#FBF9F5] text-sm text-[#0E0E0F] focus:outline-none transition-colors"
                />
              </div>

              {/* Allergies / Notes */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#0E0E0F] block">
                  {t.fieldNotes}
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.placeholderNotes}
                  className="w-full px-3.5 py-2.5 rounded-[4px] border border-[#C9A24D]/40 focus:border-[#C9A24D] bg-[#FBF9F5] text-sm text-[#0E0E0F] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Real-Time WhatsApp Message Preview Box */}
            <div className="p-4 rounded-[6px] bg-[#F1ECE2] border border-[#C9A24D]/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8F7030]">
                  {t.previewTitle}
                </span>
                <span className="text-[10px] text-[#6B6B6B]">WhatsApp</span>
              </div>
              <pre className="text-xs text-[#0E0E0F] font-mono whitespace-pre-wrap leading-relaxed max-h-36 overflow-y-auto">
                {currentMessage}
              </pre>
            </div>

            {/* Action Buttons: Send via WhatsApp & Copy Message */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="shimmer-button flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C9A24D] hover:bg-[#b8913d] text-[#0E0E0F] rounded-md transition-all shadow-md hover:shadow-[0_6px_25px_rgba(201,162,77,0.35)] cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.sendButton}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0E0E0F] hover:text-[#8F7030] bg-[#FBF9F5] hover:bg-white border border-[#C9A24D]/60 hover:border-[#C9A24D] rounded-md transition-all cursor-pointer text-center"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">{t.copiedNotice}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#C9A24D]" />
                    <span>{t.copyButton}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
