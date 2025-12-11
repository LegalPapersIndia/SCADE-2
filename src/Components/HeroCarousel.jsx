// src/components/HeroCarousel/HeroCarousel.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Tavarum from "../Asset/tavarum.png";

const slides = [
  {
    id: 0,
    brand: "Magmist",
    title: "Pure Hydration From Thin Air",
    highlight: "From Thin Air",
    description:
      "Advanced Atmospheric Water Generators delivering pure, alkaline, mineral-rich water — straight from the air you breathe.",
    ctaText: "Discover Magmist",
    ctaLink: "/magmist",
    gradient: "from-cyan-900/70 via-blue-900/30 to-transparent",
    bgImage:
      "https://images.stockcake.com/public/f/6/7/f6781e7e-2a66-4aaa-b7e2-8a73646e9fd1_large/crystal-water-flow-stockcake.jpg",
  },
  {
    id: 1,
    brand: "Tavarum",
    title: "Nature’s Luxury for Your Hair",
    highlight: "Your Hair",
    description:
      "100% organic Ayurvedic hair care with rare herbs and cold-pressed oils. Chemical-free nourishment, timeless beauty.",
    tagline: "“Ancient Wisdom, Modern Care.”",
    ctaText: "Explore Tavarum",
    ctaLink: "/tavarum",
    gradient: "from-emerald-900/70 via-green-900/30 to-transparent",
    bgImage: Tavarum,
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${current.bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className={`absolute inset-0 bg-gradient-to-t ${current.gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Content Grid */}
          <div className="relative h-full flex items-center px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white" 
                style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug tracking-tight">
                  {current.title.split(current.highlight)[0]}
                  <span className={current.id === 0 
                    ? "block text-[#00E5FF] drop-shadow-lg" 
                    : "block text-[#B2FF59] drop-shadow-lg"}
                  >
                    {current.highlight}
                  </span>
                </h1>


                {current.tagline && (
                  <p className="mt-10 text-xl md:text-2xl italic text-amber-400 font-medium tracking-wider">
                    {current.tagline}
                  </p>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-12"
                >
                  <Link
                    to={current.ctaLink}
                    className="inline-flex items-center gap-4 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-9 py-4 text-lg font-medium text-white hover:bg-white/20 hover:border-white/60 transition-all duration-400 shadow-xl"
                  >
                    {current.ctaText}
                    <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right: Image (Desktop only) */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3, delay: 0.7 }}
                className="hidden lg:block justify-self-end"
              >
                <div className="relative max-w-lg">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/25">
                    <img
                      src={current.bgImage}
                      alt={current.brand}
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-t from-cyan-400/20 to-transparent blur-3xl -z-10 scale-110" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Minimal Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  currentSlide === i ? "w-16 bg-white" : "w-8 bg-white/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;