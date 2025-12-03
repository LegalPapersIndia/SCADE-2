// src/components/HeroCarousel/HeroCarousel.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 0,
    overlay: "from-gray/80 via-gray/50 to-transparent",
    title: (
      <>
        Magmist
        <span className="block text-[#0A8A67] text-5xl md:text-7xl font-bold drop-shadow-lg">
          Pure Hydration from Air
        </span>
      </>
    ),
    subtitle: "Advanced Atmospheric Water Generator • Alkaline • Mineral-Rich • Sustainable",
    tagline: "“Water from Air, Health in Every Drop.”",
    ctaText: "Discover Magmist",
    ctaLink: "/magmist",
  },
  {
    id: 1,
    overlay: "from-[#C48A6F]/80 via-[#C48A6F]/50 to-transparent",
    title: (
      <>
        Tavarum
        <span className="block text-[#D4AF37] text-5xl md:text-7xl font-bold drop-shadow-lg">
          Pure Beauty, Naturally
        </span>
      </>
    ),
    subtitle: "100% Organic Hair Essentials • Chemical-Free • Nourishing",
    tagline: "“Ancient Wisdom, Modern Care.”",
    ctaText: "Explore Tavarum",
    ctaLink: "/tavarum",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100vh] md:h-[85vh] lg:h-[80vh] w-full overflow-hidden bg-black">
      {/* Minimum 100vh on mobile, reduced on larger screens */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* High-Quality Background Images */}
          {currentSlide === 0 && (
            <>
              
            </>
          )}
          {currentSlide === 1 && (
            <>
              
            </>
          )}

          {/* Dark Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${slides[currentSlide].overlay}`} />

          {/* Content Overlay */}
          <div className="relative flex h-full items-center justify-start px-6 md:px-12 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="max-w-4xl text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
                {slides[currentSlide].title}
              </h1>

              <p className="mt-6 text-lg md:text-2xl font-light tracking-wide text-gray-100">
                {slides[currentSlide].subtitle}
              </p>

              <p className="mt-4 text-base md:text-xl italic tracking-widest text-[#D4AF37] font-medium opacity-90">
                {slides[currentSlide].tagline}
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10"
              >
                <Link
                  to={slides[currentSlide].ctaLink}
                  className="inline-flex items-center gap-4 rounded-full bg-[#0A8A67] px-8 py-4 text-base md:text-lg font-semibold text-white shadow-2xl transition-all hover:bg-[#064B39] hover:shadow-[#D4AF37]/20"
                >
                  {slides[currentSlide].ctaText}
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-10 bg-[#D4AF37] shadow-lg"
                : "bg-white/50 backdrop-blur-sm hover:bg-[#D4AF37]/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;