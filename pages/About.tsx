
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#005b82] mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            M Health Fairview Clinic – Oxboro was established to provide accessible, compassionate, and reliable healthcare to the Bloomington community. For over 5 years, we’ve focused on building long-term patient relationships through trust and high medical standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="bg-[#005b82] text-white p-12 rounded-3xl shadow-xl flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-200">
              To deliver patient-centered healthcare that empowers individuals and families to live healthier lives through prevention, education, and expert medical care.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#00b2a9] mb-2 uppercase text-sm tracking-widest">Compassion</h3>
              <p className="text-sm text-gray-600">Every patient deserves respect and understanding.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#00b2a9] mb-2 uppercase text-sm tracking-widest">Excellence</h3>
              <p className="text-sm text-gray-600">Evidence-based, high-quality care.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#00b2a9] mb-2 uppercase text-sm tracking-widest">Accessibility</h3>
              <p className="text-sm text-gray-600">Convenient services and clear communication.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#00b2a9] mb-2 uppercase text-sm tracking-widest">Integrity</h3>
              <p className="text-sm text-gray-600">Honest, ethical medical practices.</p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600">Dedicated Healthcare Professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                  <img src={`https://picsum.photos/200/200?doctor${i}`} alt="Team member" />
                </div>
                <h4 className="font-bold text-lg">Provider Name</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Specialist</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements & Milestones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="text-4xl mb-4">🏆</div>
                <div className="font-bold">5,000+</div>
                <div className="text-sm text-gray-500">Patients Served</div>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="text-4xl mb-4">🏆</div>
                <div className="font-bold">5+ Years</div>
                <div className="text-sm text-gray-500">In Bloomington</div>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="text-4xl mb-4">🏆</div>
                <div className="font-bold">Digital Lab</div>
                <div className="text-sm text-gray-500">Scheduling System</div>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <div className="text-4xl mb-4">🏆</div>
                <div className="font-bold">High Rating</div>
                <div className="text-sm text-gray-500">Patient Satisfaction</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
