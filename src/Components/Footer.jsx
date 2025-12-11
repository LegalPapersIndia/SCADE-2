// src/components/Footer.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Heart } from 'lucide-react';
import logo from '../Asset/1.png';

const Footer = () => {
  const location = useLocation();
  const isTavarumPage = location.pathname === '/tavarum';

  const bgClass = isTavarumPage
    ? 'bg-gradient-to-t from-amber-50 via-orange-50 to-amber-50 text-amber-900'
    : 'bg-gradient-to-t from-cyan-950 via-blue-950 to-cyan-900 text-white';

  const accentColor = isTavarumPage ? 'amber-600' : 'cyan-400';

  return (
    <>
      <footer className={`relative overflow-hidden ${bgClass} py-16 mt-32`}>
        {/* Subtle Top Glow */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
          isTavarumPage ? 'from-amber-400 via-orange-500 to-amber-400' : 'from-cyan-400 via-blue-500 to-cyan-400'
        }`} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

            {/* Logo + Tagline */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link to="/" className="inline-block mb-6 group">
                  <img 
                    src={logo} 
                    alt="SCADE" 
                    className="h-14 lg:h-16 transition-transform duration-500 group-hover:scale-110" 
                  />
                </Link>

                <p className="text-lg font-light leading-relaxed opacity-90">
                  Precision. Reliability. Advanced Solutions.
                </p>

                <motion.p 
                  className={`mt-6 text-2xl lg:text-3xl font-bold tracking-tight`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className={`bg-gradient-to-r ${
                    isTavarumPage ? 'from-amber-700 to-orange-700' : 'from-cyan-300 to-blue-300'
                  } bg-clip-text text-transparent`}>
                    Water from Air,
                  </span>
                  <br />
                  <span className="text-white/90">Health in Every Drop</span>
                </motion.p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <motion.h3 
                className="text-xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                Explore
              </motion.h3>
              <div className="grid grid-cols-2 gap-3">
                {['Home', 'Magmist', 'Tavarum', 'Team', 'About', 'Contact'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                      className={`block py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:translate-x-2 backdrop-blur-sm`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact + Social */}
            <div className="md:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Let's Connect
                </h3>

                <div className="space-y-4 mb-8">
                  <a href="tel:+917411532800" className="flex items-center gap-4 group">
                    <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition`}>
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-medium">+91 74115 32800</span>
                  </a>

                  <a href="mailto:scade.magmist@gmail.com" className="flex items-center gap-4 group">
                    <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition`}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-medium">scade.magmist@gmail.com</span>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-white/10 backdrop-blur-md`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Mysore, Karnataka</span>
                  </div>
                </div>

                {/* Social Icons - Glowing */}
                <div className="flex gap-4">
                  {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1 }}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl transition-all ${
                        isTavarumPage
                          ? 'bg-gradient-to-br from-amber-500 to-orange-600 hover:shadow-amber-500/50'
                          : `bg-gradient-to-br from-${accentColor} to-blue-500 hover:shadow-${accentColor}/50`
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Final Love Line */}
          <motion.div 
            className="mt-12 pt-8 border-t border-white/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm opacity-80 flex items-center justify-center gap-2">
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </motion.span>
              in Mysore, India • © 2025 SCADE
            </p>
          </motion.div>
        </div>

        {/* Background Accent Glow */}
        <div className={`absolute inset-0 -z-10 opacity-30`}>
          <div className={`absolute top-10 left-10 w-96 h-96 bg-${accentColor}/20 rounded-full blur-3xl`} />
          <div className={`absolute bottom-10 right-10 w-80 h-80 bg-${accentColor}/20 rounded-full blur-3xl`} />
        </div>
      </footer>
    </>
  );
};

export default Footer;