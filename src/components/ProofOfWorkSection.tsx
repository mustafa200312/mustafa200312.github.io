import React from 'react';
import { PROOF_OF_WORK } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { BookOpen, Trophy, Award, ExternalLink } from 'lucide-react';

export const ProofOfWorkSection: React.FC = () => {
  const icons = [
    <BookOpen className="w-5 h-5 text-[var(--accent)]" />,
    <Trophy className="w-5 h-5 text-[var(--accent)]" />,
    <Award className="w-5 h-5 text-[var(--accent)]" />
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-28 border-b border-white/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-white/[0.08] pb-8">
        <div className="space-y-3">
          <span className="studio-index">06 / PROOF OF WORK</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-medium text-white tracking-tight">
            Peer-Reviewed Research & Honors
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {PROOF_OF_WORK.map((item, idx) => (
          <SpotlightCard key={idx} className="p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-sans text-xl font-bold text-[var(--accent)]">
                  {item.badge}
                </span>
                <div className="p-2 rounded-xl bg-[var(--bg)] border border-white/[0.08]">
                  {icons[idx] || <Award className="w-5 h-5 text-[var(--accent)]" />}
                </div>
              </div>

              <p className="font-sans text-sm sm:text-base text-white leading-relaxed">
                {item.title}
              </p>
            </div>

            {item.links && (
              <div className="space-y-2 pt-4 border-t border-white/[0.08] font-mono text-xs sm:text-sm">
                {item.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg)] text-[var(--accent)] hover:text-white border border-white/[0.08] hover:border-[var(--accent)]/40 transition-all font-medium"
                  >
                    <span>{link.text}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            )}
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};
