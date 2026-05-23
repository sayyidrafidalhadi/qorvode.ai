"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface TestimonialItem {
  id: string | number;
  description: string;
  author: string;
  role: string;
}

interface TestimonialsCardProps {
  items: TestimonialItem[];
  className?: string;
  showNavigation?: boolean;
  showCounter?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function TestimonialsCard({
  items,
  className,
  showNavigation = true,
  showCounter = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}: TestimonialsCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = items[activeIndex];

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={cn("relative max-w-2xl mx-auto", className)}>
      {showCounter && (
        <div className="flex justify-between items-center mb-8">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
            {activeIndex + 1} / {items.length}
          </span>
        </div>
      )}

      <div className="relative min-h-[280px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="w-full"
          >
            <Quote className="w-12 h-12 text-accent/20 mb-6" />

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display uppercase tracking-tight leading-relaxed text-white mb-8">
              &ldquo;{activeItem.description}&rdquo;
            </blockquote>

            <div className="border-l-2 border-accent/30 pl-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium">
                {activeItem.author}
              </p>
              <p className="text-[10px] text-white/40 mt-1">
                {activeItem.role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {showNavigation && items.length > 1 && (
        <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/[0.06]">
          <button
            disabled={activeIndex === 0}
            onClick={handlePrev}
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] transition-all",
              activeIndex === 0
                ? "opacity-20 cursor-not-allowed"
                : "hover:border-accent/30 hover:bg-white/[0.04]"
            )}
            aria-label="Previous"
          >
            <ArrowLeft className="w-5 h-5 text-white/40" />
          </button>

          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  i === activeIndex
                    ? "bg-accent w-8"
                    : "bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            disabled={activeIndex === items.length - 1}
            onClick={handleNext}
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] transition-all",
              activeIndex === items.length - 1
                ? "opacity-20 cursor-not-allowed"
                : "hover:border-accent/30 hover:bg-white/[0.04]"
            )}
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5 text-white/40" />
          </button>
        </div>
      )}
    </div>
  );
}

export default TestimonialsCard;
