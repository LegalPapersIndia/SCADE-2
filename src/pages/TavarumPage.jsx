import React from 'react';
import { Link } from 'react-router-dom';
import { Flower, Sparkles, ShieldCheck, Leaf, Droplet, Heart } from 'lucide-react';

const Tavarum = () => {
  // ====== EASY-TO-CHANGE IMAGE URLs ======
  // Just replace these URLs with your actual product photos later
  // Total 5 images: One hero flat-lay + one per product

  const heroImage = '/images/tavarum/hero-flat-lay.jpg'; // Main hero image of all products
  const hairOilImage = '/images/tavarum/hair-oil.jpg';
  const hairSerumImage = '/images/tavarum/hair-serum.jpg';
  const hairMaskImage = '/images/tavarum/hair-mask.jpg';
  const hairDyeImage = '/images/tavarum/hair-dye.jpg';

  // Your WhatsApp Number (change if needed)
  const whatsappNumber = "7411532800"; // Without +91, as WhatsApp handles it

  // Function to generate WhatsApp link with product-specific message
  const getWhatsAppLink = (productName) => {
    const message = `Hello SCADE Team!\nI'm interested in ${productName} from Tavarum range.\nCan you please share details, pricing, and availability?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#F5E7E4]">
      {/* Hero Section - Soft Pink Gradient */}
      <section className="bg-gradient-to-br from-[#F5E7E4] to-[#C48A6F] text-[#333333] py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-playfair">Tavarum – Pure Beauty, Naturally</h1>
            <p className="text-xl lg:text-2xl max-w-2xl leading-relaxed mb-8">
              Organic, Sulphate-Free, Paraben-Free hair essentials crafted with nature's finest ingredients for nourished, vibrant hair.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href={getWhatsAppLink("Tavarum Hair Oil")} className="bg-[#C48A6F] text-white px-6 py-3 rounded-lg hover:bg-[#D4AF37] transition shadow-md">
                Shop Hair Oil
              </a>
              <a href={getWhatsAppLink("Tavarum Hair Serum")} className="bg-[#C48A6F] text-white px-6 py-3 rounded-lg hover:bg-[#D4AF37] transition shadow-md">
                Shop Hair Serum
              </a>
              <a href={getWhatsAppLink("Tavarum Hair Mask")} className="bg-[#C48A6F] text-white px-6 py-3 rounded-lg hover:bg-[#D4AF37] transition shadow-md">
                Shop Hair Mask
              </a>
              <a href={getWhatsAppLink("Tavarum Hair Dye")} className="bg-[#C48A6F] text-white px-6 py-3 rounded-lg hover:bg-[#D4AF37] transition shadow-md">
                Shop Hair Dye
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Flat-lay of Tavarum organic hair care products"
              className="w-full h-auto object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#C48A6F] mb-8 font-playfair">Discover Tavarum</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Tavarum is SCADE's premium natural cosmetics line, blending ancient herbal wisdom with modern science. Our 100% organic, chemical-free products are designed to nourish your hair from root to tip, promoting growth, reducing greying, and restoring shine without harsh ingredients. Sulphate-free, paraben-free, and eco-friendly — beauty that cares for you and the planet.
          </p>
        </div>
      </section>

      {/* Product Grid - 4 Products with 1 Image Each */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#C48A6F] text-center mb-12 font-playfair">Our Tavarum Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hair Oil */}
            <div id="hair-oil" className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img
                src={hairOilImage}
                alt="Tavarum Organic Hair Oil"
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#C48A6F] mb-3 font-playfair">Hair Oil</h3>
                <p className="text-gray-700 mb-4">Nourishing blend of natural herbs and oils that promotes hair growth, reduces premature greying, and adds shine.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>🌿 100% Organic Ingredients</li>
                  <li>💧 Deep Hydration & Scalp Health</li>
                  <li>✨ Reduces Frizz & Split Ends</li>
                </ul>
                <a
                  href={getWhatsAppLink("Tavarum Hair Oil")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[#D4AF37] text-white px-4 py-2 rounded-lg hover:bg-[#C48A6F] transition"
                >
                  Buy Now on WhatsApp
                </a>
              </div>
            </div>

            {/* Hair Serum */}
            <div id="hair-serum" className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img
                src={hairSerumImage}
                alt="Tavarum Smoothing Hair Serum"
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#C48A6F] mb-3 font-playfair">Hair Serum</h3>
                <p className="text-gray-700 mb-4">Lightweight serum for instant smoothness, frizz control, and protection against heat and environmental damage.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>🌸 Silky Smooth Finish</li>
                  <li>🛡️ Heat Protectant</li>
                  <li>💖 Adds Gloss & Strength</li>
                </ul>
                <a
                  href={getWhatsAppLink("Tavarum Hair Serum")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[#D4AF37] text-white px-4 py-2 rounded-lg hover:bg-[#C48A6F] transition"
                >
                  Buy Now on WhatsApp
                </a>
              </div>
            </div>

            {/* Hair Mask */}
            <div id="hair-mask" className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img
                src={hairMaskImage}
                alt="Tavarum Repairing Hair Mask"
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#C48A6F] mb-3 font-playfair">Hair Mask</h3>
                <p className="text-gray-700 mb-4">Deep-conditioning mask that repairs damaged hair, restores moisture, and enhances overall hair health.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>🧴 Intensive Repair Formula</li>
                  <li>🌿 Herbal Infusions for Strength</li>
                  <li>💦 Locks in Hydration</li>
                </ul>
                <a
                  href={getWhatsAppLink("Tavarum Hair Mask")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[#D4AF37] text-white px-4 py-2 rounded-lg hover:bg-[#C48A6F] transition"
                >
                  Buy Now on WhatsApp
                </a>
              </div>
            </div>

            {/* Hair Dye */}
            <div id="hair-dye" className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img
                src={hairDyeImage}
                alt="Tavarum Natural Herbal Hair Dye"
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#C48A6F] mb-3 font-playfair">Hair Dye</h3>
                <p className="text-gray-700 mb-4">Chemical-free herbal dye that colors hair naturally while nourishing and conditioning for long-lasting results.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>🎨 Natural Color Coverage</li>
                  <li>🚫 No Ammonia or Chemicals</li>
                  <li>🌱 Safe for All Hair Types</li>
                </ul>
                <a
                  href={getWhatsAppLink("Tavarum Hair Dye")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-[#D4AF37] text-white px-4 py-2 rounded-lg hover:bg-[#C48A6F] transition"
                >
                  Buy Now on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-[#F5E7E4] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#C48A6F] text-center mb-12 font-playfair">Why Choose Tavarum?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-12 h-12" />, title: "100% Organic", desc: "Sourced from nature's purest ingredients" },
              { icon: <ShieldCheck className="w-12 h-12" />, title: "Chemical-Free", desc: "No sulphates, parabens, or harsh additives" },
              { icon: <Flower className="w-12 h-12" />, title: "Herbal Blends", desc: "Ancient wisdom for modern beauty" },
              { icon: <Sparkles className="w-12 h-12" />, title: "Eco-Friendly", desc: "Sustainable packaging & production" },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-lg text-center hover:scale-105 transition duration-300">
                <div className="text-[#D4AF37] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#C48A6F] mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#C48A6F] mb-12 font-playfair">Benefits of Natural Hair Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 bg-[#F5E7E4] rounded-xl shadow-md">
              <Droplet className="w-10 h-10 text-[#C48A6F] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Deep Nourishment</h3>
              <p className="text-gray-700">Restores moisture and vitality for healthier, stronger hair.</p>
            </div>
            <div className="p-6 bg-[#F5E7E4] rounded-xl shadow-md">
              <Heart className="w-10 h-10 text-[#C48A6F] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Gentle & Safe</h3>
              <p className="text-gray-700">Suitable for all hair types, including sensitive scalps.</p>
            </div>
            <div className="p-6 bg-[#F5E7E4] rounded-xl shadow-md">
              <Sparkles className="w-10 h-10 text-[#C48A6F] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Visible Results</h3>
              <p className="text-gray-700">Reduces damage, enhances shine, and promotes long-term hair health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C48A6F] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 font-playfair">Embrace Natural Beauty</h2>
          <p className="text-xl mb-8">Contact us for product details, pricing, or to become a dealer.</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in Tavarum products. Can you share more details?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#C48A6F] transition text-lg font-medium"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Tavarum;