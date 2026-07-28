import React, { useState } from 'react';
import { CERTIFICATES, Certificate } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { CertificateModal } from './CertificateModal';
import { Maximize2 } from 'lucide-react';

export const CertificateGrid: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  const filteredCerts = selectedGroup === 'all'
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.filterGroup === selectedGroup);

  return (
    <section className="py-16 sm:py-24 lg:py-28 border-b border-white/[0.08]" id="credentials">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16 border-b border-white/[0.08] pb-8">
        <div className="space-y-3">
          <span className="font-mono text-xs sm:text-sm text-[#38bdf8] block font-semibold tracking-wider uppercase">05 · CERTIFICATES & RECOGNITION</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-medium text-white tracking-tight">
            Verified Credentials & Achievements
          </h2>
          <p className="font-sans text-base text-[#a0aec0] max-w-2xl leading-relaxed">
            A record of academic achievement, industry experience, research, teaching, and student leadership. Click any certificate to view high-resolution document.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2.5 font-mono text-xs">
          {[
            { id: 'all', label: 'All Credentials' },
            { id: 'industry', label: 'Industry' },
            { id: 'research', label: 'Research' },
            { id: 'coursera', label: 'Coursera AI' },
            { id: 'academic', label: 'Academic & Competitions' },
          ].map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`px-3.5 py-2 rounded-xl transition-all text-xs font-medium ${
                selectedGroup === group.id
                  ? 'bg-[#38bdf8] text-[#090c10] font-sans font-semibold shadow-md'
                  : 'bg-[#0d121c] text-[#a0aec0] border border-white/[0.08] hover:border-white/20 hover:text-white'
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Certificates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCerts.map((cert) => (
          <SpotlightCard key={cert.id} className="p-5 sm:p-6 flex flex-col justify-between group cursor-pointer">
            <div onClick={() => setActiveModalCert(cert)} className="space-y-4">
              {/* Image Preview Window */}
              <div className="relative aspect-[1.5] bg-[#090d14] rounded-xl border border-white/[0.08] overflow-hidden group-hover:border-[#38bdf8]/50 transition-colors">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-[#090d14]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-2 px-3.5 py-2 bg-[#38bdf8] text-[#090c10] font-sans text-xs font-semibold rounded-lg shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                    <span>Expand</span>
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-mono text-[#38bdf8] mb-1">
                  <span>{cert.categoryTag}</span>
                  <span className="text-[#64748b]">{cert.year}</span>
                </div>
                <h3 className="font-sans text-lg font-semibold text-white group-hover:text-[#38bdf8] transition-colors leading-snug break-words">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-[#a0aec0] mt-1">{cert.issuer}</p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-[#38bdf8]">
              <button
                onClick={() => setActiveModalCert(cert)}
                className="hover:underline flex items-center gap-1 font-medium"
              >
                <span>Inspect document</span>
                <span>↗</span>
              </button>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Lightbox Modal */}
      <CertificateModal certificate={activeModalCert} onClose={() => setActiveModalCert(null)} />
    </section>
  );
};
