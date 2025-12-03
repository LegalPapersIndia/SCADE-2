import React from 'react';
import { Droplets, Zap, Brain, Shield, Home, Recycle } from 'lucide-react';
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
import mm5 from '../Asset/mm5.jpg';
import mm6 from '../Asset/mm6.jpg';
// WhatsApp Number (change if needed)
const whatsappNumber = "7411532800";

// Helper function for WhatsApp links
const getWhatsAppLink = (model) => {
  const message = `Hello SCADE Team!\nI'm interested in the *${model}* model of Magmist.\n\nCould you please share:\n• Pricing\n• Detailed specifications\n• Demo availability\n• Dealership opportunities\n\nThank you!`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const Magmist = () => {
  // ====== EASY-TO-CHANGE IMAGE URLs ======
  // Replace these with your actual photos later
  const magmistHomeImages = [
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
    m8,
  ];

  const magmistProImages = [
    mm1,
    mm2,
    mm3,
    mm4,
    mm5,
    mm6,
  ];

  const howItWorksImages = [
    '/images/how-it-works/1.jpg',
    '/images/how-it-works/2.jpg',
    '/images/how-it-works/3.jpg',
  ];

  const healthBenefitsImages = [
    '/images/health-benefits/1.jpg',
    '/images/health-benefits/2.jpg',
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#064B39] to-[#0A8A67] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Magmist – The Future of Hydration</h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Advanced Atmospheric Water Generator (AWG) that transforms air into clean, alkaline, mineral-rich drinking water.
          </p>
          <p className="text-lg italic opacity-90 mb-10">
            “Water from Air, Health in Every Drop.”
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={getWhatsAppLink("Magmist Home")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A8A67] hover:bg-white hover:text-[#064B39] text-white px-8 py-4 rounded-lg transition text-lg font-medium shadow-lg"
            >
              Enquire Magmist Home
            </a>
            <a
              href={getWhatsAppLink("Magmist Pro")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A8A67] hover:bg-white hover:text-[#064B39] text-white px-8 py-4 rounded-lg transition text-lg font-medium shadow-lg"
            >
              Enquire Magmist Pro
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Magmist captures moisture from the atmosphere, purifies it through a multi-stage filtration system, and enriches it with essential minerals — delivering pure, healthy water with a pH of 8–9.5. Zero wastage, low energy, and independent operation make it perfect for homes, offices, and emergencies.
          </p>
        </div>
      </section>

      {/* Magmist Home Section */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#064B39] text-center mb-12">Magmist Home – Compact Countertop Model</h2>
          <p className="text-center text-gray-700 mb-8">
            Ideal for homes and small offices • Plug-and-play • Daily capacity: Up to 20-30 liters*
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {magmistHomeImages.map((src, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <img
                  src={src}
                  alt={`Magmist Home - View ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Buy Now Button */}
          <div className="text-center">
            <a
              href={getWhatsAppLink("Magmist Home")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0A8A67] text-white px-10 py-4 rounded-lg hover:bg-[#064B39] transition text-xl font-semibold shadow-lg"
            >
              Buy Magmist Home on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Magmist Pro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#064B39] text-center mb-12">Magmist Pro – High-Capacity Model</h2>
          <p className="text-center text-gray-700 mb-8">
            Perfect for offices, schools, hospitals & larger families • Higher output • Advanced features • Daily capacity: Up to 50-100 liters*
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {magmistProImages.map((src, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <img
                  src={src}
                  alt={`Magmist Pro - View ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Buy Now Button */}
          <div className="text-center">
            <a
              href={getWhatsAppLink("Magmist Pro")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0A8A67] text-white px-10 py-4 rounded-lg hover:bg-[#064B39] transition text-xl font-semibold shadow-lg"
            >
              Buy Magmist Pro on WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-[#F4F4F4] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#064B39] text-center mb-12">Why Magmist is a Game-Changer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Droplets className="w-12 h-12" />, title: "Turns Air into Water", desc: "Endless supply from atmospheric moisture" },
              { icon: <Recycle className="w-12 h-12" />, title: "Zero Water Wastage", desc: "Unlike RO systems – conserves every drop" },
              { icon: <Zap className="w-12 h-12" />, title: "Low Power Consumption", desc: "Eco-friendly and cost-effective" },
              { icon: <Brain className="w-12 h-12" />, title: "Smart Technology", desc: "Sensors monitor humidity, temperature & quality" },
              { icon: <Shield className="w-12 h-12" />, title: "Mineral & Alkaline Enrichment", desc: "pH 8–9.5 with calcium, magnesium & antioxidants" },
              { icon: <Home className="w-12 h-12" />, title: "Plug-and-Play", desc: "No plumbing required" },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="text-[#0A8A67] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#064B39] mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#064B39] mb-12">How Magmist Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksImages.map((src, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                <img src={src} alt={`Step ${index + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16 bg-[#F4F4F4] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#064B39] mb-12">Health Benefits of Magmist Alkaline Water</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="text-left text-lg text-gray-700 space-y-4">
                <li>⚖️ Balances body pH & supports metabolic health</li>
                <li>💪 Rich in calcium & magnesium for bone & heart health</li>
                <li>🧽 Aids detoxification & kidney function</li>
                <li>🏃 Boosts energy, endurance & cellular hydration</li>
                <li>🧘 Reduces stress & fatigue</li>
                <li>🌸 Promotes clear, glowing skin</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {healthBenefitsImages.map((src, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                  <img src={src} alt={`Health Visual ${index + 1}`} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#064B39] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready for Pure Hydration?</h2>
          <p className="text-xl mb-8">Contact us for pricing, demos, or dealership opportunities.</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in Magmist AWG models. Please share full details, pricing, and options.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0A8A67] text-white px-10 py-5 rounded-lg hover:bg-white hover:text-[#064B39] transition text-xl font-semibold shadow-xl"
          >
            Chat on WhatsApp Now →
          </a>
          <p className="mt-6 text-sm opacity-80">*Capacity depends on humidity & temperature</p>
        </div>
      </section>
    </div>
  );
};

export default Magmist;