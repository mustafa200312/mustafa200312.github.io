import React from 'react';
import { COMMUNITY_ROLES } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';

export const CommunitySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 border-b border-white/[0.08]" id="community">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-white/[0.08] pb-8">
        <div className="space-y-3">
          <span className="font-mono text-xs sm:text-sm text-[#38bdf8] block font-semibold tracking-wider uppercase">03 · COMMUNITY & LEADERSHIP</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-medium text-white tracking-tight">
            Teaching, Mentorship & Student Leadership
          </h2>
          <p className="font-sans text-base text-[#a0aec0] max-w-2xl leading-relaxed">
            Helping student communities grow, teaching complex algorithms, and organizing university life.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {COMMUNITY_ROLES.map((role) => (
          <SpotlightCard key={role.number} className="p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="font-mono text-3xl font-bold text-[#38bdf8]">{role.number}</span>
                <span className="font-mono text-xs text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-lg border border-[#10b981]/25 font-semibold">
                  {role.period}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-sans text-xl font-bold text-white leading-snug">{role.role}</h3>
                <h4 className="font-mono text-xs sm:text-sm text-[#38bdf8] font-medium">{role.organization}</h4>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#a0aec0] leading-relaxed">
                {role.description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-[#64748b]">
              <span>Nile University</span>
              <span className="text-[#10b981] font-semibold">● Mentorship</span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};
