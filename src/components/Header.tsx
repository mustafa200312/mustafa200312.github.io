import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NAVIGATION } from '../data/navigation';
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

  const navItems = NAVIGATION;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        document.getElementById('navigation-toggle')?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Scroll Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-50">
        <div
          className="h-full bg-[var(--accent)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-2 group font-sans text-lg font-semibold tracking-tight text-white"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span>Mustafa Sultan</span>
            <span className="text-[var(--accent)]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-5 font-mono text-xs">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? 'location' : undefined}
                className={`relative py-1 transition-colors duration-200 ${
                  activeSection === item.id ? 'text-[var(--accent)] font-medium' : 'text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--accent)] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden xl:flex items-center gap-3 font-mono text-xs">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-[var(--surface)] text-[var(--accent)] rounded-md hover:border-[var(--accent)]/40 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>CLI</span>
              </button>
            )}

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 px-4 py-2 text-xs font-sans font-semibold text-[var(--bg)] bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-md transition-all shadow-sm"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:text-[var(--accent)] transition-colors"
            id="navigation-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="xl:hidden max-h-[calc(100dvh-80px)] overflow-y-auto border-b border-white/[0.08] bg-[var(--surface)] px-6 py-6 space-y-4 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={activeSection === item.id ? 'location' : undefined}
                className={`block py-2 ${
                  activeSection === item.id ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-secondary)]'
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
                  className="w-full flex items-center justify-center gap-2 py-2.5 border border-[var(--accent)]/30 bg-[var(--surface)] text-[var(--accent)] text-xs font-mono rounded-md"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Launch CLI Terminal</span>
                </button>
              )}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-sans font-semibold text-[var(--bg)] bg-[var(--accent)] rounded-md"
              >
                <span>Let's talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
