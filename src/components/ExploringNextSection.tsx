import React from 'react';
import { NEXT_EXPLORATION } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { ArrowRight } from 'lucide-react';

export const ExploringNextSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-28 border-b border-white/[0.08] bg-gradient-to-br from-transparent via-[#090d14] to-[#0c121c]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Title */}
        <div className="lg:col-span-4 space-y-4">
          <span className="font-mono text-xs sm:text-sm text-[#38bdf8] block font-semibold tracking-wider uppercase">07 · FUTURE DIRECTION</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-medium text-white tracking-tight leading-tight">
            {NEXT_EXPLORATION.title}
          </h2>
          <p className="font-sans text-base text-[#a0aec0] leading-relaxed">
            Connecting vision backbones, reinforcement learning, and world models for autonomous agentic reasoning.
          </p>
        </div>

        {/* Right Content & Pipeline */}
        <div className="lg:col-span-8 space-y-6">
          <SpotlightCard className="p-6 sm:p-9 space-y-6">
            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-white leading-snug">
              I’m deepening my understanding of{' '}
              <strong className="text-[#38bdf8] font-bold">computer vision</strong>,{' '}
              <strong className="text-[#10b981] font-bold">reinforcement learning</strong>, and{' '}
              <strong className="text-[#38bdf8] font-bold">world models</strong>.
            </h3>

            <p className="font-sans text-base text-[#a0aec0] leading-relaxed">
              {NEXT_EXPLORATION.body}
            </p>

            {/* Step Pipeline with Arrows */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08] font-mono text-xs sm:text-sm">
              {NEXT_EXPLORATION.steps.map((step, idx) => (
                <div key={step.num} className="relative p-4 bg-[#090d14] rounded-xl border border-white/[0.08] space-y-1.5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-[#38bdf8] block font-bold mb-1">{step.num}</span>
                    <span className="text-white font-semibold block text-base">{step.label}</span>
                  </div>
                  {idx < NEXT_EXPLORATION.steps.length - 1 && (
                    <ArrowRight className="hidden sm:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#38bdf8] z-20" />
                  )}
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
