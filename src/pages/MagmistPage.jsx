import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Droplets, Zap, Brain, Shield, Home, Recycle, 
  Sparkles, PhoneCall, CheckCircle2, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

// Home Model Images (Classic: m1-m4, Elite: m5-m8, Pro: mm1-mm4)
import m1 from '../Asset/m1.jpg';
import m2 from '../Asset/m2.jpg';
import m3 from '../Asset/m3.jpg';
import m4 from '../Asset/m4.jpg';
import m5 from '../Asset/m5.jpg';
import m6 from '../Asset/m6.jpg';
import m7 from '../Asset/m7.jpg';
import m8 from '../Asset/m8.jpg';

import mm1 from '../Asset/mm1.jpg';
import mm2 from '../Asset/mm2.jpg';
import mm3 from '../Asset/mm3.jpg';
import mm4 from '../Asset/mm4.jpg';

import magmist from "../Asset/magnist.jpg"

const whatsappNumber = "7411532800";
const getWhatsAppLink = (model) => {
  const message = `Namaste SCADE Team!\n\nI'm very interested in *${model}*.\n\nPlease share:\n• Current pricing\n• Full specifications\n• Demo availability\n• Dealership options\n\nLooking forward to your reply!`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const heroSlides = [
  {
    title: "Magmist Classic",
    subtitle: "12-15 LTR Daily • Pure Hydration for Small Families",
    tagline: "Elegant, Compact, Essential",
    image: m1, // Use one image for slide
    gradient: "from-cyan-600 via-blue-700 to-cyan-800",
    cta: "Discover Classic",
    link: getWhatsAppLink("Magmist Classic")
  },
  {
    title: "Magmist Elite",
    subtitle: "20-25 LTR Daily • Premium Wellness for Modern Homes",
    tagline: "Advanced, Smart, Luxurious",
    image: m5,
    gradient: "from-blue-600 via-cyan-700 to-blue-800",
    cta: "Discover Elite",
    link: getWhatsAppLink("Magmist Elite")
  },
  {
    title: "Magmist Pro",
    subtitle: "20-25 LTR Daily • Professional Grade for Home Use",
    tagline: "Powerful, Reliable, Versatile",
    image: mm1,
    gradient: "from-cyan-700 via-blue-800 to-cyan-900",
    cta: "Discover Pro",
    link: getWhatsAppLink("Magmist Pro")
  }
];

const Magmist = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const classicImages = [m1, m4 , m7 ,m4];
  const eliteImages = [m5, m6, m2, m8];
  const proImages = [mm1, mm2, mm3, mm4];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-cyan-50/60 overflow-hidden"
         style={{ fontFamily: "'Manrope', sans-serif" }}>

      {/* Hero Carousel - 3 Slides */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-t ${heroSlides[currentSlide].gradient} opacity-80`} />
          </motion.div>
        </AnimatePresence>

        {/* Slide Content */}
        <div className="relative h-full flex items-center px-6 lg:px-20">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={currentSlide + 'text'}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              <h1 
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-2xl lg:text-3xl font-light mb-4 opacity-95">
                {heroSlides[currentSlide].subtitle}
              </p>
              <p className="text-xl italic opacity-90 flex items-center gap-4 mb-12">
                <Droplets className="w-8 h-8 text-cyan-300" />
                {heroSlides[currentSlide].tagline}
                <Droplets className="w-8 h-8 text-cyan-300" />
              </p>
              <a
                href={heroSlides[currentSlide].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-600 to-blue-700 px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>

            <motion.div
              key={currentSlide + 'image'}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl ring-8 ring-cyan-200/50"
              />
            </motion.div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === i ? 'w-16 bg-white' : 'w-8 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Magmist Classic */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-cyan-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Magmist Classic
            </h2>
            <p className="text-2xl text-gray-600 mt-4 font-light">12-15 LTR Daily • Perfect for Small Families</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {classicImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Classic ${i+1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href={getWhatsAppLink("Magmist Classic")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105"
            >
              Get Classic Now
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Magmist Elite */}
      <section className="py-24 lg:py-32 px-6 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-cyan-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Magmist Elite
            </h2>
            <p className="text-2xl text-gray-600 mt-4 font-light">20-25 LTR Daily • Perfect for Large spaces </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {eliteImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Elite ${i+1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href={getWhatsAppLink("Magmist Elite")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105"
            >
              Get Elite Now
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Magmist Pro */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-cyan-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Magmist Pro
            </h2>
            <p className="text-2xl text-gray-600 mt-4 font-light">20-25 LTR Daily • Professional for Home Use</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {proImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Pro ${i+1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href={getWhatsAppLink("Magmist Pro")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105"
            >
              Get Pro Now
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Magmist */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-center text-cyan-800 mb-20" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Magmist Changes Everything
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { icon: Droplets, title: "Air to Pure Water", desc: "Endless supply — no pipes, no plastic" },
              { icon: Recycle, title: "Zero Wastage", desc: "Unlike RO — every drop counts" },
              { icon: Brain, title: "Smart IoT", desc: "Real-time monitoring & auto-adjust" },
              { icon: Shield, title: "Alkaline Minerals", desc: "pH 8–9.5 with essential nutrients" },
              { icon: Zap, title: "Energy Efficient", desc: "Runs on standard home power" },
              { icon: Home, title: "Made in India", desc: "Designed in Mysore for Indian homes" },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center p-8 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-cyan-100"
                >
                  <Icon className="w-16 h-16 text-cyan-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-cyan-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {f.title}
                  </h3>
                  <p className="text-gray-600 font-light">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
<section className="py-32 px-6 bg-gradient-to-r from-cyan-700 via-blue-800 to-cyan-900 text-white">
  <div className="max-w-5xl mx-auto text-center">
    
    {/* Centered Logo - Fully Responsive */}
    <div className="flex justify-center mb-12">
      <img 
        src={magmist} 
        alt="Magmist Logo" 
        className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
      />
    </div>

    <h2 
      className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-12 leading-tight" 
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      Bring Pure Water Home
    </h2>

    <p className="text-xl sm:text-2xl lg:text-3xl mb-16 opacity-95 font-light max-w-4xl mx-auto px-4">
      No plastic. No waiting. Just pure, healthy water — from air.
    </p>

    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Namaste! Ready to bring Magmist home. Share full details & pricing."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 sm:px-16 py-7 sm:py-8 rounded-full text-xl sm:text-2xl font-bold shadow-2xl hover:shadow-amber-500/50 transition-all hover:scale-105 touch-manipulation"
    >
      <PhoneCall className="w-9 h-9 sm:w-10 sm:h-10" />
      Chat on WhatsApp Now
      <Sparkles className="w-9 h-9 sm:w-10 sm:h-10" />
    </a>

    <p className="mt-12 text-base sm:text-lg opacity-80 font-light">
      *Output depends on humidity & temperature • Proudly Made in Mysore
    </p>
  </div>
</section>
    </div>
  );
};

export default Magmist;