import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import logo from '../Asset/1.png';

const Footer = () => {
  return (
    <footer className="bg-[#064B39] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold tracking-wider mb-2">
                <img src={logo} alt="SCADE Logo" className="w-32 h-auto mb-2" />
            </h2>
            <p className="text-sm opacity-80 leading-relaxed max-w-md">
              Precision. Reliability. Advanced Solutions.<br />
              Innovating for a Healthier Future.
            </p>
            <p className="mt-4 text-sm italic opacity-90">
              “Water from Air, Health in Every Drop.”
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-[#0A8A67] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0A8A67] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/magmist" className="hover:text-[#0A8A67] transition">
                  Magmist
                </Link>
              </li>
              <li>
                <Link to="/tavarum" className="hover:text-[#0A8A67] transition">
                  Tavarum
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#0A8A67] transition">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0A8A67] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>SCADE Store-Studio</p>
                  <p>Mysore, Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+917411532800" className="hover:text-[#0A8A67] transition">
                  +91 7411532800
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:scade.magmist@gmail.com" className="hover:text-[#0A8A67] transition">
                  scade.magmist@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media (Coming Soon) */}
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A8A67] transition"
                  aria-label="Instagram (Coming Soon)"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A8A67] transition"
                  aria-label="Facebook (Coming Soon)"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0A8A67] transition"
                  aria-label="LinkedIn (Coming Soon)"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs mt-2 opacity-70">Social Media: Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm opacity-80">
          <p>
            © 2025 SCADE Store-Studio. All rights reserved. | Made with care in Mysore, India
          </p>
          <p className="mt-2">
            Reach out for product inquiries, collaborations, or dealership opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;