import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Chinmai V S',
      role: 'Managing Director',
      qualifications: 'PT, CTTS, CIASTMT, CDNT, CAFPCT, OMT',
      background: 'Physiotherapist with certifications in advanced manual therapy, dry needling, and functional rehabilitation with advanced cupping.',
      contribution: 'As the visionary leader, Dr. Chinmai integrates medical expertise with product development, ensuring Magmist and future innovations are backed by scientific health principles. She oversees strategic partnerships, product testing for health benefits, and community outreach programs that educate users on hydration and wellness. Her hands-on approach includes collaborating with engineers to refine designs for optimal user safety and efficacy, while driving initiatives that promote sustainable health practices in underserved areas.',
      bio: 'Dr. Chinmai V S is a dedicated physiotherapist with over a decade of experience in rehabilitation and manual therapy. She holds multiple advanced certifications, including in cupping therapy and functional rehabilitation, and has treated patients across diverse demographics. Passionate about holistic health, she founded SCADE to bridge the gap between medical science and everyday technology. At 25 years old, she is a young innovator with a fresh perspective on global health challenges. Outside work, she enjoys mentoring young professionals and advocating for preventive healthcare through community workshops. Her family roots in Mysore inspire her commitment to local innovation.',
      quote: '“Reaching people through products that benefit their health.”',
      imageAlt: 'Dr. Chinmai V S, Managing Director of SCADE',
    },
    {
      name: 'Deekshi P',
      role: 'Technical Head',
      qualifications: 'Mechatronics Engineer',
      background: 'Expertise in design and technical innovation, including building and designing 3D models, graphic works, CAD works, and programming in ARDUINO.',
      contribution: 'Deekshi leads the technical development of Magmist, from prototyping to final production, ensuring the device is efficient, durable, and user-friendly. He optimizes the atmospheric water extraction process for low energy use, integrates smart sensors for real-time monitoring, and conducts rigorous testing to guarantee reliability in various environmental conditions. Additionally, he contributes to graphic design for marketing materials and explores future product enhancements, such as IoT connectivity for remote diagnostics, to expand SCADE\'s technological footprint.',
      bio: 'Deekshi P is a skilled mechatronics engineer with a strong foundation in robotics and automation. He has worked on innovative projects involving 3D modeling and Arduino programming, applying these skills to real-world applications in health tech. At SCADE, he focuses on creating sustainable solutions that address global water challenges. An avid learner, he stays updated on emerging technologies and enjoys tinkering with electronics in his spare time. His collaboration with the founding families has deepened his belief in family-driven entrepreneurship.',
      quote: '“Health makes humans live happily.”',
      imageAlt: 'Deekshi P, Technical Head of SCADE',
    },
    {
      name: 'Samartha V S',
      role: 'Marketing Head',
      qualifications: 'Diploma in Fire and Safety, Aeronautical, and Marine Engineering (Junior Engineer)',
      background: 'Brings a unique blend of safety expertise and engineering knowledge to marketing.',
      contribution: 'Samartha spearheads marketing strategies to raise awareness of SCADE\'s products, targeting households, businesses, and communities through digital campaigns, social media, and partnerships. He develops content that highlights Magmist\'s health benefits, organizes product demos and webinars, and analyzes market trends to expand reach in regions facing water scarcity. His engineering background aids in creating technical marketing materials, while he fosters collaborations with influencers and NGOs to promote sustainable hydration solutions.',
      bio: 'Samartha V S holds a diploma in Fire and Safety, Aeronautical, and Marine Engineering, bringing a unique blend of safety expertise to his marketing role. With experience as a junior engineer, he has worked on projects involving risk assessment and innovative designs. At SCADE, he channels his technical knowledge into crafting compelling narratives for health-focused products. A proactive communicator, he enjoys public speaking and community events. His family ties to the founders fuel his dedication to building a brand that prioritizes wellness and reliability.',
      quote: '“Innovating safety and health for every home.”',
      imageAlt: 'Samartha V S, Marketing Head of SCADE',
    },
    {
      name: 'Anuradha D R',
      role: 'Financial Management',
      qualifications: '',
      background: 'Mother of Dr. Chinmai and Samartha, with a background in family management and a keen interest in health and wellness.',
      contribution: 'Anuradha ensures the financial health of SCADE by managing budgets, overseeing investments, and maintaining transparent accounting practices. She plays a pivotal role in resource allocation for product development and marketing, negotiating vendor contracts to keep costs low, and preparing financial reports for stakeholders. Her maternal perspective emphasizes long-term sustainability, including funding for community health initiatives, and she supports the team\'s vision by fostering a culture of trust and ethical business practices.',
      bio: 'Anuradha D R is a nurturing figure with a background in family management and a keen interest in health and wellness. As a mother to Dr. Chinmai and Samartha, she brings personal insight into the importance of balanced lifestyles. She has been instrumental in the family\'s entrepreneurial journey, providing guidance on financial prudence and ethical decision-making. An advocate for healthy living, she enjoys gardening and sharing traditional recipes that promote natural wellness. Her involvement in SCADE reflects her belief in supporting innovations that benefit future generations.',
      quote: '“A mother always expects a healthy lifestyle.”',
      imageAlt: 'Anuradha D R, Financial Management at SCADE',
    },
    {
      name: 'Savitha',
      role: 'Financial Management',
      qualifications: '',
      background: 'Mother of Deekshi P, with a passion for promoting essential resources like clean water.',
      contribution: 'Savitha handles financial planning and budgeting, ensuring SCADE\'s operations are cost-effective and scalable. She collaborates on cash flow management, audits expenses related to Magmist production, and supports fundraising efforts for expansion. Her role extends to building trust among investors and partners by maintaining accurate records and forecasting growth. With a focus on the foundational benefits of water, she advocates for investments in eco-friendly technologies that align with SCADE\'s mission of health and sustainability.',
      bio: 'Savitha is a dedicated mother and financial steward with a passion for promoting essential resources like clean water. As the mother of Deekshi P, she has been a pillar of support in the family\'s ventures, emphasizing the value of education and innovation. Her background in family-oriented management has shaped her approach to ethical finance. She enjoys community activities and believes in the power of simple, natural solutions for well-being. At SCADE, she contributes her wisdom to ensure the company\'s growth is rooted in reliability and care.',
      quote: '“Water is a basic essential with multiple benefits.”',
      imageAlt: 'Savitha, Financial Management at SCADE',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F4] py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#064B39] to-[#0A8A67] text-white py-20 px-4 rounded-2xl shadow-2xl mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-montserrat">Our Dedicated Team</h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-lato">
            At SCADE Store-Studio, our diverse team brings together expertise in healthcare, engineering, marketing, and finance, all united by a passion for health innovation. Each member contributes uniquely to our mission of delivering precision, reliability, and advanced solutions for a healthier future.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-[#064B39] text-center mb-8 font-montserrat">Who We Are as a Team</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto text-center font-lato">
          Born out of unity, care, and responsibility, SCADE was founded by families that include both healthcare professionals and engineers. This unique blend ensures our innovations are scientifically sound and technologically advanced. Our team is more than colleagues — we are a family-driven force committed to bridging medical science with modern engineering to address real-world health needs. From product development to community outreach, every effort is guided by trust, compassion, and a shared vision for sustainable wellness.
        </p>
      </section>

      {/* Team Members Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Placeholder Image */}
            <div className="h-72 bg-gradient-to-br from-[#0A8A67] to-[#064B39] flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md rounded-full w-40 h-40 flex items-center justify-center">
                <span className="text-white text-5xl font-bold font-montserrat">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>

            {/* Member Details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#064B39] mb-2 font-montserrat">{member.name}</h3>
              <p className="text-lg font-semibold text-[#0A8A67] mb-1 font-lato">{member.role}</p>
              {member.qualifications && (
                <p className="text-sm text-gray-600 mb-4 font-lato">{member.qualifications}</p>
              )}
              <h4 className="text-md font-bold text-[#064B39] mb-2 font-montserrat">Background</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 font-lato">{member.background}</p>
              <h4 className="text-md font-bold text-[#064B39] mb-2 font-montserrat">Contributions</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 font-lato">{member.contribution}</p>
              <h4 className="text-md font-bold text-[#064B39] mb-2 font-montserrat">Bio</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 font-lato">{member.bio}</p>
              <p className="text-[#0A8A67] italic text-sm border-t border-gray-200 pt-4 font-lato">{member.quote}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Closing Section */}
      <section className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#064B39] mb-6 font-montserrat">United by Purpose</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto mb-8 font-lato">
          Our team's strength lies in our diversity and shared values. Together, we are committed to creating impactful, sustainable solutions that enhance health and wellness worldwide. Rooted in Mysore, India, we draw inspiration from our local heritage while aiming for global impact.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#0A8A67] text-white px-8 py-4 rounded-lg hover:bg-[#064B39] transition shadow-md text-lg font-medium font-montserrat"
        >
          Connect with Our Team
        </Link>
      </section>
    </div>
  );
};

export default Team;