import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../Components/HeroCarousel';
import Innovations from '../Components/Innovation';  // Your existing Innovations page component
import WhyChooseUs from '../Components/whyus';        // Your existing WhyChooseUs component
import Team from '../Components/Team';                  // Your existing Team component
import OurCampus from '../Components/OurCampus';        // Your existing OurCampus component
import { Droplets, Flower2, ShieldCheck, Sparkles, Users, Building2, HeartHandshake, PhoneCall } from 'lucide-react';

const Home = () => {
  // WhatsApp Helper
  const whatsappNumber = "7411532800";
  const getWhatsAppLink = (message) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* All Original Components (as you wanted) */}
      <Innovations />
      <Team />
      <OurCampus />
      <WhyChooseUs />

      {/* Additional Product Quick Preview (Bonus - Clean & Professional) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#064B39] mb-4">
            Explore Our Flagship Products
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Sustainable wellness solutions crafted with precision, science, and care.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Magmist Quick Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-[#064B39] to-[#0A8A67] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                <div className="p-12 text-white">
                  <Droplets className="w-16 h-16 mb-6" />
                  <h3 className="text-4xl font-bold mb-6">Magmist</h3>
                  <p className="text-xl leading-relaxed mb-8 opacity-95">
                    Turn air into pure, alkaline, mineral-rich drinking water — anytime, anywhere.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/magmist"
                      className="bg-white text-[#064B39] px-8 py-4 rounded-full font-bold hover:bg-[#D4AF37] hover:text-white transition shadow-lg"
                    >
                      Discover Magmist →
                    </Link>
                    <a
                      href={getWhatsAppLink("Hi SCADE Team! I'm interested in Magmist AWG. Please share models and pricing.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#064B39] transition flex items-center gap-2"
                    >
                      <PhoneCall className="w-5 h-5" />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tavarum Quick Card */}
            <div className="group">
              <div className="bg-gradient-to-br from-[#C48A6F] to-[#D4AF37]/80 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                <div className="p-12 text-white">
                  <Flower2 className="w-16 h-16 mb-6" />
                  <h3 className="text-4xl font-bold mb-6">Tavarum</h3>
                  <p className="text-xl leading-relaxed mb-8 opacity-95">
                    100% organic hair care — chemical-free, nourishing, and rooted in nature.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/tavarum"
                      className="bg-white text-[#C48A6F] px-8 py-4 rounded-full font-bold hover:bg-[#D4AF37] hover:text-white transition shadow-lg"
                    >
                      Discover Tavarum →
                    </Link>
                    <a
                      href={getWhatsAppLink("Hi SCADE Team! I'm interested in Tavarum organic hair products. Please share the range.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#C48A6F] transition flex items-center gap-2"
                    >
                      <PhoneCall className="w-5 h-5" />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Strong CTA */}
      <section className="py-10 px-4 bg-gradient-to-r from-[#064B39] via-[#0A8A67] to-[#064B39] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Start Your Journey to Better Health & Wellness
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Whether you're looking for pure hydration, natural beauty, or partnership opportunities — we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={getWhatsAppLink("Hello SCADE Team! Coming from your website — excited to know more about Magmist and Tavarum!")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-[#064B39] px-12 py-6 rounded-full text-xl font-bold hover:bg-white transition shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <PhoneCall className="w-6 h-6" />
              Chat on WhatsApp Now
            </a>
            <Link
              to="/contact"
              className="border-4 border-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white hover:text-[#064B39] transition shadow-2xl"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-12 text-lg opacity-80">
            Proudly Made in India • Built for the World
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;