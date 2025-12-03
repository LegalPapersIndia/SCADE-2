import React from 'react';
import { Link } from 'react-router-dom';
import magmist from '../Asset/demo.mp4'; // Replace with your actual video file path

const Innovations = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-[#064B39] text-center mb-16">
          Our Innovations
        </h1>

        {/* Company Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#064B39] mb-6">About SCADE Store-Studio</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Established in 2025 in Mysore, Karnataka, SCADE Store-Studio is a forward-thinking enterprise built on the principles of <strong>Precision, Reliability, and Advanced Solutions</strong>. Founded by two visionary families — blending healthcare professionals and engineers — we are driven by a mission to innovate for a healthier future.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Our philosophy bridges medical science and technological precision to create sustainable products that enhance human health while protecting the planet. We promote healthier lifestyles through scientifically proven, eco-friendly technologies.
          </p>
          <p className="mt-8 text-xl italic text-[#064B39] font-medium">
            “Water from Air, Health in Every Drop.”
          </p>
        </div>

        {/* Magmist Section - Image Left, Content Right */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-16">
          {/* Left: Magmist Image */}
          <div className="relative h-96 lg:h-auto order-1 lg:order-1">
            <video
                  src={magmist}     // your video URL or imported file
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controls={false}
                  className="w-full h-full object-cover pointer-events-none"
                ></video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="text-white text-2xl font-bold p-8">Magmist – Pure Hydration from Air</p>
            </div>
          </div>

          {/* Right: Magmist Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-2">
            <h3 className="text-3xl font-bold text-[#0A8A67] mb-6 flex items-center gap-3">
              💧 Magmist – The Future of Hydration
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our flagship innovation, Magmist is an advanced Atmospheric Water Generator (AWG) that transforms air into clean, alkaline, mineral-rich drinking water. With zero water wastage, low power consumption, smart sensors, and mineral enrichment (pH 8–9.5), it provides pure hydration sustainably — ideal for homes, offices, and emergencies.
            </p>
            <ul className="text-gray-700 space-y-3 mb-8">
              <li>✅ Turns humidity into drinking water</li>
              <li>✅ Multi-stage purification + mineral enrichment</li>
              <li>✅ Eco-friendly & independent of water sources</li>
              <li>✅ Available in Home & Pro models</li>
            </ul>
            <Link
              to="/magmist"
              className="inline-block bg-[#0A8A67] text-white px-8 py-4 rounded-lg hover:bg-[#064B39] transition shadow-lg text-lg font-medium w-fit"
            >
              Explore Magmist →
            </Link>
          </div>
        </div>

        {/* Tavarum Section - Image Right, Content Left (Reverse Layout) */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Tavarum Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-[#C48A6F] mb-6 flex items-center gap-3">
              🌸 Tavarum – Pure Beauty, Naturally
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tavarum is our premium natural cosmetics line featuring 100% organic, sulphate-free, and paraben-free hair essentials. Crafted with ancient herbal wisdom and modern care, the range nourishes hair from root to tip — promoting growth, reducing greying, and restoring shine without any harmful chemicals.
            </p>
            <ul className="text-gray-700 space-y-3 mb-8">
              <li>✅ 100% Organic & Chemical-Free</li>
              <li>✅ Hair Oil, Serum, Mask & Herbal Dye</li>
              <li>✅ Sulphate-Free, Paraben-Free, Ammonia-Free</li>
              <li>✅ Safe for all hair types & sensitive scalps</li>
            </ul>
            <Link
              to="/tavarum"
              className="inline-block bg-[#C48A6F] text-white px-8 py-4 rounded-lg hover:bg-[#b0785f] transition shadow-lg text-lg font-medium w-fit"
            >
              Explore Tavarum →
            </Link>
          </div>

          {/* Right: Tavarum Image */}
          <div className="relative h-96 lg:h-auto order-1 lg:order-2">
            <img
              src="/images/innovations/tavarum-hero.jpg"  // Replace later with your real photo
              alt="Tavarum Organic Hair Care – Natural beauty products"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="text-white text-2xl font-bold p-8">Tavarum – Beauty from Nature</p>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 font-medium">
            Made in India, Built for the World — Rooted in trust, care, and responsibility.
          </p>
          <p className="mt-6 text-lg text-gray-600">
            We are continuously innovating to bring sustainable, health-focused solutions to every home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Innovations;