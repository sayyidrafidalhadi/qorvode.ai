import { useState, useRef } from "react";
import { motion } from "motion/react";
import { HeadphonesIcon } from "@/components/Icons";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);
  const [fadeComplete, setFadeComplete] = useState(false);
  const [started, setStarted] = useState(false);

  const startAudio = () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    setStarted(true);
    setMuted(false);
    audio.volume = 0;
    audio.play().catch(() => {});

    const fadeInterval = setInterval(() => {
      if (audio.volume < 0.6) {
        audio.volume = Math.min(audio.volume + 0.02, 0.6);
      } else {
        clearInterval(fadeInterval);
        setFadeComplete(true);
      }
    }, 50);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      audio.volume = 0.6;
      audio.play().catch(() => {});
      setMuted(false);
      const fadeIn = setInterval(() => {
        if (audio.volume < 0.6) {
          audio.volume = Math.min(audio.volume + 0.014, 0.6);
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    } else {
      audio.pause();
      setMuted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="https://res.cloudinary.com/detke30vn/video/upload/v1777443888/Kaan_Simseker_-_Deep_Force_ynuaua.mp3" loop preload="auto" />
      {!started && (
        <motion.button
          onClick={startAudio}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          className="fixed top-24 sm:top-28 right-6 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-surface brutal-border brutal-shadow flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
        >
          <HeadphonesIcon size="m" />
        </motion.button>
      )}
      {started && (
        <motion.button
          onClick={toggleMute}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: fadeComplete ? 1 : 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          className="fixed top-24 sm:top-28 right-6 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-surface brutal-border brutal-shadow flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
        >
          {muted ? (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </motion.button>
      )}
    </>
  );
};

export default MusicPlayer;
