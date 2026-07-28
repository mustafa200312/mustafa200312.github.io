import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 space-y-4">
          <span className="font-mono text-xs text-[#38bdf8] block font-semibold tracking-wider">08 · CONTACT & COLLABORATION</span>
          <h2 className="font-sans text-3xl sm:text-5xl font-medium text-white tracking-tight leading-tight">
            Let’s build something <em className="not-italic text-[#38bdf8] font-semibold">meaningful.</em>
          </h2>
          <p className="font-sans text-sm text-[#94a3b8] max-w-md leading-relaxed">
            Open for AI engineering roles, agentic workflow development, computer vision research, and production ML systems.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 space-y-4 w-full overflow-hidden">
          <SpotlightCard className="p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
              <span className="font-mono text-xs text-[#64748b] uppercase font-semibold">Direct Email Contact</span>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#090d14] text-[#38bdf8] border border-white/[0.08] hover:border-[#38bdf8]/40 rounded-md font-mono text-[11px] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>

            <div className="overflow-hidden">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-sans text-lg sm:text-2xl font-bold text-white hover:text-[#38bdf8] transition-colors block break-all leading-snug"
              >
                {PERSONAL_INFO.email}
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="font-mono text-xs text-[#38bdf8] hover:text-white transition-colors block mt-2"
              >
                {PERSONAL_INFO.phoneFormatted} ↗
              </a>
            </div>
          </SpotlightCard>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 border border-white/[0.08] bg-[#0d121c] text-white hover:border-[#38bdf8]/40 hover:text-[#38bdf8] rounded-xl transition-all"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 border border-white/[0.08] bg-[#0d121c] text-white hover:border-[#38bdf8]/40 hover:text-[#38bdf8] rounded-xl transition-all"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
            </a>

            <a
              href={PERSONAL_INFO.scholar}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 border border-white/[0.08] bg-[#0d121c] text-white hover:border-[#38bdf8]/40 hover:text-[#38bdf8] rounded-xl transition-all"
            >
              <span>Scholar</span>
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
            </a>

            <a
              href={PERSONAL_INFO.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 border border-[#38bdf8]/40 bg-[#38bdf8] text-[#090c10] font-sans font-semibold rounded-xl transition-all hover:bg-[#7dd3fc]"
            >
              <span>Resume PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
