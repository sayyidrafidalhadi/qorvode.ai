import './styles/main.css';

import { FloatingTerminal, TerminalSection } from './components/TerminalAI';
import { HeroDemo } from '@/components/ui/hero-demo';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Work from './components/Work';
import Process from './components/Process';
import FounderPage, { SiteFooter } from './components/FounderPage';
import Niches from './components/Niches';
import Testimonials from './components/Testimonials';
import LatestArticles from './components/LatestArticles';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';
import Spotlight from './components/Spotlight';
import SEO from './components/SEO';

const Hero = () => <HeroDemo />;
const Contact = FinalCTA;

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-bg font-sans bg-bg text-text">
      <Preloader />
      <SEO />
      <Spotlight />
      <Navbar />
      <FloatingWhatsApp />
      <FloatingTerminal />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Process />
        <FounderPage />
        <Niches />
        <Testimonials />
        <LatestArticles />
        <Services />
        <SocialProof />
        <FAQ />
        <TerminalSection />
      </main>
      <Contact />
      <SiteFooter />
      <BackToTop />
    </div>
  );
}
