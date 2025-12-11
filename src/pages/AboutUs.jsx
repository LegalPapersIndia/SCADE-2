// src/pages/About.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  MapPin, Phone, Mail, Beaker, Heart, HeartHandshake,
  Recycle, ShieldCheck, Leaf, Droplets, Flower2, Sparkles, ChevronLeft, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import magmist from "../Asset/demo.mp4";
import Tavarum from "../Asset/tavarum.png";
import mag from "../Asset/magnist.jpg"

const heroSlides = [
  {
    title: "Water from Air",
    subtitle: "Pure. Alkaline. Mineral-Rich.",
    tagline: "Health in Every Drop",
    video: mag,
    gradient: "from-cyan-600 via-blue-700 to-cyan-800"
  },
  {
    title: "Thavarum Beauty",
    subtitle: "100% organic",
    tagline: "Coming Soon in 2026",
    image: Tavarum,
    gradient: "from-amber-800 via-amber-900 to-amber-950"
  }
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
     
      <div className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-cyan-50/20 overflow-hidden"
           style={{ fontFamily: "'Manrope', sans-serif" }}>

        {/* HERO CAROUSEL - 2 ULTRA PREMIUM SLIDES */}
        <section className="relative h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              {heroSlides[currentSlide].video ? (
                <video
                  src={heroSlides[currentSlide].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
                />
              )}
              <div className={`absolute inset-0 bg-gradient-to-t ${heroSlides[currentSlide].gradient} opacity-90`} />
            </motion.div>
          </AnimatePresence>

          {/* Hero Content */}
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl text-cyan-200 font-light mb-6">
                {heroSlides[currentSlide].subtitle}
              </p>
              <p className="text-2xl md:text-3xl text-cyan-100 italic flex items-center justify-center gap-4">
                <Droplets className="w-10 h-10" />
                {heroSlides[currentSlide].tagline}
                <Droplets className="w-10 h-10" />
              </p>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === i ? "w-16 bg-white" : "w-10 bg-white/40"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 lg:py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 
                className="text-5xl lg:text-6xl font-bold text-cyan-800 mb-10 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                We Are Not Just<br />a Company
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                Born in 2025 in the royal city of <span className="text-cyan-700 font-semibold">Mysore</span>,<br />
                SCADE is a sacred union of two visionary families —<br />
                <span className="text-blue-700 font-medium">Healthcare + Engineering</span>
              </p>
              <p className="mt-8 text-2xl italic text-cyan-600">
                This is more than innovation.<br />
                <span className="text-3xl font-bold">This is purpose.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl ring-8 ring-cyan-100/50"
            >
              <img
                src="https://images.unsplash.com/photo-1582213782179-c49b43d3d4d8?w=1200&auto=format&fit=crop"
                alt="SCADE Family"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision - Light Blue Luxury */}
        <section className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-cyan-200"
            >
              <h3 className="text-4xl font-bold text-cyan-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Mission
              </h3>
              <p className="text-xl text-gray-700 font-light leading-relaxed">
                To bring pure hydration and conscious wellness into every Indian home using science, sustainability, and soul.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12 shadow-2xl border border-amber-200"
            >
              <h3 className="text-4xl font-bold text-amber-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Vision
              </h3>
              <p className="text-xl text-gray-700 font-light leading-relaxed">
                To be India’s most trusted name in conscious living — where innovation serves humanity and nature.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Showcase */}
        <section className="py-32 px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl lg:text-6xl font-bold text-center text-cyan-800 mb-20"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Innovations
          </motion.h2>

          {/* Magmist */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto mb-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-cyan-700 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Magmist
              </h3>
              <p className="text-xl text-gray-700 font-light leading-relaxed mb-8">
                The world’s most advanced Atmospheric Water Generator — turning air into pure, alkaline, mineral-rich drinking water.
              </p>
              <div className="space-y-4 text-lg">
                {["Zero plastic", "pH 8–9.5", "Smart sensors", "Made in India"].map((f, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Droplets className="w-ml-1 w-8 h-8 text-cyan-500" />
                    <span className="font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/magmist" className="mt-10 inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-cyan-500/40 transition-all hover:scale-105">
                Discover Magmist
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl ring-8 ring-cyan-200/50"
            >
              <video src={magmist} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Tavarum */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="rounded-3xl overflow-hidden shadow-2xl ring-8 ring-amber-200/50"
            >
              <img src={Tavarum} alt="Tavarum" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-amber-700 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Tavarum
              </h3>
              <p className="text-xl text-gray-700 font-light leading-relaxed mb-8">
                100% organic Ayurvedic hair care — chemical-free, soulful, timeless.
              </p>
              <p className="text-2xl text-amber-600 font-medium">Coming 2026</p>
            </motion.div>
          </div>
        </section>

        {/* Why Trust SCADE */}
        <section className="py-32 bg-gradient-to-b from-cyan-50 to-white">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl lg:text-6xl font-bold text-center text-cyan-800 mb-20"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Families Choose SCADE
          </motion.h2>

          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-6">
            {[
              { icon: Beaker, label: "Science-Backed" },
              { icon: Heart, label: "Family Values" },
              { icon: Leaf, label: "Sustainable" },
              { icon: ShieldCheck, label: "Trusted" },
              { icon: HeartHandshake, label: "Human-First" },
              { icon: Sparkles, label: "Made in India" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 shadow-xl mb-4 group-hover:shadow-2xl transition">
                    <Icon className="w-10 h-10 text-cyan-700" />
                  </div>
                  <p className="font-medium text-gray-800">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Mysore Love */}
        <section className="py-32 px-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-6xl font-bold text-cyan-800 mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Proudly Born in Mysore
            </motion.h2>
            <p className="text-2xl text-gray-700 font-light italic">
              The City of Palaces • The Soul of India
            </p>
            <p className="mt-8 text-xl text-cyan-700 font-medium">
              Made with Care in Mysore • Built for the World
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;