import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, useScroll } from 'motion/react';
import { Play, Pause, ChevronDown, ChevronUp, Music, Instagram, Github, Headphones } from 'lucide-react';
import './styles/main.css';
import { site } from './data/site';
import { releases, type Release } from './data/releases';
import AmoledBackground from './components/AnimeEditBackground';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/10 py-3 sm:py-4' : 'mix-blend-difference'}`}>
      <motion.a
        href="/"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg sm:text-xl font-display uppercase tracking-tighter cursor-pointer"
      >
        {site.brand}.
      </motion.a>

      <div className="flex items-center gap-3 sm:gap-4">
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-white/60 hover:text-accent transition-colors"
        >
          Home
        </motion.a>

        <span className="text-white/20 hidden sm:inline">|</span>

        <motion.a
          href="/articles.html"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-white/60 hover:text-accent transition-colors"
        >
          Articles
        </motion.a>

        <span className="text-white/20 hidden sm:inline">|</span>

        <motion.a
          href="https://instagram.com/qorvode.ai"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="text-white/60 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:text-accent transition-colors"
        >
          <Instagram size={20} />
        </motion.a>

        <motion.a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-white/60 p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg hover:text-accent transition-colors"
        >
          <Github size={20} />
        </motion.a>
      </div>
    </nav>
  );
};

const TrackCard = ({ release, isActive, onPlay }: { release: Release; isActive: boolean; onPlay: (release: Release) => void }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden backdrop-blur-sm"
    >
      <button
        onClick={() => onPlay(release)}
        className="w-full p-6 sm:p-8 flex items-center gap-4 sm:gap-6 hover:bg-white/[0.02] transition-all group"
      >
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-accent scale-110' : 'bg-white/5 group-hover:bg-accent/20'}`}>
          {isActive ? <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />}
        </div>

        <div className="flex-1 text-left">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-[10px] font-mono opacity-40">{release.year}</span>
            <span className="text-[10px] uppercase tracking-wider text-accent/60">{release.label}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight">{release.title}</h3>
          <p style={{ fontFamily: "'Amiri', serif" }} className="text-base opacity-50 mt-1">{release.arabic}</p>
        </div>

        <div className="hidden sm:flex flex-wrap gap-2">
          {release.links.slice(0, 3).map(link => (
            <span key={link.label} className="text-[9px] uppercase tracking-wider opacity-40 px-3 py-1 border border-white/10 rounded-full">
              {link.label}
            </span>
          ))}
        </div>
      </button>

      <div className="px-6 sm:px-8 pb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[10px] uppercase tracking-widest text-accent/60 hover:text-accent transition-colors flex items-center gap-2"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? 'Hide Lyrics' : 'View Lyrics & Translation'}
        </button>
      </div>

      {expanded && release.lyrics && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="px-6 sm:px-8 pb-8 border-t border-white/5"
        >
          <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">English Lyrics</h4>
              <p className="text-sm leading-relaxed opacity-60 whitespace-pre-line font-light">{release.lyrics.english}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-4">العربية</h4>
              <p style={{ fontFamily: "'Amiri', serif" }} className="text-lg leading-relaxed opacity-60 whitespace-pre-line text-right">{release.lyrics.arabic}</p>
            </div>
          </div>
          {release.lyrics.meaning && (
            <div className="mt-6 pt-6 border-t border-white/5">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent/40 mb-3">Meaning</h4>
              <p className="text-sm italic opacity-40">{release.lyrics.meaning}</p>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

const SpotifyPlayer = ({ activeRelease }: { activeRelease: Release | null }) => {
  if (!activeRelease?.spotifyEmbed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-bg/95 backdrop-blur-lg border-t border-white/10 p-4 z-40"
    >
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-wider text-accent/60 mb-1">Now Playing</p>
          <h4 className="text-lg font-display uppercase">{activeRelease.title}</h4>
          <p style={{ fontFamily: "'Amiri', serif" }} className="text-sm opacity-50">{activeRelease.arabic}</p>
        </div>
        <div className="w-full max-w-[300px] sm:max-w-[400px]">
          <iframe
            style={{ borderRadius: '12px' }}
            src={activeRelease.spotifyEmbed}
            width="100%"
            height="80"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

const MusicHero = () => {
  return (
    <section className="pt-48 pb-24 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Headphones className="w-5 h-5 text-accent" />
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Discography</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-display uppercase leading-none mb-8">Music &<br /><span className="italic font-serif normal-case text-accent">Nasheeds.</span></h1>
        <p className="text-xl md:text-2xl font-light opacity-50 max-w-2xl leading-relaxed">
          Where binary logic meets composition. Exploring themes of spirituality and existence through the human voice.
        </p>

        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
          <span style={{ fontFamily: "'Amiri', serif" }} className="text-2xl text-accent tracking-[0.15em]">اللهُ أَكْبَرُ</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
        </div>
      </div>
    </section>
  );
};

const Discography = ({ releases: releaseList, activeRelease, onPlay }: { releases: Release[]; activeRelease: Release | null; onPlay: (release: Release) => void }) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">All Releases</h2>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-40">
            <Music className="w-4 h-4" />
            {releaseList.length} tracks
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {releaseList.map((release) => (
            <TrackCard
              key={release.id}
              release={release}
              isActive={activeRelease?.id === release.id}
              onPlay={onPlay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StreamingLinks = () => {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight mb-8">Stream Everywhere</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: 'Spotify', icon: 'fab fa-spotify', url: 'https://open.spotify.com/artist/YOUR_SPOTIFY_ID' },
            { label: 'Apple Music', icon: 'fab fa-apple', url: 'https://music.apple.com/artist' },
            { label: 'YouTube Music', icon: 'fab fa-youtube', url: 'https://music.youtube.com' },
            { label: 'Amazon Music', icon: 'fab fa-amazon', url: 'https://music.amazon.com' },
            { label: 'JioSaavn', icon: 'fas fa-music', url: 'https://www.jiosaavn.com/artist' },
          ].map(platform => (
            <a
              key={platform.label}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full hover:border-accent hover:bg-accent/5 transition-all group"
            >
              <i className={`${platform.icon} text-lg opacity-60 group-hover:text-accent`}></i>
              <span className="text-[11px] uppercase tracking-wider">{platform.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const MusicPage = () => {
  const { scrollYProgress } = useScroll();
  const [activeRelease, setActiveRelease] = useState<Release | null>(null);

  const handlePlay = (release: Release) => {
    if (activeRelease?.id === release.id) {
      setActiveRelease(null);
    } else {
      setActiveRelease(release);
    }
  };

  return (
    <div className="bg-bg min-h-screen selection:bg-accent selection:text-white text-white">
      <AmoledBackground />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main className={activeRelease ? 'pb-32' : ''}>
        <MusicHero />
        <Discography releases={releases} activeRelease={activeRelease} onPlay={handlePlay} />
        <StreamingLinks />
      </main>
      <SpotifyPlayer activeRelease={activeRelease} />
      <footer className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-bg border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/5">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-base sm:text-lg font-display uppercase tracking-tighter">{site.brand}.</span>
              <span className="text-white/20">|</span>
              <p className="text-[11px] sm:text-xs opacity-40">
                © {new Date().getFullYear()}
              </p>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <a href="/" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">Home</a>
                <span className="text-white/20">·</span>
                <a href="/articles.html" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">Articles</a>
                <span className="text-white/20">·</span>
                <a href={site.github} target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-white/50 hover:text-accent transition-colors">GitHub</a>
              </div>
            </div>

            <p className="text-[9px] sm:text-[10px] opacity-20 font-mono uppercase tracking-wider">{site.terminalPrompt} echo "Goodnight"</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MusicPage />
  </React.StrictMode>,
);
