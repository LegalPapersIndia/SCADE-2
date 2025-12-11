import React from "react";
import { motion } from "framer-motion";
import { 
  Flower2, Sparkles, HeartHandshake, Leaf, 
  Heart, ShieldCheck, Sun, Moon 
} from "lucide-react";
import TavarumLogo from "../Asset/tavarum.png"; // Your official logo

const Tavarum = () => {
  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-[#FDF8F4] via-[#FAF5F0] to-[#FDF8F4] overflow-hidden"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >

      {/* Hero – Royal Announcement */}
      <section className="relative py-32 lg:py-56 px-6 overflow-hidden">
        {/* Golden Glow Orbs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-[#8B4513]/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-200/15 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Official Tavarum Logo – Floating Gracefully */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="mb-10"
            >
              <img 
                src={TavarumLogo} 
                alt="Tavarum Logo"
                className="w-64 lg:w-80 xl:w-96 drop-shadow-2xl"
              />
            </motion.div>

            {/* Title – Playfair Display (Same as Magmist) */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.2 }}
              className="text-6xl lg:text-8xl font-bold text-[#8B4513] leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              TAVARUM
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-3xl lg:text-5xl text-[#D4AF37] mt-6 font-light italic tracking-widest"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pure Beauty, Naturally
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="mt-16 max-w-4xl"
            >
              <p className="text-2xl lg:text-3xl text-[#5D4037] font-medium leading-relaxed">
                India’s most luxurious organic hair ritual
              </p>
              <p className="text-xl lg:text-2xl text-[#6D4C41] mt-5 opacity-90 font-light">
                100% Natural • Ayurvedic • Soulfully Handcrafted in Mysore
              </p>
            </motion.div>

            {/* Coming Soon – Majestic */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1.2 }}
              className="mt-24"
            >
              <div className="flex justify-center gap-8 mb-10">
                <Sparkles className="w-12 h-12 text-[#D4AF37] animate-pulse" />
                <Sparkles className="w-10 h-10 text-[#D4AF37] animate-pulse delay-300" />
                <Sparkles className="w-12 h-12 text-[#D4AF37] animate-pulse delay-700" />
              </div>

              <p 
                className="text-6xl lg:text-8xl font-bold text-[#8B4513] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Coming in 2026
              </p>

              <div className="flex justify-center gap-8 mt-10 opacity-70">
                <Sun className="w-10 h-10 text-amber-600" />
                <Moon className="w-9 h-9 text-amber-700 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy – Same elegance as Magmist */}
      <section className="py-32 px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl lg:text-6xl font-bold text-[#8B4513] mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Legacy Being Reborn
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl lg:text-2xl text-[#5D4037] leading-relaxed font-medium max-w-4xl mx-auto"
          >
            Tavarum is the quiet revival of India’s ancient hair wisdom —<br />
            distilled with devotion, crafted without compromise, offered with love.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg lg:text-xl text-[#6D4C41] mt-10 italic opacity-85"
          >
            No sulphates. No parabens. No ammonia.<br />
            Only nature. Only purity. Only you.
          </motion.p>
        </div>
      </section>

      {/* Core Values – Same grid style as Magmist */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
            {[
              { icon: Leaf, label: "100% Organic" },
              { icon: ShieldCheck, label: "Zero Chemicals" },
              { icon: Flower2, label: "Ayurvedic Roots" },
              { icon: Heart, label: "Made with Love" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-amber-50 to-[#FDF8F4] shadow-2xl border-4 border-[#D4AF37]/30 mb-6">
                    <Icon className="w-16 h-16 text-[#8B4513]" />
                  </div>
                  <p className="text-xl font-bold text-[#8B4513]">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Whisper – Pure Emotion */}
      <section className="py-40 px-6 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] text-white">
        <motion.div className="max-w-5xl mx-auto text-center">
          <motion.div
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="mb-12"
          >
            <Flower2 className="w-36 h-36 text-[#D4AF37] mx-auto opacity-90" />
          </motion.div>

          <h2 
            className="text-6xl lg:text-8xl font-bold mb-10 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Wait Will Be Beautiful
          </h2>

          <p className="text-2xl lg:text-3xl font-light opacity-95 mb-16 max-w-3xl mx-auto">
            Something pure is growing in silence.<br />
            And when it arrives — it will change everything.
          </p>

          <div className="flex items-center justify-center gap-10 opacity-80 text-xl italic">
            <HeartHandshake className="w-12 h-12" />
            <span>From Mysore, with devotion • 2026</span>
            <HeartHandshake className="w-12 h-12" />
          </div>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="mt-20"
          >
            <Sparkles className="w-20 h-20 mx-auto text-[#D4AF37]" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Tavarum;