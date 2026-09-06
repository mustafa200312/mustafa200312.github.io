import React from 'react';
import { EXPERTISE_AREAS } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 border-b border-white/[0.08]" id="about">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-white/[0.08] pb-8">
        <div className="space-y-3">
          <span className="studio-index">04 / EXPERTISE & SKILLS</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-medium text-white tracking-tight">
            Technical Stack & Capabilities
          </h2>
          <p className="font-sans text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            From model research to production APIs and agentic orchestration.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {EXPERTISE_AREAS.map((area, idx) => (
          <SpotlightCard key={area.title} className="p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Card Top Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono text-3xl text-[var(--accent)] font-bold">{area.icon}</span>
                <span className="font-mono text-xs text-[var(--text-muted)] uppercase font-semibold">Domain 0{idx + 1}</span>
              </div>

              {/* Title & Skills List with Generous Spacing */}
              <div>
                <h3 className="font-sans text-xl font-bold text-white mb-6 tracking-tight">
                  {area.title}
                </h3>

                <ul className="space-y-3.5 font-mono text-xs sm:text-sm text-[var(--text-secondary)]">
                  {area.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                      <span className="text-white hover:text-[var(--accent)] transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};
