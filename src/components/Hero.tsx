import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DecryptedText } from './DecryptedText';
import { ArrowDown, Github, Terminal, Award, BookOpen, Trophy, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center border-b border-white/[0.08] py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl space-y-8 sm:space-y-10">
        {/* Status Badge */}
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/[0.08] bg-[#0d121c]/90 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]"></span>
            </span>
            <span className="font-mono text-xs sm:text-sm text-[#a0aec0] tracking-wide">
              {PERSONAL_INFO.status}
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.2] sm:leading-[1.16]">
          I build AI systems that{' '}
          <span className="text-[#38bdf8] font-semibold underline decoration-[#38bdf8]/30 underline-offset-8">
            <DecryptedText text="reason" speed={35} maxIterations={8} />
          </span>
          ,{' '}
          <span className="text-[#10b981] font-semibold">
            <DecryptedText text="retrieve" speed={35} maxIterations={8} />
          </span>
          , and{' '}
          <em className="not-italic text-white font-bold">
            <DecryptedText text="act." speed={35} maxIterations={8} />
          </em>
        </h1>

        {/* Bio Subtitle */}
        <p className="font-sans text-lg sm:text-xl text-[#a0aec0] max-w-3xl leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>

        {/* Key Credibility Proof Chips */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#a0aec0] pt-1">
          <span className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d121c] border border-white/[0.08]">
            <Award className="w-4 h-4 text-[#38bdf8]" />
            <span className="text-white font-semibold">{PERSONAL_INFO.gpa} GPA</span>
            <span className="text-[#64748b]">(Dean's List: Fall 2024)</span>
          </span>
          <span className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d121c] border border-white/[0.08]">
            <BookOpen className="w-4 h-4 text-[#10b981]" />
            <span className="text-white font-semibold">Springer Published Author</span>
          </span>
          <span className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d121c] border border-white/[0.08]">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-white font-semibold">1st Ranked Grad Project</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs pt-2">
          <a
            href="#work"
            className="flex items-center justify-center gap-2.5 px-6 py-4 bg-[#38bdf8] text-[#090c10] font-sans font-semibold rounded-xl hover:bg-[#7dd3fc] transition-all shadow-lg shadow-[#38bdf8]/15 text-sm sm:text-base"
          >
            <span>View Selected Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 px-6 py-4 border border-white/10 bg-[#0d121c] text-white hover:border-white/20 rounded-xl transition-all text-sm sm:text-base"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="flex items-center justify-center gap-2.5 px-5 py-4 border border-[#38bdf8]/30 bg-[#0d121c] text-[#38bdf8] hover:bg-[#38bdf8]/10 rounded-xl transition-all text-sm sm:text-base"
            >
              <Terminal className="w-4 h-4" />
              <span>CLI Terminal</span>
            </button>
          )}
        </div>

        {/* Core Tech Stack Tags */}
        <div className="pt-4 flex flex-wrap items-center gap-2.5 font-mono text-xs sm:text-sm text-[#64748b]">
          <span className="text-white font-medium mr-2">Specializations:</span>
          <span className="px-3 py-1.5 rounded-lg bg-[#0d121c] border border-white/[0.08] text-[#a0aec0]">Machine learning</span>
          <span className="px-3 py-1.5 rounded-lg bg-[#0d121c] border border-white/[0.08] text-[#a0aec0]">Deep learning</span>
          <span className="px-3 py-1.5 rounded-lg bg-[#0d121c] border border-white/[0.08] text-[#a0aec0]">NLP</span>
          <span className="px-3 py-1.5 rounded-lg bg-[#0d121c] border border-white/[0.08] text-[#a0aec0]">Computer Vision</span>
          <span className="px-3 py-1.5 rounded-lg bg-[#0d121c] border border-white/[0.08] text-[#a0aec0]">GenAI</span>
          <span className="px-3 py-1.5 rounded-lg bg-[#0d121c] border border-white/[0.08] text-[#a0aec0]">Agentic AI</span>
        </div>
      </div>
    </section>
  );
};
