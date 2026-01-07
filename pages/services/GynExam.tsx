
import React from 'react';
import { Link } from 'react-router-dom';

const GynExam: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-[#f0f9fa] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#005b82] mb-6">Preventive Women’s Healthcare You Can Trust</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Annual gynecological exams play a vital role in maintaining long-term women’s health. Our providers ensure a respectful, thorough, and comfortable experience.
          </p>
          <button className="bg-[#00b2a9] text-white px-8 py-4 rounded-full font-bold hover:bg-[#009e96] transition-all shadow-lg">
            Book Your Annual Exam
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-[#005b82]">Early Detection</h3>
            <p className="text-gray-600">Proactive screenings for cervical cancer, infections, and other health concerns.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-[#005b82]">Personalized Care</h3>
            <p className="text-gray-600">Tailored wellness plans based on your age, history, and life goals.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-[#005b82]">Comfortable Environment</h3>
            <p className="text-gray-600">Judgment-free, respectful care from experienced female healthcare specialists.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src="https://picsum.photos/800/600?woman" alt="Women's health" />
           </div>
           <div>
              <h2 className="text-3xl font-bold mb-6">What’s Included</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#00b2a9] rounded-full mr-3"></span> Health history review</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#00b2a9] rounded-full mr-3"></span> Physical and pelvic exam</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#00b2a9] rounded-full mr-3"></span> Screenings as recommended (Pap test, etc.)</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#00b2a9] rounded-full mr-3"></span> One-on-one wellness consultation</li>
              </ul>
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                 <p className="text-sm text-gray-500 italic">"Our providers prioritize your comfort and understanding at every step of the visit."</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GynExam;
