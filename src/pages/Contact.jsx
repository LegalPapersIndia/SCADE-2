// pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Building, Sparkles, HeartHandshake } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // ←←←← YAHAN APNA EMAIL DAAL DO (jahan saare leads aayenge) ←←←←
  const YOUR_EMAIL = "udit9407@gmail.com";   // ← CHANGE THIS LINE

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Name, Email aur Message bharna zaroori hai!");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${YOUR_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject: formData.subject || "General Inquiry",
          message: formData.message,
          _subject: "New Message from SCADE Contact Page",
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('Thanks For Your Message ');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      setSubmitStatus('Thodi si problem hui. Thodi der baad try karein ya WhatsApp kar dein: 7411532800');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/60 via-white to-cyan-50/40 overflow-hidden"
      style={{fontFamily: 'Manrope sans-serif' }}
    >

      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <h1 className="text-6xl lg:text-8xl font-bold text-cyan-800 mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Let’s Connect
          </h1>
          <p className="text-2xl lg:text-3xl text-cyan-700 font-light max-w-4xl mx-auto leading-relaxed">
            We’re here for you — whether it’s about Magmist, Tavarum, dealership, collaboration, or just a hello from a fellow wellness believer.
          </p>
          <div className="flex justify-center gap-6 mt-10">
            <Sparkles className="w-10 h-10 text-cyan-500 animate-pulse" />
            <Sparkles className="w-8 h-8 text-cyan-600 animate-pulse delay-300" />
            <Sparkles className="w-10 h-10 text-cyan-500 animate-pulse delay-700" />
          </div>
        </motion.div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-100 p-10 lg:p-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-cyan-800 mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h2>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-800">Our Home</h3>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    SCADE Store-Studio<br />
                    Housing Board Colony, Hootagalli<br />
                    <span className="font-medium text-cyan-700">Mysore, Karnataka 570018</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-800">Call or WhatsApp</h3>
                  <a href="tel:+917411532800" className="text-lg text-cyan-700 font-medium">+91 74115 32800</a>
                  <p className="text-sm text-gray-600 mt-1">
                    <a href="https://wa.me/917411532800" target="_blank" className="text-cyan-600 underline">Chat on WhatsApp</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-800">Email Us</h3>
                  <a href="mailto:scade.magmist@gmail.com" className="text-lg text-cyan-700">scade.magmist@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-800">We’re Available</h3>
                  <p className="text-gray-700">Mon – Sat: 9:00 AM – 6:00 PM IST</p>
                  <p className="text-sm text-gray-600 mt-1">Replies within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
              <p className="text-cyan-800 font-medium text-center text-lg">
                Looking for <span className="font-bold">Dealership</span> or <span className="font-bold">Collaboration</span>?<br />
                We’re growing — and we’d love to grow with you.
              </p>
            </div>
          </motion.div>

          {/* Right: Form (WhatsApp removed – only Email) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-100 p-10 lg:p-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-cyan-800 mb-10"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50 transition"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-6 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50 transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-6 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50 transition"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject (e.g. Dealership, Demo)"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50 transition"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your message... We're excited to hear from you"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-2xl border border-cyan-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/50 transition resize-none"
              ></textarea>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-5 bg-gradient-to-r from-green-100 to-cyan-100 text-green-800 rounded-2xl text-center font-medium border border-green-200"
                >
                  {submitStatus}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all flex items-center justify-center gap-4 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send className="w-6 h-6" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-cyan-50/60">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-cyan-800 mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Proudly from Mysore, Karnataka
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="rounded-3xl overflow-hidden shadow-2xl border-8 border-cyan-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7490.830151330483!2d76.57744829083313!3d12.338137401687996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ba608674ffb%3A0x8b77597257f96abb!2sHousing%20Board%20Colony%2C%20Hootagalli%2C%20Mysuru%2C%20Karnataka%20570018!5e1!3m2!1sen!2sin!4v1764748168877!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            <div className="text-left">
              <h3 className="text-4xl font-bold text-cyan-800 mb-6">Made in Mysore, Made for the World</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey began in the clean, green, and culturally rich city of Mysore — the city of palaces, yoga, and pure living. 
                Every Magmist unit, every dream of Tavarum, and every drop of pure water we create carries the soul of this beautiful land.
              </p>
              <p className="text-lg text-gray-700 mt-6 font-medium text-cyan-700">
                Visit us anytime. The door (and our hearts) are always open.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-cyan-700 via-blue-800 to-cyan-900 text-white">
        <motion.div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl lg:text-8xl font-bold mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Let’s Build the Future Together
          </h2>
          <p className="text-2xl lg:text-3xl font-light opacity-95 mb-12">
            One home. One drop. One healthier India.
          </p>
          <a
            href="https://wa.me/7411532800"
            target="_blank"
            className="inline-flex items-center gap-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-16 py-8 rounded-full text-2xl font-bold shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition"
          >
            <HeartHandshake className="w-10 h-10" />
            Start the Conversation
            <Sparkles className="w-10 h-10" />
          </a>
          <p className="mt-12 text-xl opacity-80 italic">
            Proudly Made in <span className="font-bold text-cyan-300">Mysore, Karnataka</span> • With Love, Science & Soul
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;