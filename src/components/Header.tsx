import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onOpenTerminal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onOpenTerminal }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'community', label: 'Community' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'about', label: 'Expertise' },
    { id: 'terminal', label: 'Terminal' },
  ];

  return (
    <>
      {/* Top Scroll Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-50">
        <div
          className="h-full bg-[#38bdf8] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#090c10]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-2 group font-sans text-lg font-semibold tracking-tight text-white"
          >
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
            <span>Mustafa Sultan</span>
            <span className="text-[#38bdf8]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-1 transition-colors duration-200 ${
                  activeSection === item.id ? 'text-[#38bdf8] font-medium' : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#38bdf8] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3 font-mono text-xs">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-[#0d121c] text-[#38bdf8] rounded-md hover:border-[#38bdf8]/40 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>CLI</span>
              </button>
            )}

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 px-4 py-2 text-xs font-sans font-semibold text-[#090c10] bg-[#38bdf8] hover:bg-[#7dd3fc] rounded-md transition-all shadow-sm"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#38bdf8] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/[0.08] bg-[#0d121c] px-6 py-6 space-y-4 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 ${
                  activeSection === item.id ? 'text-[#38bdf8] font-bold' : 'text-[#94a3b8]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
              {onOpenTerminal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#38bdf8]/30 bg-[#0d121c] text-[#38bdf8] text-xs font-mono rounded-md"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Launch CLI Terminal</span>
                </button>
              )}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-sans font-semibold text-[#090c10] bg-[#38bdf8] rounded-md"
              >
                <span>Let's talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
