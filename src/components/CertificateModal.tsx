import React from 'react';
import { Certificate } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090c10]/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/[0.08] bg-[#0c1017] rounded-xl p-5 sm:p-6 space-y-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#38bdf8] px-2.5 py-0.5 rounded bg-[#38bdf8]/10 border border-[#38bdf8]/25 font-semibold">
              {certificate.categoryTag}
            </span>
            <span className="font-mono text-xs text-[#94a3b8]">{certificate.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#94a3b8] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Content */}
        <div className="space-y-4">
          <div>
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-white leading-snug">{certificate.title}</h3>
            <p className="font-mono text-xs text-[#10b981] mt-1">{certificate.issuer}</p>
          </div>

          {/* Image Container */}
          <div className="relative aspect-[16/10] bg-[#090c10] rounded-lg border border-white/[0.08] overflow-hidden flex items-center justify-center p-2">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="max-h-full max-w-full object-contain rounded"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-[#94a3b8]">
            <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
            <span>Official Verified Credential</span>
          </div>

          <div className="flex items-center gap-3">
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#38bdf8] text-[#090c10] font-sans font-semibold rounded-lg hover:bg-[#7dd3fc] transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={certificate.image}
              target="_blank"
              download
              className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-[#090c10] text-white hover:border-[#38bdf8] hover:text-[#38bdf8] rounded-lg transition-colors"
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
