import React from 'react';
import { MapPin, Phone, Mail, Leaf, Beaker, Heart, Flag, Recycle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import magmist from '../Asset/demo.mp4';


const About = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#064B39] to-[#0A8A67] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">About SCADE Store-Studio</h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Precision. Reliability. Advanced Solutions.<br />
            Innovating for a Healthier Future.
          </p>
          <p className="mt-8 text-lg italic opacity-90">
            “Water from Air, Health in Every Drop.”
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#064B39] mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Established in 2025 in Mysore, Karnataka, SCADE Store-Studio is more than a company — it’s a movement toward healthier living through responsible innovation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Founded by two visionary families united by trust, compassion, and a shared dream of health innovation, SCADE stands as a symbol of unity and purpose. Our foundation rests on a unique blend of healthcare professionals and engineers, ensuring every innovation is scientifically sound, technologically advanced, and purpose-driven.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We bridge the gap between medical science and technological precision to create products that benefit both people and the planet.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* Image of team/family business */}
            <img
              src="https://ihf-fih.org/wp-content/uploads/2025/03/IHF-RIO-Sept-9th-0557-e1743061756714-480x280.jpg"
              alt="Young professional team blending healthcare and engineering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#F4F4F4] rounded-2xl p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-[#064B39] mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To promote a healthier lifestyle through innovative, sustainable, and scientifically proven technologies that improve daily living while respecting nature’s balance.
            </p>
          </div>
          <div className="bg-[#F4F4F4] rounded-2xl p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-[#064B39] mb-6">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become a global leader in health-oriented technology, delivering reliable solutions that empower communities and inspire sustainable living.
            </p>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#064B39] text-center mb-12">Our Innovative Products</h2>
          
          {/* Magmist */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
  
  {/* Text Section */}
  <div className="order-2 lg:order-1">
    <h3 className="text-3xl font-bold text-[#0A8A67] mb-4">💧 Magmist – The Future of Hydration</h3>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      Our flagship innovation, Magmist is an advanced Atmospheric Water Generator (AWG) that produces clean, natural, 
      and alkaline water directly from the air. It captures moisture, purifies it through multi-stage filtration, 
      and enriches it with essential minerals (pH 8–9.5).
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>Zero water wastage & low power consumption</li>
      <li>Smart sensors for quality monitoring</li>
      <li>Eco-friendly & perfect for emergencies</li>
    </ul>
    <Link 
      to="/magmist" 
      className="mt-6 inline-block bg-[#0A8A67] text-white px-6 py-3 rounded-lg hover:bg-[#064B39] transition"
    >
      Explore Magmist →
    </Link>
  </div>

  {/* Autoplay Video — No Controls, No Pause */}
  <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
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
  </div>

</div>


          {/* Tavarum */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://img.freepik.com/premium-photo/woman-cosmetologist-cosmetics-testing-natural-organic-cosmetics-serum-hair-mask-flat-lay-pastel_296062-38.jpg"
                alt="Tavarum natural organic hair care products"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#C48A6F] mb-4">🌸 Tavarum – Pure Beauty, Naturally</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Tavarum is our premium cosmetics line featuring 100% organic, sulphate-free, and paraben-free hair essentials. Crafted with natural herbs and oils for healthy, beautiful hair.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Nourishing hair oils, serums, and masks</li>
                <li>Chemical-free herbal hair dye</li>
                <li>Promotes growth, reduces greying, and repairs damage</li>
              </ul>
              <Link to="/tavarum" className="mt-6 inline-block bg-[#C48A6F] text-white px-6 py-3 rounded-lg hover:bg-[#b0785f] transition">
                Explore Tavarum →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#064B39] text-center mb-12">Why Choose SCADE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Leaf className="w-12 h-12" />, title: "Scientifically Developed", desc: "Backed by medical and engineering expertise" },
              { icon: <Beaker className="w-12 h-12" />, title: "Precision & Reliability", desc: "Rigorously tested for seamless performance" },
              { icon: <Heart className="w-12 h-12" />, title: "Family-Founded", desc: "Rooted in trust, care, and community wellness" },
              { icon: <Flag className="w-12 h-12" />, title: "Made in India", desc: "Engineered in Mysore for the world" },
              { icon: <Recycle className="w-12 h-12" />, title: "Sustainable", desc: "Eco-friendly and zero-waste focused" },
              { icon: <ShieldCheck className="w-12 h-12" />, title: "Customer-Centric", desc: "Reliable support and transparent service" },
            ].map((item, i) => (
              <div key={i} className="text-center bg-[#F4F4F4] rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="text-[#0A8A67] mb-4 inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#064B39] mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Location */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#064B39] text-center mb-12">Our Home – Mysore, Karnataka</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQr4df78L9xduRaOLv6gdPN8wpwG1M26myFc2H2vOTTmPFSvGNwgulSutVk5Vah1eJAW6j-ODzRw9NdzJaMDqB1uyM&s=19"
                alt="Aerial view of Mysore Palace – the heritage city where SCADE is based"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-[#064B39] mb-8">Visit Us</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-[#0A8A67]" />
                  <div>
                    <p className="text-xl font-semibold">SCADE Store-Studio</p>
                    <p className="text-gray-700">Mysore, Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-8 h-8 text-[#0A8A67]" />
                  <a href="tel:+917411532800" className="text-lg hover:text-[#0A8A67] transition">+91 7411532800</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-8 h-8 text-[#0A8A67]" />
                  <a href="mailto:scade.magmist@gmail.com" className="text-lg hover:text-[#0A8A67] transition">scade.magmist@gmail.com</a>
                </div>
              </div>
              <p className="mt-8 text-gray-700">
                Proudly made in the cultural heart of India — a city of palaces, gardens, and serenity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;