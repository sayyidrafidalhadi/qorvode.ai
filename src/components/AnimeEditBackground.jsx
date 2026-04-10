import { useEffect, useRef } from 'react';

const AnimeEditBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Particles
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: ['#F27D26', '#4338CA', '#F97316', '#00FF00', '#FFFFFF'][Math.floor(Math.random() * 5)]
    }));

    // Speed lines
    const speedLines = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 150 + 50,
      speed: Math.random() * 8 + 4,
      opacity: Math.random() * 0.3 + 0.05,
      width: Math.random() * 2 + 0.5
    }));

    // Floating orbs
    const orbs = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 200 + 100,
      color: ['#F27D26', '#4338CA', '#F97316', '#00FF00', '#2563EB'][Math.floor(Math.random() * 5)],
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: (Math.random() - 0.5) * 1.5,
      phase: Math.random() * Math.PI * 2
    }));

    const draw = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw floating orbs with glow
      orbs.forEach(orb => {
        orb.x += orb.speedX + Math.sin(time + orb.phase) * 0.5;
        orb.y += orb.speedY + Math.cos(time + orb.phase) * 0.5;

        // Wrap around
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, orb.color + '20');
        gradient.addColorStop(0.5, orb.color + '10');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2);
      });

      // Draw speed lines (anime style)
      speedLines.forEach(line => {
        line.y += line.speed;
        if (line.y > canvas.height + line.length) {
          line.y = -line.length;
          line.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
        ctx.lineWidth = line.width;
        ctx.stroke();
      });

      // Draw particles
      particles.forEach(p => {
        p.x += p.speedX + Math.sin(time * 2 + p.y * 0.01) * 0.5;
        p.y += p.speedY;

        if (p.y > canvas.height + 10) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
      });

      ctx.shadowBlur = 0;

      // Subtle grid overlay
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 80;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Scanline effect (anime aesthetic)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillRect(0, y, canvas.width, 2);
      }

      // Vignette effect
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.3,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.8
      );
      vignette.addColorStop(0, 'transparent');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  );
};

export default AnimeEditBackground;
