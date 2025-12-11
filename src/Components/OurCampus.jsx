// src/components/OurCampus.jsx
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import campus from '../Asset/Campus.mp4';

const OurCampus = () => {
  return (
    <>
      {/* Google Fonts - Add once in index.html */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet"> */}

      <section className="bg-gradient-to-b from-blue-50/60 via-white to-cyan-50/40"
               style={{ fontFamily: "'Manrope', sans-serif" }}>

        {/* FULLSCREEN VIDEO — NO TEXT OVERLAY AT ALL */}
        <div className="relative w-full h-screen md:h-auto md:aspect-video md:max-h-[700px] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src={campus}
            autoPlay
            muted
            loop
            playsInline
            poster="/campus-poster.jpg"
          />
        </div>

        {/* CONTENT — ALWAYS BELOW VIDEO (safe spacing) */}
        <div className="relative -mt-1 bg-gradient-to-t from-white via-white to-transparent pt-20 md:pt-24 lg:pt-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Main Heading */}
            <div className="text-center mb-12 lg:mb-20">
              <h2 
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-700 via-blue-700 to-cyan-800 bg-clip-text text-transparent leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Campus
              </h2>
              <p className="mt-6 text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                Proudly rooted in the royal heritage city of{' '}
                <span className="text-cyan-700 font-semibold">Mysore, Karnataka</span>
              </p>
            </div>

            <h3 
              className="text-center text-3xl md:text-4xl font-bold text-cyan-800 mb-16"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Discover Our Manufacturing Campus
            </h3>

            {/* Contact + Map Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-100/60 p-10 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                {/* Contact Info */}
                <div className="space-y-10">
                  <h3 
                    className="text-3xl lg:text-4xl font-bold text-cyan-800"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Visit Us in Mysore
                  </h3>

                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-cyan-100 rounded-2xl">
                        <MapPin className="w-8 h-8 text-cyan-700" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-gray-800">SCADE Store-Studio</p>
                        <p className="text-lg text-gray-600 mt-1">Mysore, Karnataka, India</p>
                        <p className="text-sm text-gray-500 mt-3 font-light">
                          In the heart of India's cleanest & most beautiful city
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-cyan-100 rounded-2xl">
                        <Phone className="w-7 h-7 text-cyan-700" />
                      </div>
                      <a href="tel:+917411532800" className="text-xl font-semibold text-gray-800 hover:text-cyan-700 transition">
                        +91 74115 32800
                      </a>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="p-4 bg-cyan-100 rounded-2xl">
                        <Mail className="w-7 h-7 text-cyan-700" />
                      </div>
                      <a href="mailto:scade.magmist@gmail.com" className="text-xl font-semibold text-gray-800 hover:text-cyan-700 transition">
                        scade.magmist@gmail.com
                      </a>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 font-light mt-8 leading-relaxed">
                    We welcome visitors, partners & dealers with open arms. Feel free to connect!
                  </p>
                </div>

                {/* Google Map */}
                <div>
                  <h4 
                    className="text-2xl lg:text-3xl font-bold text-cyan-800 mb-6 text-center lg:text-left"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Locate Us on the Map
                  </h4>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-cyan-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7490.830151330483!2d76.57744829083313!3d12.338137401687996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ba608674ffb%3A0x8b77597257f96abb!2sHousing%20Board%20Colony%2C%20Hootagalli%2C%20Mysuru%2C%20Karnataka%20570018!5e1!3m2!1sen!2sin!4v1764748168877!5m2!1sen!2sin"
                      className="w-full h-96 lg:h-full min-h-96 rounded-2xl"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SCADE Location"
                    ></iframe>
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-4 font-light">
                    Interactive map • Exact pin on request
                  </p>
                </div>
              </div>
            </div>

            {/* Final Line */}
            <div className="text-center mt-20 pb-20">
              <p 
                className="text-4xl lg:text-5xl font-bold text-cyan-800 italic leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Made with care in Mysore
              </p>
              <p 
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent mt-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Innovating for a Healthier World
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default OurCampus;