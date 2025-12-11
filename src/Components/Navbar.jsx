import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import logo from '../Asset/1.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isTavarumPage = location.pathname === '/tavarum';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Magmist', path: '/magmist' },
    { name: 'Tavarum', path: '/tavarum', comingSoon: true },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ULTRA PREMIUM NAVBAR */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out
          ${
            isTavarumPage
              ? 'bg-gradient-to-b from-amber-50/95 via-[#FAF7F5]/95 to-transparent backdrop-blur-2xl shadow-xl border-b border-amber-200/40'
              : isScrolled
              ? 'bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-gray-200/50'
              : 'bg-white/10 backdrop-blur-2xl border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <Link
              to="/"
              className="group relative flex items-center -ml-2 transition-all duration-500 hover:scale-105"
            >
              <div className={`absolute -inset-4 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                ${isTavarumPage 
                  ? 'bg-gradient-to-r from-amber-400/30 to-[#D4AF37]/30' 
                  : 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20'
                }`} 
              />
              <img
                src={logo}
                alt="SCADE Logo"
                className="relative h-14 lg:h-16 object-contain drop-shadow-2xl transition-all duration-700"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-6 py-4 rounded-full font-medium text-base tracking-wide transition-all duration-500 group overflow-hidden
                      ${
                        isTavarumPage
                          ? active
                            ? 'text-[#8B4513] font-bold'
                            : 'text-[#5D4037] hover:text-[#8B4513]'
                          : active
                          ? 'text-blue-700 font-bold'
                          : 'text-gray-800 hover:text-gray-950'
                      }`}
                  >
                    {/* Active Pill Background */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-500
                        ${
                          active
                            ? isTavarumPage
                              ? 'bg-gradient-to-r from-amber-200/70 to-[#D4AF37]/40 shadow-lg shadow-amber-500/30'
                              : 'bg-gradient-to-r from-emerald-100/80 to-teal-100/60 shadow-lg shadow-emerald-500/30'
                            : 'bg-transparent group-hover:bg-gray-100/60'
                        }`}
                    />

                    {/* Text + Badge */}
                    <span className="relative flex items-center gap-3">
                      {item.name}
                      {item.comingSoon && (
                        <span className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full animate-pulse shadow-md
                          ${isTavarumPage 
                            ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-white' 
                            : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                          }`}>
                          <Sparkles size={12} />
                          Coming Soon
                        </span>
                      )}
                    </span>

                    {/* Active Underline */}
                    {active && (
                      <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-1 rounded-full blur-sm animate-pulse
                        ${isTavarumPage ? 'bg-[#D4AF37] shadow-[#D4AF37]/60' : 'bg-blue-200 shadow-[#0A8A67]/60'}`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative p-3 rounded-2xl transition-all duration-300 overflow-hidden group
                ${isTavarumPage 
                  ? 'text-[#8B4513] hover:bg-amber-100' 
                  : isScrolled 
                    ? 'text-gray-800 hover:bg-gray-100' 
                    : 'text-gray-700 hover:bg-white/20'
                }`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                ${isTavarumPage ? 'bg-gradient-to-br from-amber-400/10 to-[#D4AF37]/10' : 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10'}`}
              />
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-700 ease-out pointer-events-none
            ${isMobileMenuOpen ? 'bg-black/40 backdrop-blur-sm pointer-events-auto' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`fixed top-20 lg:top-24 left-0 right-0 z-50 transition-all duration-700 ease-out
            ${isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-full opacity-0 pointer-events-none'
            }`}
        >
          <div className={`mx-4 rounded-3xl overflow-hidden shadow-2xl border
            ${isTavarumPage 
              ? 'bg-gradient-to-br from-amber-50/98 via-[#FAF7F5] to-amber-50/95 border-amber-200' 
              : 'bg-white/98 backdrop-blur-2xl border-gray-200/50'
            }`}>
            <div className="p-8 space-y-3">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full px-8 py-6 rounded-2xl text-2xl font-semibold transition-all duration-300 group relative overflow-hidden
                      ${isTavarumPage
                        ? active
                          ? 'bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white shadow-2xl'
                          : 'text-[#8B4513] hover:bg-amber-100'
                        : active
                          ? 'bg-gradient-to-r from-blue-300 to-blue-500 text-white shadow-2xl'
                          : 'text-gray-800 hover:bg-gray-100'
                      }`}
                  >
                    <span className="relative flex items-center justify-between">
                      {item.name}
                      {item.comingSoon && (
                        <span className={`flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-full
                          ${isTavarumPage 
                            ? 'bg-gradient-to-r from-[#D4AF37] to-amber-600 text-white' 
                            : 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                          }`}>
                          <Sparkles size={16} className="animate-pulse" />
                          Coming Soon
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <div className="h-20 lg:h-24" />
    </>
  );
};

export default Navbar;