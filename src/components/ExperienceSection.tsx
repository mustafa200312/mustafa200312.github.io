import React from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { Briefcase, GraduationCap, MapPin, ExternalLink } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 border-b border-white/[0.08]" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Title & Education Card */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="font-mono text-xs sm:text-sm text-[#38bdf8] block font-semibold tracking-wider uppercase">02 · EXPERIENCE & EDUCATION</span>
            <h2 className="font-sans text-3xl sm:text-4xl font-medium text-white tracking-tight">
              Engineering, Research & Academics
            </h2>
            <p className="font-sans text-base text-[#a0aec0] leading-relaxed">
              Applied experience across AI backend production, research publications, quantum optimization, and academic distinction.
            </p>
          </div>

          {/* Education Spotlight Card */}
          <SpotlightCard className="p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2.5 text-[#38bdf8]">
                <GraduationCap className="w-5 h-5 flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold">Degree & Status</span>
              </div>
              <span className="font-mono text-xs text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-lg border border-[#10b981]/25 font-semibold">
                {PERSONAL_INFO.educationPeriod}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-white leading-snug">{PERSONAL_INFO.degree}</h3>
              <p className="font-mono text-xs sm:text-sm text-[#a0aec0]">{PERSONAL_INFO.university} · Egypt</p>
            </div>

            {/* GPA Box */}
            <div className="p-4 bg-[#090d14] rounded-xl border border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-[#64748b] block uppercase">Cumulative GPA</span>
                <span className="font-sans text-3xl sm:text-4xl font-bold text-[#38bdf8]">
                  {PERSONAL_INFO.gpa}
                  <span className="font-mono text-xs sm:text-sm text-[#64748b] font-normal ml-1">/ {PERSONAL_INFO.gpaMax}</span>
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-[#10b981] block uppercase font-semibold">Honors</span>
                <span className="font-sans text-sm sm:text-base text-white font-semibold">Dean's List (Fall 2024)</span>
              </div>
            </div>

            <p className="font-sans text-sm text-[#a0aec0] leading-relaxed">
              All academic requirements completed with top distinction · Dean's List recognition for Fall 2024.
            </p>
          </SpotlightCard>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-[#38bdf8] pb-3 border-b border-white/[0.08] font-semibold tracking-wider">
            <Briefcase className="w-4 h-4 flex-shrink-0" />
            <span>INTERNSHIP & RESEARCH TIMELINE</span>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-8 sm:space-y-10 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-6 sm:-left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#38bdf8] bg-[#090c10] group-hover:scale-125 group-hover:bg-[#38bdf8] transition-all duration-200" />

                <SpotlightCard className="p-5 sm:p-7 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs sm:text-sm text-[#38bdf8] font-semibold">{exp.period}</span>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#64748b]">
                      <MapPin className="w-3.5 h-3.5 text-[#10b981] flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="font-sans text-lg sm:text-xl font-semibold text-white leading-snug">{exp.role}</h3>
                    <h4 className="font-mono text-xs sm:text-sm text-[#10b981] font-medium">{exp.organization}</h4>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#a0aec0] leading-relaxed pt-1">
                    {exp.description}
                  </p>

                  {exp.link && (
                    <div className="pt-2">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#38bdf8] hover:text-white transition-colors font-medium"
                      >
                        <span>{exp.linkText}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
