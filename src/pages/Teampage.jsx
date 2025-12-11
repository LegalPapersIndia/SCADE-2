import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Stethoscope, Wrench, Sparkles, Home, HeartHandshake, 
  Quote, ChevronDown, ChevronUp, Heart 
} from "lucide-react";

const Team = () => {
  const [expanded, setExpanded] = useState(null);

  const teamMembers = [
    {
      name: "Dr. Chinmai V S (PT)",
      role: "Managing Director",
      qualifications: "PT, CTTS, CIASTMT, CDNT, CAFPCT, OMT",
      background: "Clinical expert in advanced physiotherapy, manual therapy, dry needling, and functional rehab.",
      contributions: "Dr. Chinmai drives SCADE’s product vision by merging medical intelligence with engineering innovation. She leads scientific validation, oversees product testing, and builds strategic alliances that shape Magmist’s health-first technology.",
      bio: "A new-age health innovator from Mysore, Dr. Chinmai brings 10+ years of clinical experience into the world of consumer tech. She founded SCADE to make science-led wellness accessible through smart products. She is passionate about community health, young talent mentorship, and building solutions that elevate everyday living.",
      quote: "Innovation begins with understanding human health",
      image: "https://via.placeholder.com/600x600/0891b2/ffffff?text=Dr.+Chinmai",
      color: "from-cyan-500 to-blue-600",
      icon: Stethoscope
    },
    {
      name: "Deekshi P",
      role: "Technical Head",
      qualifications: "Mechatronics Engineer",
      background: "Specialized in mechatronics, 3D design, CAD modeling, sensor systems, and Arduino programming.",
      contributions: "Deekshi architected the core technology behind Magmist. He leads hardware engineering, system optimization, sensor integration, and performance validation. His focus is to create devices that are energy-efficient, reliable, and future-ready.",
      bio: "A builder at heart, Deekshi blends engineering discipline with creative problem-solving. His interest in robotics and automation fuels SCADE’s push toward intelligent, sustainable water tech.",
      quote: "Turning ideas into intelligent, sustainable systems.",
      image: "https://via.placeholder.com/600x600/0e7490/ffffff?text=Deekshi",
      color: "from-blue-600 to-cyan-700",
      icon: Wrench
    },
    {
      name: "Samartha V S",
      role: "Marketing Head",
      qualifications: "Diploma in Fire and Safety, Aeronautical, and Marine Engineering, NEBOSH",
      background: "Engineering-driven marketer with expertise in Fire & Safety, Aeronautical, and Marine Engineering.",
      contributions: "Samartha leads brand strategy, digital campaigns, market expansion, and consumer storytelling. He translates Magmist’s technical advantages into compelling narratives that resonate across homes, businesses, and communities.",
      bio: "A dynamic communicator, Samartha brings structure, creativity, and analytical thinking to SCADE’s marketing. He is passionate about educating people on sustainable hydration and building a brand that stands for trust, innovation, and wellness.",
      quote: "Connecting innovation with the people who need it.",
      image: "https://via.placeholder.com/600x600/0369a1/ffffff?text=Samartha",
      color: "from-cyan-600 to-sky-700",
      icon: Sparkles
    },
    {
      name: "Anuradha D R",
      role: "Finance & Operations",
      background: "Strong foundation in family and resource management with a deep interest in health-focused lifestyles.",
      contributions: "Anuradha steers SCADE’s financial ecosystem—budgeting, investments, vendor management, and long-term planning. She ensures transparency, stability, and smart allocation of resources.",
      bio: "As a guiding force behind the company, Anuradha brings balance, financial discipline, and ethical leadership. Her belief in sustainable living aligns with SCADE’s mission.",
      quote: "Strong values build strong organizations.",
      image: "https://via.placeholder.com/600x600/0891b2/ffffff?text=Anuradha",
      color: "from-teal-500 to-cyan-600",
      icon: Home
    },
    {
      name: "Savitha",
      role: "Finance & Administration",
      background: "A community-driven leader passionate about supporting innovations that uplift essential resources like clean water.",
      contributions: "Savitha manages budgeting, audits, and financial forecasting. She maintains investor confidence, optimizes expenditure, and supports growth initiatives.",
      bio: "Rooted in family values and thoughtful decision-making, Savitha contributes wisdom and structure to SCADE’s financial operations. She believes in simple, impactful innovations that create long-term value.",
      quote: "Supporting innovation through smart financial planning.",
      image: "https://via.placeholder.com/600x600/0e7490/ffffff?text=Savitha",
      color: "from-blue-500 to-cyan-600",
      icon: HeartHandshake
    }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-blue-50/60 via-white to-cyan-50/40 overflow-hidden"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >

      {/* Hero */}
      <section className="py-24 lg:py-32 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl lg:text-8xl font-bold text-cyan-800 mb-8 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Meet Our Family
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl lg:text-3xl text-cyan-700 font-light max-w-5xl mx-auto"
        >
          Doctors, engineers, dreamers — united from Mysore to bring pure hydration to every Indian home.
        </motion.p>
      </section>


      {/* Team Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {teamMembers.map((member, i) => {
            const Icon = member.icon;
            const isExpanded = expanded === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-100 overflow-hidden">
                  {/* Circular Image */}
                  <div className="relative p-10 pb-0">
                    <div className="relative mx-auto w-72 h-72">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-20 blur-2xl group-hover:opacity-30 transition`} />
                      <div className="absolute inset-0 rounded-full ring-8 ring-cyan-200/50 group-hover:ring-cyan-400/70 transition-all" />
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
                      />
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-5 rounded-full shadow-2xl">
                        <Icon className="w-10 h-10" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-16 pb-10 px-8 text-center">
                    <h3 
                      className="text-3xl lg:text-4xl font-bold text-cyan-800 mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-xl font-semibold text-cyan-600 mb-3">
                      {member.role}
                    </p>
                    {member.qualifications && (
                      <p className="text-sm text-cyan-700 italic mb-6 opacity-90">
                        {member.qualifications}
                      </p>
                    )}

                    {/* Quote */}
                    <div className="my-8 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200">
                      <Quote className="w-10 h-10 text-cyan-600 mx-auto mb-4 opacity-70" />
                      <p className="text-lg font-medium text-cyan-800 italic leading-relaxed">
                        “{member.quote}”
                      </p>
                    </div>

                    {/* Know More Toggle */}
                    <button
                      onClick={() => setExpanded(isExpanded ? null : i)}
                      className="inline-flex items-center gap-3 mx-auto mt-4 text-cyan-700 font-bold hover:text-cyan-900 transition"
                    >
                      {isExpanded ? "Show Less" : "Know More About Journey"}
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>

                    {/* Expanded Full Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-8 pt-8 border-t border-cyan-100 space-y-6 text-left text-gray-700">
                            <div>
                              <h4 className="font-bold text-cyan-800 mb-2">Background</h4>
                              <p className="leading-relaxed">{member.background}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-cyan-800 mb-2">Key Contributions</h4>
                              <p className="leading-relaxed">{member.contributions}</p>
                            </div>
                            <div>
                              <h4 className="font-bold text-cyan-800 mb-2">About</h4>
                              <p className="leading-relaxed">{member.bio}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Footer Badge */}
                    <div className="mt-10 pt-6 border-t border-cyan-100 flex items-center justify-center gap-3 text-cyan-700">
                      <Heart className="w-5 h-5 text-cyan-600" />
                      <span className="text-sm font-medium">SCADE Technologies • Mysore</span>
                      <Heart className="w-5 h-5 text-cyan-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final CTA – Same as Magmist */}
      <section className="py-32 px-6 bg-gradient-to-r from-cyan-700 via-blue-800 to-cyan-900 text-white">
        <motion.div className="max-w-5xl mx-auto text-center">
          <h2 
            className="text-6xl lg:text-8xl font-bold mb-10 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We Are SCADE
          </h2>
          <p className="text-2xl lg:text-3xl font-light opacity-95 mb-16 max-w-4xl mx-auto">
            A family united by science, values, and the dream of pure water for every home.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-16 py-8 rounded-full text-2xl font-bold shadow-2xl hover:shadow-amber-500/50 transition-all hover:scale-105"
          >
            <HeartHandshake className="w-10 h-10" />
            Join Our Journey
            <Sparkles className="w-10 h-10" />
          </Link>

          <p className="mt-16 text-xl opacity-90 italic">
            Proudly Made in <span className="font-bold text-cyan-300">Mysore, Karnataka</span> • With Love & Science
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Team;