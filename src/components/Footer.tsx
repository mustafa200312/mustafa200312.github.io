import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 font-mono text-xs text-[#8e9a9e] border-t border-[#202b30] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span>© {currentYear} {PERSONAL_INFO.name}</span>
        <span>·</span>
        <span className="text-[#38bdf8]">{PERSONAL_INFO.title}</span>
      </div>

      <div className="flex items-center gap-6">
        <span>{PERSONAL_INFO.location}</span>
        <a
          href="#top"
          className="flex items-center gap-1 text-[#c8f43d] hover:underline"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
};
