import React, { useEffect, useRef } from 'react';
import { Certificate } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!certificate) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const items = dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!items?.length) return;
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {event.preventDefault();last.focus();}
        else if (!event.shiftKey && document.activeElement === last) {event.preventDefault();first.focus();}
      }
    };
    document.addEventListener('keydown', key);
    return () => {document.body.style.overflow = overflow;document.removeEventListener('keydown',key);previous?.focus();};
  }, [certificate, onClose]);
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg)]/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-title"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/[0.08] bg-[var(--surface)] rounded-xl p-5 sm:p-6 space-y-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[var(--accent)] px-2.5 py-0.5 rounded bg-[var(--accent)]/10 border border-[var(--accent)]/25 font-semibold">
              {certificate.categoryTag}
            </span>
            <span className="font-mono text-xs text-[var(--text-secondary)]">{certificate.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[var(--text-secondary)] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Content */}
        <div className="space-y-4">
          <div>
            <h3 id="certificate-title" className="font-sans text-xl sm:text-2xl font-bold text-white leading-snug">{certificate.title}</h3>
            <p className="font-mono text-xs text-[var(--accent)] mt-1">{certificate.issuer}</p>
          </div>

          {/* Image Container */}
          <div className="relative aspect-[16/10] bg-[var(--bg)] rounded-lg border border-white/[0.08] overflow-hidden flex items-center justify-center p-2">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-full max-w-full object-contain rounded"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-[var(--text-secondary)]">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
            <span>Official Verified Credential</span>
          </div>

          <div className="flex items-center gap-3">
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-[var(--bg)] font-sans font-semibold rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={certificate.image}
              target="_blank"
              download
              className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-[var(--bg)] text-white hover:border-[var(--accent)] hover:text-[var(--accent)] rounded-lg transition-colors"
            >
              <span>Full Image</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
