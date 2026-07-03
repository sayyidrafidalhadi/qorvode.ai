import './styles/main.css';

import AmoledBackground from './components/AmoledBackground';
import { FloatingTerminal, TerminalSection } from './components/TerminalAI';
import { HeroDemo } from '@/components/ui/hero-demo';
import MusicPlayer from './components/MusicPlayer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Work from './components/Work';
import Process from './components/Process';
import About from './components/About';
import Education from './components/Education';
import MusicSection from './components/MusicSection';
import Niches from './components/Niches';
import Testimonials from './components/Testimonials';
import LatestArticles from './components/LatestArticles';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import BackToTop from './components/BackToTop';
import SEO from './components/SEO';

const Hero = () => <HeroDemo />;
const Contact = FinalCTA;

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-text-alt font-sans bg-bg text-text">
      <SEO />
      <AmoledBackground />
      <Navbar />
      <MusicPlayer />
      <FloatingWhatsApp />
      <FloatingTerminal />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Process />
        <About />
        <Education />
        <Niches />
        <Testimonials />
        <MusicSection />
        <LatestArticles />
        <Services />
        <SocialProof />
        <TerminalSection />
      </main>
      <Contact />
      <BackToTop />
    </div>
  );
}
