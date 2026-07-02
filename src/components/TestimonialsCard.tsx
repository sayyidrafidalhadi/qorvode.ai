"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { QuoteIcon } from "@/components/Icons";

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
    <div className={cn("relative max-w-3xl mx-auto", className)}>
      {showCounter && (
        <div className="flex justify-between items-center mb-8">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-alt/40">
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
            className="w-full p-8 sm:p-10 brutal-border-alt bg-surface-alt"
          >
            <QuoteIcon size="xl" />

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display font-bold uppercase tracking-tight leading-relaxed text-text-alt mb-8 mt-6">
              &ldquo;{activeItem.description}&rdquo;
            </blockquote>

            <div className="border-l-[3px] border-accent-alt/40 pl-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent-alt">
                {activeItem.author}
              </p>
              <p className="text-[10px] text-text-alt/50 mt-1 font-mono">
                {activeItem.role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {showNavigation && items.length > 1 && (
        <div className="flex items-center justify-between mt-10 pt-8 border-t-[3px] border-accent-alt/20">
          <button
            disabled={activeIndex === 0}
            onClick={handlePrev}
            className={cn(
              "flex items-center justify-center w-11 h-11 brutal-border-alt bg-surface-alt transition-all",
              activeIndex === 0
                ? "opacity-20 cursor-not-allowed"
                : "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            )}
            aria-label="Previous"
          >
            <ArrowLeft className="w-5 h-5 text-text-alt/60" />
          </button>

          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); }}
                className={cn(
                  "h-2 transition-all duration-300 brutal-border-alt",
                  i === activeIndex
                    ? "bg-accent-alt w-8"
                    : "bg-text-alt/20 w-2 hover:bg-text-alt/40"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            disabled={activeIndex === items.length - 1}
            onClick={handleNext}
            className={cn(
              "flex items-center justify-center w-11 h-11 brutal-border-alt bg-surface-alt transition-all",
              activeIndex === items.length - 1
                ? "opacity-20 cursor-not-allowed"
                : "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            )}
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5 text-text-alt/60" />
          </button>
        </div>
      )}
    </div>
  );
}

export default TestimonialsCard;
