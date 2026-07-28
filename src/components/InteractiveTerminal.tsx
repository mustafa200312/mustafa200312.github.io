import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, EXPERTISE_AREAS } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Play } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

interface InteractiveTerminalProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ onClose, isModal = false }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-[#94a3b8]">
          <p className="text-[#38bdf8] font-bold">Mustafa Sultan Terminal v2.0.0</p>
          <p>Type <span className="text-white font-semibold">help</span> to see available commands or click quick presets below.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-[#94a3b8]">
            <p className="text-white font-semibold">Available Commands:</p>
            <p><span className="text-[#38bdf8]">skills</span> - View AI, ML & backend engineering stack</p>
            <p><span className="text-[#38bdf8]">projects</span> - List top selected projects</p>
            <p><span className="text-[#38bdf8]">contact</span> - Show email, phone & social profiles</p>
            <p><span className="text-[#38bdf8]">bio</span> - Summary of Mustafa's background</p>
            <p><span className="text-[#38bdf8]">resume</span> - Open & download PDF resume</p>
            <p><span className="text-[#38bdf8]">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2">
            {EXPERTISE_AREAS.map((area) => (
              <div key={area.title} className="text-[#94a3b8]">
                <span className="text-[#38bdf8] font-bold">{area.title}:</span>{' '}
                <span className="text-white">{area.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1.5 text-[#94a3b8]">
            {PROJECTS.map((p) => (
              <div key={p.id}>
                <span className="text-[#38bdf8] font-bold">{p.title}</span> — <span className="text-white">{p.highlightTitle}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-[#94a3b8]">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#38bdf8] underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white">{PERSONAL_INFO.phoneFormatted}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-white underline">{PERSONAL_INFO.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-white underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'bio':
        response = (
          <div className="text-[#94a3b8] leading-relaxed">
            <p className="text-white font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p>{PERSONAL_INFO.bio}</p>
            <p className="text-[#38bdf8] mt-1">Graduate of {PERSONAL_INFO.university} (GPA: {PERSONAL_INFO.gpa} / {PERSONAL_INFO.gpaMax})</p>
          </div>
        );
        break;

      case 'resume':
        response = (
          <div className="text-[#38bdf8]">
            Opening resume PDF...{' '}
            <a href={PERSONAL_INFO.resume} target="_blank" rel="noreferrer" className="underline text-white">
              [Click here if not opened]
            </a>
          </div>
        );
        window.open(PERSONAL_INFO.resume, '_blank');
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        response = (
          <p className="text-rose-400">
            Command not recognized: "{cmdStr}". Type <span className="text-[#38bdf8]">help</span> for options.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
  };

  const content = (
    <div className="border border-white/[0.08] bg-[#0c1017] rounded-xl overflow-hidden font-mono text-xs shadow-2xl">
      {/* Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[#090c10]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-white text-xs font-semibold ml-2">mustafa@dev-cli ~</span>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-[#94a3b8] hover:text-white transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap gap-2 p-3 border-b border-white/[0.08] bg-[#0d121c] text-[11px]">
        <span className="text-[#64748b] self-center">Presets:</span>
        {['help', 'skills', 'projects', 'contact', 'resume', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 rounded-md bg-[#090c10] text-[#38bdf8] border border-white/[0.08] hover:border-[#38bdf8]/40 transition-colors"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Console Output */}
      <div className="p-4 h-64 overflow-y-auto space-y-3">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-white">
              <span className="text-[#38bdf8]">mustafa@dev-cli:~$</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex items-center border-t border-white/[0.08] bg-[#090c10] px-4 py-2.5">
        <span className="text-[#38bdf8] mr-2">mustafa@dev-cli:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command ('help', 'skills', 'projects')..."
          className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs"
        />
        <button type="submit" className="text-[#38bdf8] hover:text-white">
          <Play className="w-3.5 h-3.5 fill-current" />
        </button>
      </form>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090c10]/90 backdrop-blur-md">
        <div className="w-full max-w-3xl">{content}</div>
      </div>
    );
  }

  return <section id="terminal" className="py-12">{content}</section>;
};
