import { useEffect, useRef } from 'react';
import { useScroll } from 'motion/react';

const AmoledBackground = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const orbsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = scrollY.get();
      orbsRef.current.forEach((orb, i) => {
        if (!orb) return;
        const speed = 0.1 + i * 0.08;
        const y = -scroll * speed;
        const x = Math.sin(scroll * 0.001 + i * 2) * 50;
        orb.style.transform = `translate(${x}px, ${y}px)`;
        orb.style.opacity = 0.15 + Math.sin(scroll * 0.002 + i) * 0.05;
      });
    };

    const unsubscribe = scrollY.on('change', handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-[#000000]" />
      
      {/* Animated gradient orbs */}
      {[
        { size: '600px', color: '#F27D26', x: '10%', y: '20%', blur: '150px' },
        { size: '500px', color: '#4338CA', x: '70%', y: '40%', blur: '120px' },
        { size: '700px', color: '#F97316', x: '30%', y: '60%', blur: '180px' },
        { size: '400px', color: '#00FF00', x: '80%', y: '10%', blur: '100px' },
        { size: '550px', color: '#2563EB', x: '50%', y: '80%', blur: '140px' },
        { size: '450px', color: '#F27D26', x: '20%', y: '90%', blur: '130px' },
      ].map((orb, i) => (
        <div
          key={i}
          ref={(el) => (orbsRef.current[i] = el)}
          className="absolute rounded-full transition-transform will-change-transform"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}15 0%, ${orb.color}08 40%, transparent 70%)`,
            filter: `blur(${orb.blur})`,
            transform: 'translate(0, 0)',
          }}
        />
      ))}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20 animate-float"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 12}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AmoledBackground;
