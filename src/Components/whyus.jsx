import React from 'react';
import { Leaf, Beaker, Flag, Recycle, Heart, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Leaf className="w-10 h-10 text-[#0A8A67]" />,
      title: 'Scientifically Developed',
      description: 'Designed with combined expertise of healthcare professionals and engineers for proven health benefits.',
    },
    {
      icon: <Beaker className="w-10 h-10 text-[#0A8A67]" />,
      title: 'Precision & Reliability',
      description: 'Every product is crafted with scientific accuracy, rigorously tested, and built to perform seamlessly.',
    },
    {
      icon: <Heart className="w-10 h-10 text-[#0A8A67]" />,
      title: 'Family-Founded, Value-Driven',
      description: 'Rooted in trust, care, compassion, and a shared passion for community wellness.',
    },
    {
      icon: <Flag className="w-10 h-10 text-[#0A8A67]" />,
      title: 'Made in India, Built for the World',
      description: 'Engineered with pride in Mysore, Karnataka, delivering world-class innovation globally.',
    },
    {
      icon: <Recycle className="w-10 h-10 text-[#0A8A67]" />,
      title: 'Committed to Sustainability',
      description: 'Eco-friendly solutions that reduce waste, conserve resources, and promote a zero-waste future.',
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#0A8A67]" />,
      title: 'Customer-Centric Service',
      description: 'Reliable after-sales support, transparent communication, and a focus on your well-being.',
    },
  ];

  return (
    <section className="py-16 bg-[#F4F4F4] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#064B39] mb-4">
            Why Choose SCADE?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We combine medical science, advanced engineering, and a deep commitment to health and sustainability to deliver solutions you can trust.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0A8A67]/10 rounded-full mb-6 group-hover:bg-[#bfd2cd] group-hover:text-white transition">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-[#064B39] mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Tagline */}
        <div className="text-center mt-12">
          <p className="text-2xl italic text-[#064B39] font-medium">
            Precision. Reliability. Advanced Solutions.
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Innovating for a Healthier Future — One Drop at a Time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;