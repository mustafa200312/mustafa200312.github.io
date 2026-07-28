import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { SpotlightCard } from './SpotlightCard';
import { TiltedCard } from './TiltedCard';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [ultrasoundMask, setUltrasoundMask] = useState<boolean>(true);
  const [maapThreads, setMaapThreads] = useState<number>(8);
  const [activeFinanceTab, setActiveFinanceTab] = useState<'spending' | 'budget' | 'agent'>('spending');

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section className="py-16 sm:py-24 lg:py-28 border-b border-white/[0.08]" id="work">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16 border-b border-white/[0.08] pb-8">
        <div className="space-y-3">
          <span className="font-mono text-xs sm:text-sm text-[#38bdf8] block font-semibold tracking-wider uppercase">01 · SELECTED WORK</span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Featured Systems & Projects
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#a0aec0] max-w-2xl leading-relaxed">
            Multi-agent orchestrations, citation-enforced RAG, medical foundation vision models, and parallel code engines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 font-mono text-xs">
          {[
            { id: 'all', label: 'All Work' },
            { id: 'agent', label: 'Multi-Agent' },
            { id: 'rag', label: 'RAG & NLP' },
            { id: 'vision', label: 'Computer Vision' },
            { id: 'systems', label: 'Parallel Systems' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-xl transition-all duration-200 text-xs font-medium ${
                selectedFilter === tab.id
                  ? 'bg-[#38bdf8] text-[#090c10] font-sans font-semibold shadow-md'
                  : 'bg-[#0d121c] text-[#a0aec0] border border-white/[0.08] hover:border-white/20 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-12 sm:space-y-16">
        {filteredProjects.map((project) => {
          const hasVisualizer = Boolean(project.visualType);

          return (
            <SpotlightCard key={project.id} className="p-6 sm:p-9 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: Details */}
                <div className={`${hasVisualizer ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-6`}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs sm:text-sm text-[#64748b] uppercase tracking-wider font-semibold">
                      {project.number}
                    </span>
                    {project.subtitle && (
                      <span className="font-mono text-xs text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-lg border border-[#10b981]/25 font-semibold">
                        {project.subtitle}
                      </span>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                      <span className="text-[#38bdf8]">{project.title}</span> — {project.highlightTitle}
                    </h3>
                    <p className="font-sans text-base text-[#a0aec0] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-2.5 pt-1 font-mono text-xs">
                      {project.metrics.map((m) => (
                        <span
                          key={m}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#090d14] text-[#38bdf8] border border-white/[0.08]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                          <span>{m}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#121824] text-[#a0aec0] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Link */}
                  {project.link && (
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#38bdf8] hover:text-white transition-colors font-medium"
                      >
                        <span>Open repository on GitHub</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Visualizer (If present) */}
                {hasVisualizer && (
                  <div className="lg:col-span-6 w-full">
                    <TiltedCard maxTilt={3}>
                      {project.visualType === 'finance' && (
                        <div className="border border-white/[0.08] bg-[#090d14] rounded-2xl p-5 sm:p-6 font-mono text-xs space-y-4 shadow-xl overflow-hidden">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
                            <div className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full bg-rose-500/80 flex-shrink-0" />
                              <span className="w-3 h-3 rounded-full bg-amber-500/80 flex-shrink-0" />
                              <span className="w-3 h-3 rounded-full bg-emerald-500/80 flex-shrink-0" />
                              <span className="text-white text-xs sm:text-sm font-semibold font-sans ml-1">FGaiB Personal Finance App</span>
                            </div>
                            <span className="text-xs text-[#38bdf8]">LangGraph Runtime</span>
                          </div>

                          <div className="flex gap-2 font-mono text-xs">
                            {(['spending', 'budget', 'agent'] as const).map((t) => (
                              <button
                                key={t}
                                onClick={() => setActiveFinanceTab(t)}
                                className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                                  activeFinanceTab === t
                                    ? 'bg-[#38bdf8] text-[#090c10] font-bold'
                                    : 'bg-[#121824] text-[#a0aec0] border border-white/[0.06]'
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>

                          {activeFinanceTab === 'spending' && (
                            <div className="space-y-4 pt-1">
                              <div className="flex justify-between text-xs text-[#a0aec0]">
                                <span>Monthly Spending Trend</span>
                                <span className="text-[#10b981] font-semibold">$1,240 / $1,500</span>
                              </div>
                              <svg viewBox="0 0 300 70" className="w-full h-16 stroke-[#38bdf8] fill-none stroke-2">
                                <polyline points="0,55 35,45 70,50 110,25 145,40 180,15 220,35 255,20 300,10" />
                              </svg>
                              <div className="p-3 bg-[#0d121c] rounded-xl border border-white/[0.08] text-xs text-[#a0aec0] leading-relaxed">
                                💬 <span className="text-white">User:</span> "Dinner budget?" → <span className="text-[#10b981] font-semibold">Agent:</span> "$42 remaining in dining budget."
                              </div>
                            </div>
                          )}

                          {activeFinanceTab === 'budget' && (
                            <div className="space-y-3 pt-1 text-xs">
                              <div>
                                <div className="flex justify-between mb-1.5">
                                  <span className="text-white">Groceries</span>
                                  <span className="text-[#10b981] font-medium">$340 / $400</span>
                                </div>
                                <div className="w-full h-2 bg-[#1e293b] rounded-full overflow-hidden">
                                  <div className="h-full bg-[#10b981]" style={{ width: '85%' }} />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mb-1.5">
                                  <span className="text-white">Dining & Entertainment</span>
                                  <span className="text-[#38bdf8] font-medium">$128 / $150</span>
                                </div>
                                <div className="w-full h-2 bg-[#1e293b] rounded-full overflow-hidden">
                                  <div className="h-full bg-[#38bdf8]" style={{ width: '82%' }} />
                                </div>
                              </div>
                            </div>
                          )}

                          {activeFinanceTab === 'agent' && (
                            <div className="p-3 bg-[#0d121c] rounded-xl border border-white/[0.08] text-xs space-y-1.5 text-[#38bdf8]">
                              <p>▶ Node: <span className="text-white">AnalyzeTransactionState</span></p>
                              <p>▶ Tool: <span className="text-[#10b981]">verify_action(amount: 150)</span></p>
                              <p>▶ Confirmation: <span className="text-[#10b981]">Approved</span></p>
                            </div>
                          )}
                        </div>
                      )}

                      {project.visualType === 'slides' && (
                        <div className="border border-white/[0.08] bg-[#090d14] rounded-2xl p-5 sm:p-6 font-mono text-xs space-y-4 shadow-xl overflow-hidden">
                          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                            <span className="text-white font-semibold font-sans text-sm">SlideTutor — AI Workspace</span>
                            <span className="text-xs text-[#38bdf8]">Slide 04 / 24</span>
                          </div>
                          <div className="bg-[#f8fafc] text-slate-900 p-4 rounded-xl space-y-2">
                            <span className="text-xs font-bold tracking-wider text-indigo-600 block">
                              GRADIENT DESCENT OPTIMIZATION
                            </span>
                            <p className="text-xs sm:text-sm text-slate-800 leading-snug font-sans">
                              Loss Function: L(w) = 1/N ∑ (y_i - f(x_i))^2. Update rule: w = w - α ∇L(w).
                            </p>
                          </div>
                          <div className="p-3 bg-[#0d121c] rounded-xl border border-white/[0.08] text-xs text-[#a0aec0] leading-relaxed">
                            🤖 <span className="text-[#38bdf8]">SlideTutor AI:</span> "Explaining learning rate α decay and optimization convergence."
                          </div>
                        </div>
                      )}

                      {project.visualType === 'code' && (
                        <div className="border border-white/[0.08] bg-[#090d14] rounded-2xl p-5 sm:p-6 font-mono text-xs space-y-4 shadow-xl overflow-hidden">
                          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                            <span className="text-white font-semibold font-sans text-sm">MAAP Auto-Parallelizer</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-[#64748b]">Threads:</span>
                              {[1, 4, 8].map((num) => (
                                <button
                                  key={num}
                                  onClick={() => setMaapThreads(num)}
                                  className={`px-2.5 py-1 rounded-md text-xs ${
                                    maapThreads === num ? 'bg-[#38bdf8] text-[#090c10] font-bold' : 'bg-[#1e293b] text-white'
                                  }`}
                                >
                                  {num}T
                                </button>
                              ))}
                            </div>
                          </div>
                          <pre className="bg-[#0d121c] p-3.5 rounded-xl border border-white/[0.08] text-xs text-[#38bdf8] overflow-x-auto leading-relaxed">
{`#pragma omp parallel for num_threads(${maapThreads})
for (int i = 0; i < N; i++) {
    compute_matrix_block(A[i], B[i], C[i]);
}`}
                          </pre>
                          <div className="flex justify-between text-xs text-[#10b981] font-semibold">
                            <span>AST Graph Verified</span>
                            <span>Speedup: {(maapThreads * 0.82).toFixed(1)}x</span>
                          </div>
                        </div>
                      )}

                      {project.visualType === 'ultrasound' && (
                        <div className="border border-white/[0.08] bg-[#090d14] rounded-2xl p-5 sm:p-6 font-mono text-xs space-y-4 shadow-xl overflow-hidden">
                          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                            <span className="text-white font-semibold font-sans text-sm">DINOv3 Ultrasound Scan</span>
                            <button
                              onClick={() => setUltrasoundMask(!ultrasoundMask)}
                              className={`px-3 py-1 rounded-md text-xs transition-all ${
                                ultrasoundMask
                                  ? 'bg-[#38bdf8] text-[#090c10] font-bold'
                                  : 'bg-[#1e293b] text-white'
                              }`}
                            >
                              {ultrasoundMask ? 'Mask ON' : 'Raw Image'}
                            </button>
                          </div>

                          <div className="relative h-32 sm:h-36 bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center border border-white/[0.08]">
                            <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full">
                              <path
                                d="M 20 40 Q 100 10 180 50"
                                stroke="#334155"
                                strokeWidth="18"
                                fill="none"
                              />
                              {ultrasoundMask && (
                                <>
                                  <path
                                    d="M 20 40 Q 100 10 180 50"
                                    stroke="#38bdf8"
                                    strokeWidth="12"
                                    strokeOpacity="0.6"
                                    fill="none"
                                  />
                                  <ellipse cx="110" cy="24" rx="20" ry="10" fill="#10b981" fillOpacity="0.85" />
                                </>
                              )}
                            </svg>
                            <span className="relative z-10 font-mono text-xs text-[#38bdf8] bg-[#090d14]/80 px-3 py-1 rounded-lg border border-white/[0.08]">
                              {ultrasoundMask ? 'Plaque Detected (Dice: 0.912)' : 'Ultrasound Frame #142'}
                            </span>
                          </div>

                          <div className="flex justify-between text-xs text-[#64748b]">
                            <span>Backbone: Frozen DINOv3</span>
                            <span>Transverse & Longitudinal</span>
                          </div>
                        </div>
                      )}

                      {project.visualType === 'dialect' && (
                        <div className="border border-white/[0.08] bg-[#090d14] rounded-2xl p-5 sm:p-6 font-mono text-xs space-y-4 shadow-xl overflow-hidden">
                          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                            <span className="text-white font-semibold font-sans text-sm">MARBERTv2 Dialects</span>
                            <span className="text-xs text-[#38bdf8]">7 Dialect Groups</span>
                          </div>

                          <div className="space-y-2.5 text-xs">
                            {[
                              { dialect: 'Egyptian (EGY)', score: 94.8, color: 'bg-[#38bdf8]' },
                              { dialect: 'Levantine (LEV)', score: 88.2, color: 'bg-[#10b981]' },
                              { dialect: 'Gulf (GLF)', score: 82.5, color: 'bg-indigo-400' },
                            ].map((item) => (
                              <div key={item.dialect}>
                                <div className="flex justify-between text-[#a0aec0] mb-1">
                                  <span>{item.dialect}</span>
                                  <span className="text-white font-semibold">{item.score}% F1</span>
                                </div>
                                <div className="w-full h-2 bg-[#1e293b] rounded-full overflow-hidden">
                                  <div className={`h-full ${item.color}`} style={{ width: `${item.score}%` }} />
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="text-xs text-[#64748b] pt-1">
                            MARBERTv2 sequence classification pipeline.
                          </div>
                        </div>
                      )}
                    </TiltedCard>
                  </div>
                )}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};
