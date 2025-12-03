import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Building } from 'lucide-react';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // WhatsApp Number
    const whatsappNumber = "7411532800";

    // Construct WhatsApp message with form details
    const whatsappMessage = `
*New Inquiry from SCADE Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Subject:* ${formData.subject || 'General Inquiry'}

*Message:*
${formData.message}

We look forward to responding!
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp (mobile) or WhatsApp Web (desktop)
    window.open(whatsappURL, '_blank');

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Thank you! Your message has been sent via WhatsApp. We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#064B39] to-[#0A8A67] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            We’d love to hear from you!<br />
            Reach out for product inquiries, collaborations, dealership opportunities, or any questions.
          </p>
          <p className="mt-6 text-lg italic opacity-90">
            Together, let’s create a world where every drop supports better living.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-[#064B39] mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#0A8A67]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-[#0A8A67]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#064B39]">Our Office</h3>
                  <p className="text-gray-700 mt-2">
                    SCADE Store-Studio<br />
                    Mysore, Karnataka<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#0A8A67]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#0A8A67]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#064B39]">Phone</h3>
                  <a href="tel:+917411532800" className="text-lg text-gray-700 hover:text-[#0A8A67] transition">
                    +91 7411532800
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Direct WhatsApp →</strong>{' '}
                    <a href="https://wa.me/917411532800" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#0A8A67]">
                      Chat Now
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#0A8A67]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#0A8A67]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#064B39]">Email</h3>
                  <a href="mailto:scade.magmist@gmail.com" className="text-lg text-gray-700 hover:text-[#0A8A67] transition">
                    scade.magmist@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#0A8A67]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#0A8A67]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#064B39]">Business Hours</h3>
                  <p className="text-gray-700">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
                  <p className="text-gray-600 text-sm">We respond to inquiries within 24-48 hours.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#F4F4F4] rounded-xl">
              <p className="text-gray-700">
                Interested in <strong>dealership opportunities</strong> or <strong>collaborations</strong>? We’re expanding and welcome partners who share our vision for health and sustainability.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-[#064B39] mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A8A67] focus:border-transparent transition"
                  placeholder="Your Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A8A67] focus:border-transparent transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A8A67] focus:border-transparent transition"
                    placeholder="+91 __________"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A8A67] focus:border-transparent transition"
                  placeholder="e.g., Product Inquiry, Dealership, Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A8A67] focus:border-transparent transition"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {submitStatus && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium">
                  {submitStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0A8A67] text-white py-4 rounded-lg hover:bg-[#064B39] transition flex items-center justify-center gap-3 text-lg font-medium shadow-md disabled:opacity-70"
              >
                {isSubmitting ? (
                  'Opening WhatsApp...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#064B39] text-center mb-12">Our Location – Mysore, Karnataka</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7490.830151330483!2d76.57744829083313!3d12.338137401687996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ba608674ffb%3A0x8b77597257f96abb!2sHousing%20Board%20Colony%2C%20Hootagalli%2C%20Mysuru%2C%20Karnataka%20570018!5e1!3m2!1sen!2sin!4v1764748168877!5m2!1sen!2sin"
                width_syntax
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SCADE Store-Studio Location in Mysore"
              ></iframe>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#064B39] mb-6">Proudly Based in Mysore</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our headquarters is located in the serene and culturally rich city of Mysore, known as the cultural capital of Karnataka. Famous for its palaces, gardens, and clean environment, Mysore inspires our commitment to health, wellness, and sustainability.
              </p>
              <p className="text-gray-700">
                Visit us to explore Magmist, learn about Tavarum, or discuss partnership opportunities. We look forward to welcoming you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;