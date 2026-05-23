const Marquee = () => {
  const items = ["Digital Authority", "Premium Design", "Strategic Development", "Conversion Focus", "Bespoke Solutions", "Brand Upgrade"];
  return (
    <div className="py-8 sm:py-16 border-y border-white/[0.05] overflow-hidden bg-white/[0.005]">
      <div className="flex whitespace-nowrap">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-16 sm:gap-24 px-8 sm:px-12 animate-marquee">
            {items.map((text) => (
              <div key={text} className="flex items-center gap-16 sm:gap-24">
                <span className="text-lg sm:text-3xl md:text-5xl font-display uppercase opacity-20 sm:opacity-[0.08] tracking-tighter">{text}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/20" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
