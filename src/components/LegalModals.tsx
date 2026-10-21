import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { siteData } from '../data/siteData';

export type ModalType = 'privacy' | 'terms' | null;

interface LegalModalsProps {
  modalType: ModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ modalType, onClose }) => {
  useEffect(() => {
    if (!modalType) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalType, onClose]);

  if (!modalType) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0E0E0F]/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#FBF9F5] text-[#141414] rounded-[8px] border-2 border-[#C9A24D] shadow-[0_15px_50px_rgba(201,162,77,0.25)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-[#C9A24D]/30 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#F1ECE2] border border-[#C9A24D]/50 flex items-center justify-center text-[#8F7030]">
              {modalType === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-serif-display text-xl text-[#0E0E0F] font-semibold">
                {modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
              </h3>
              <span className="text-[11px] text-[#6B6B6B] uppercase tracking-wider block">
                {modalType === 'privacy' ? 'UK GDPR & Data Protection Act 2018' : 'Governing Law: England & Wales'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6B6B6B] hover:text-[#0E0E0F] hover:bg-[#F1ECE2] rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable, in English as legally mandated) */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
          {modalType === 'privacy' ? (
            <>
              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  1. Data Controller
                </h4>
                <p>
                  Isadora Lash &amp; Brows (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) acts as the Data Controller responsible for your personal data under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. For enquiries regarding this policy, contact us at {siteData.contactEmail}.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  2. Personal Data We Collect
                </h4>
                <p>We may collect and process the following information:</p>
                <ul className="list-disc list-inside mt-1 space-y-1 pl-1">
                  <li>Contact details: your full name, phone number, and preferred times shared via our booking form and WhatsApp.</li>
                  <li>Special category health information: allergies (e.g. cyanoacrylate, adhesives, latex), eye sensitivity, pregnancy status, or recent eye treatments that you voluntarily disclose to ensure safe service delivery.</li>
                  <li>Photographs: before-and-after photographic documentation of lash and brow treatments, taken solely with your prior explicit consent.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  3. Lawful Basis for Processing
                </h4>
                <p>
                  We process contact information to fulfill appointment requests and take steps prior to entering into a contract. Health disclosures and photography are processed exclusively based on your explicit consent (Article 9 UK GDPR) to uphold sanitary and ocular safety standards.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  4. Third-Party Sharing &amp; Data Transfers
                </h4>
                <p>
                  Your information is never sold, traded, or rented to marketing brokers. Communication flows directly through WhatsApp (Meta Platforms Ireland Ltd). Optional embeds (Instagram and Google Maps) operate when third-party cookies are accepted.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  5. Data Retention &amp; Security
                </h4>
                <p>
                  Client records are retained for a standard record-keeping period necessary for customer service continuity and legal requirements, after which records are securely permanently deleted.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  6. Your Legal Rights
                </h4>
                <p>
                  Under UK data protection law, you possess the right to access, rectify, or request erasure of your personal data, restrict or object to processing, and withdraw consent at any time without detriment.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  7. Supervisory Authority
                </h4>
                <p>
                  If you have concerns about our data handling, you have the statutory right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#8F7030] underline">ico.org.uk</a>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  1. Scope &amp; General Information
                </h4>
                <p>
                  The content on this website is provided for general informational and aesthetic presentation purposes. Cosmetic procedures (lash extensions, brow shaping, henna, brow lamination, and Hidralips) are subject to preliminary consultation and suitability assessment.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  2. Health Disclosures &amp; Patch Testing
                </h4>
                <p>
                  Clients must disclose all known allergies, eye sensitivities, ocular conditions, or relevant medical circumstances honestly and accurately prior to treatment. Where recommended or requested, a patch test must be completed before application.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  3. Retention &amp; Individual Results
                </h4>
                <p>
                  No absolute duration or permanence is guaranteed (&quot;results vary per individual&quot;). Retention depends upon each client&apos;s natural hair cycle, metabolism, skin type, and rigorous adherence to provided aftercare instructions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  4. Pricing, Bookings &amp; Cancellations
                </h4>
                <p>
                  Prices are communicated directly upon request via WhatsApp. Booking confirmations, potential deposit terms, late arrival allowances, and rescheduling policies are confirmed individually with Isadora.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  5. Intellectual Property
                </h4>
                <p>
                  All visual assets, bespoke photography, logo typography, and textual descriptions are the intellectual property of Isadora Lash &amp; Brows. Unauthorized reproduction or commercial re-use without explicit consent is prohibited.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#0E0E0F] uppercase tracking-wider text-xs mb-1">
                  6. Governing Law &amp; Jurisdiction
                </h4>
                <p>
                  These Terms of Use and any disputes arising from website access or studio bookings are governed exclusively by the laws of England and Wales, subject to the jurisdiction of the courts of England and Wales. Nothing in these terms excludes liability for fraud, death, or personal injury caused by negligence.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#C9A24D]/30 bg-[#F1ECE2] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#0E0E0F] text-[#F5F1E8] hover:bg-[#1C1C1E] rounded-md transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
