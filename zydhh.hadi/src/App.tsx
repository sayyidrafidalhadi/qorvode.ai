import { motion, useScroll } from "motion/react";
import Preloader from "@/components/Preloader";
import Spotlight from "@/components/Spotlight";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Education from "@/components/Education";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen bg-bg font-sans text-text selection:bg-accent selection:text-bg">
      <Preloader />
      <Spotlight />
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Metrics />
        <About />
        <Education />
        <Work />
        <Services />
        <Music />
      </main>
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
