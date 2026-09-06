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
        <div className="space-y-1 text-[var(--text-secondary)]">
          <p className="text-[var(--accent)] font-bold">Mustafa Sultan Terminal v2.0.0</p>
          <p>Type <span className="text-white font-semibold">help</span> to see available commands or click quick presets below.</p>
        </div>
      ),
    },
  ]);

  const consoleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (history.length > 1 && consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-[var(--text-secondary)]">
            <p className="text-white font-semibold">Available Commands:</p>
            <p><span className="text-[var(--accent)]">skills</span> - View AI, ML & backend engineering stack</p>
            <p><span className="text-[var(--accent)]">projects</span> - List top selected projects</p>
            <p><span className="text-[var(--accent)]">contact</span> - Show email, phone & social profiles</p>
            <p><span className="text-[var(--accent)]">bio</span> - Summary of Mustafa's background</p>
            <p><span className="text-[var(--accent)]">resume</span> - Open & download PDF resume</p>
            <p><span className="text-[var(--accent)]">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2">
            {EXPERTISE_AREAS.map((area) => (
              <div key={area.title} className="text-[var(--text-secondary)]">
                <span className="text-[var(--accent)] font-bold">{area.title}:</span>{' '}
                <span className="text-white">{area.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1.5 text-[var(--text-secondary)]">
            {PROJECTS.map((p) => (
              <div key={p.id}>
                <span className="text-[var(--accent)] font-bold">{p.title}</span> — <span className="text-white">{p.highlightTitle}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-[var(--text-secondary)]">
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[var(--accent)] underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white">{PERSONAL_INFO.phoneFormatted}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-white underline">{PERSONAL_INFO.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-white underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'bio':
        response = (
          <div className="text-[var(--text-secondary)] leading-relaxed">
            <p className="text-white font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p>{PERSONAL_INFO.bio}</p>
            <p className="text-[var(--accent)] mt-1">Graduate of {PERSONAL_INFO.university} (GPA: {PERSONAL_INFO.gpa} / {PERSONAL_INFO.gpaMax})</p>
          </div>
        );
        break;

      case 'resume':
        response = (
          <div className="text-[var(--accent)]">
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
            Command not recognized: "{cmdStr}". Type <span className="text-[var(--accent)]">help</span> for options.
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
    <div className="border border-white/[0.08] bg-[var(--surface)] rounded-xl overflow-hidden font-mono text-xs shadow-2xl">
      {/* Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-[var(--bg)]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-white text-xs font-semibold ml-2">mustafa@dev-cli ~</span>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-[var(--text-secondary)] hover:text-white transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap gap-2 p-3 border-b border-white/[0.08] bg-[var(--surface)] text-[11px]">
        <span className="text-[var(--text-muted)] self-center">Presets:</span>
        {['help', 'skills', 'projects', 'contact', 'resume', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 rounded-md bg-[var(--bg)] text-[var(--accent)] border border-white/[0.08] hover:border-[var(--accent)]/40 transition-colors"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Console Output */}
      <div ref={consoleRef} className="p-4 h-64 overflow-y-auto space-y-3">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-white">
              <span className="text-[var(--accent)]">mustafa@dev-cli:~$</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex items-center border-t border-white/[0.08] bg-[var(--bg)] px-4 py-2.5">
        <span className="text-[var(--accent)] mr-2">mustafa@dev-cli:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command ('help', 'skills', 'projects')..."
          className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs"
        />
        <button type="submit" className="text-[var(--accent)] hover:text-white">
          <Play className="w-3.5 h-3.5 fill-current" />
        </button>
      </form>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg)]/90 backdrop-blur-md">
        <div className="w-full max-w-3xl">{content}</div>
      </div>
    );
  }

  return <section id="terminal" className="py-12">{content}</section>;
};
