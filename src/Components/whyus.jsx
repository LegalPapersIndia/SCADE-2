// src/components/WhyChooseUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Beaker, 
  Heart, 
  Globe, 
  Recycle, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Leaf className="w-14 h-14" />,
      title: "Scientifically Developed",
      description: "Designed with combined expertise of healthcare professionals and engineers for proven health benefits.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Beaker className="w-14 h-14" />,
      title: "Precision Engineering",
      description: "Every product is crafted with scientific accuracy, rigorously tested, and built to perform flawlessly.",
      gradient: "from-blue-600 to-cyan-700"
    },
    {
      icon: <Heart className="w-14 h-14" />,
      title: "Family-Founded, Value-Driven",
      description: "Rooted in trust, care, compassion, and a shared passion for community wellness.",
      gradient: "from-cyan-600 to-sky-600"
    },
    {
      icon: <Globe className="w-14 h-14" />,
      title: "Made in India, Built for the World",
      description: "Engineered with pride in Mysore, delivering world-class innovation globally.",
      gradient: "from-sky-600 to-blue-700"
    },
    {
      icon: <Recycle className="w-14 h-14" />,
      title: "Committed to Sustainability",
      description: "Eco-friendly solutions that reduce waste, conserve resources, and promote a zero-waste future.",
      gradient: "from-blue-700 to-cyan-800"
    },
    {
      icon: <ShieldCheck className="w-14 h-14" />,
      title: "Customer-First Promise",
      description: "Reliable support, transparent communication, and a lifelong commitment to your family’s health.",
      gradient: "from-cyan-700 to-blue-800"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.4 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 80, scale: 0.92 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <>
      {/* Add this once in index.html */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet"> */}

      <section className="relative py-32 lg:py-44 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-cyan-50/40"
               style={{ fontFamily: "'Manrope', sans-serif" }}>
        
        {/* Floating Cyan Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Epic Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20 lg:mb-32"
          >
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-800 bg-clip-text text-transparent leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose SCADE?
            </h2>
            <p className="mt-8 text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              We don’t just make products. We engineer trust, health, and sustainability — 
              <span className="block mt-4 text-cyan-700 font-medium text-2xl">
                One pure drop at a time.
              </span>
            </p>
          </motion.div>

          {/* Premium Cards Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -20, scale: 1.05 }}
                className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl border border-white/50 overflow-hidden transition-all duration-700"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-800 rounded-3xl`} />
                
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.9 }}
                  className="relative z-10 inline-flex items-center justify-center w-28 h-28 rounded-full bg-white shadow-2xl mb-8 ring-8 ring-cyan-100/50"
                >
                  <div className={`absolute inset-3 rounded-full bg-gradient-to-br ${reason.gradient} opacity-25 blur-xl transition-all duration-700 group-hover:opacity-50`} />
                  <div className="relative text-cyan-700 group-hover:text-white transition-colors duration-500">
                    {reason.icon}
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="relative z-10 text-center">
                  <h3 
                    className="text-2xl font-bold text-gray-800 mb-5 group-hover:text-white transition-colors duration-500"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-500 font-light">
                    {reason.description}
                  </p>
                </div>

                {/* Sparkle on Hover */}
                <Sparkles className="absolute top-8 right-8 w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* Final Statement – Pure Luxury */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="text-center mt-32 lg:mt-40"
          >
            <p className="text-2xl lg:text-3xl italic text-cyan-700 font-medium mb-6">
              Precision. Reliability. Advanced Solutions.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Innovating for a Healthier Future — One Drop at a Time.
            </p>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="mt-16 inline-block"
            >
              <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white px-20 py-7 rounded-full text-2xl font-bold shadow-2xl shadow-cyan-500/30">
                This Is Not Just a Product.<br />
                <span className="text-cyan-200">This Is a Promise.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;