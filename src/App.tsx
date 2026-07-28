import React, { useState, useEffect } from 'react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CommunitySection } from './components/CommunitySection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProofOfWorkSection } from './components/ProofOfWorkSection';
import { CertificateGrid } from './components/CertificateGrid';
import { ExploringNextSection } from './components/ExploringNextSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('work');
  const [terminalModalOpen, setTerminalModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });

    const handleScroll = () => {
      const sections = ['work', 'experience', 'community', 'credentials', 'about', 'terminal'];
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090d0f] text-[#eef2ed] selection:bg-[#c8f43d] selection:text-[#090d0f]">
      {/* ReactBits Inspired Canvas Particles Mesh Background */}
      <ParticlesBackground />

      {/* Floating Dock Header */}
      <Header
        activeSection={activeSection}
        onOpenTerminal={() => setTerminalModalOpen(true)}
      />

      {/* Main Container */}
      <main id="main-content" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
        <Hero onOpenTerminal={() => setTerminalModalOpen(true)} />
        <ProjectsSection />
        <ExperienceSection />
        <CommunitySection />
        <ExpertiseSection />
        <ProofOfWorkSection />
        <CertificateGrid />
        <ExploringNextSection />
        <InteractiveTerminal />
        <ContactSection />
        <Footer />
      </main>

      {/* Optional Interactive CLI Modal */}
      {terminalModalOpen && (
        <InteractiveTerminal
          isModal
          onClose={() => setTerminalModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
