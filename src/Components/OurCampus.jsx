import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import campus from '../Asset/Campus.mp4';

const OurCampus = () => {
  return (
    <section className="py-16 bg-[#F4F4F4] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#064B39] mb-4">
            Our Campus
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Proudly based in the beautiful heritage city of Mysore, Karnataka — a place known for its rich culture, cleanliness, and serene environment. Our operations are rooted in this inspiring location, driving innovation in health and wellness.
          </p>
        </div>

        {/* Video Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#0A8A67] text-center mb-6">
            Discover Manufacturing campus
          </h3>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full min-h-96 lg:min-h-[500px]"
              src={campus}
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controls={false}
              allowFullScreen
            ></video>
          </div>
        </div>

        {/* Address & Contact Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Details */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#064B39] mb-6">
              Visit Us in Mysore
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-[#0A8A67] flex-shrink-0" />
                <div>
                  <p className="text-xl font-semibold text-gray-800">SCADE Store-Studio</p>
                  <p className="text-gray-600">Mysore, Karnataka, India</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Nestled in the heart of Mysore — a city renowned for its palaces, gardens, and vibrant heritage.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-[#0A8A67] flex-shrink-0" />
                <a href="tel:+917411532800" className="text-lg text-gray-800 hover:text-[#0A8A67] transition">
                  +91 7411532800
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8 text-[#0A8A67] flex-shrink-0" />
                <a href="mailto:scade.magmist@gmail.com" className="text-lg text-gray-800 hover:text-[#0A8A67] transition">
                  scade.magmist@gmail.com
                </a>
              </div>
            </div>

            <p className="mt-8 text-gray-700">
              We’d love to hear from you! Reach out for product inquiries, collaborations, or dealership opportunities.
            </p>
          </div>

          {/* Embedded Google Map */}
          <div>
            <h4 className="text-xl font-bold text-[#064B39] mb-4">
              Locate Us on the Map
            </h4>
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7490.830151330483!2d76.57744829083313!3d12.338137401687996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ba608674ffb%3A0x8b77597257f96abb!2sHousing%20Board%20Colony%2C%20Hootagalli%2C%20Mysuru%2C%20Karnataka%20570018!5e1!3m2!1sen!2sin!4v1764748168877!5m2!1sen!2sin"
              className="w-full h-96 rounded-xl border-0 shadow-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SCADE Store-Studio Location in Mysore"
            ></iframe>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Interactive map of Mysore city center (exact office coordinates available on request)
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <p className="text-center text-xl italic text-[#064B39] font-medium mt-12">
          Made with care in Mysore — Innovating for a Healthier World.
        </p>
      </div>
    </section>
  );
};

export default OurCampus;