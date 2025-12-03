import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Chinmai V S (PT)',
      role: 'Managing Director',
      qualifications: 'PT, CTTS, CIASTMT, CDNT, CAFPCT, OMT',
      bio: 'A dedicated physiotherapist with over a decade of experience in rehabilitation and manual therapy. Passionate about holistic health, she founded SCADE to bridge medical science and everyday technology. At 25, she brings fresh innovation to global health challenges.',
      quote: '“Reaching people through products that benefit their health.”',
      highlight: true, // For visual emphasis on leader
    },
    {
      name: 'Deekshi P',
      role: 'Technical Head',
      qualifications: 'Mechatronics Engineer',
      bio: 'Skilled in robotics, automation, 3D modeling, and Arduino programming. Leads the technical development of Magmist, ensuring efficiency, durability, and smart features for sustainable water solutions.',
      quote: '“Health makes humans live happily.”',
      highlight: true
    },
    {
      name: 'Samartha V S',
      role: 'Marketing Head',
      qualifications: 'Diploma in Fire & Safety, Aeronautical & Marine Engineering',
      bio: 'Brings engineering insight into compelling marketing strategies. Drives awareness of SCADE’s health-focused innovations through digital campaigns, demos, and community partnerships.',
      quote: '“Innovating safety and health for every home.”',
      highlight: true
    },
    {
      name: 'Anuradha D R',
      role: 'Financial Management',
      bio: 'A nurturing figure with deep family values, she ensures financial prudence, ethical practices, and sustainable growth. Her maternal perspective emphasizes long-term community wellness.',
      quote: '“A mother always expects a healthy lifestyle.”',
      highlight: true
    },
    {
      name: 'Savitha',
      role: 'Financial Management',
      bio: 'Dedicated supporter of innovation and clean water access. Manages budgeting and investments with a focus on scalability and ethical, eco-friendly growth.',
      quote: '“Water is a basic essential with multiple benefits.”',
      highlight: true
    },  
  ];

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#064B39] mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A passionate blend of healthcare professionals, engineers, and family visionaries — united by trust, care, and a shared mission to innovate for healthier lives.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-[#F4F4F4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                member.highlight ? 'ring-4 ring-[#0A8A67] ring-offset-4' : ''
              }`}
            >
              {/* Placeholder Image (You can replace src with actual photos later) */}
              <div className="h-64 bg-gradient-to-br from-[#0A8A67] to-[#064B39] flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-32 h-32 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#064B39] mb-1">
                  {member.name}
                </h3>
                {member.qualifications && (
                  <p className="text-sm text-[#0A8A67] font-medium mb-2">
                    {member.qualifications}
                  </p>
                )}
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <p className="text-[#0A8A67] italic text-sm border-t border-gray-300 pt-3">
                  {member.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700">
            Family-founded and purpose-driven — every member contributes uniquely to delivering{' '}
            <span className="font-bold text-[#064B39]">Precision, Reliability, and Advanced Solutions</span>.
          </p>
          <Link
            to="/team"
            className="mt-6 inline-block bg-[#0A8A67] text-white px-8 py-3 rounded-lg hover:bg-[#064B39] transition shadow-md"
          >
            Learn More About Our Team →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;