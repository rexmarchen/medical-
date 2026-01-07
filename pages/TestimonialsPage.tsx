
import React from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#005b82] mb-4">Patient Experiences</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it — hear directly from the women and families we serve in the Bloomington community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex text-yellow-400 mb-6">
              {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="text-gray-700 italic mb-8 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center">
               <div className="w-10 h-10 bg-[#d9f2f7] rounded-full flex items-center justify-center text-[#005b82] font-bold mr-3">
                 {t.name.charAt(0)}
               </div>
               <div>
                 <div className="font-bold text-gray-900">{t.name}</div>
                 <div className="text-xs text-gray-400 uppercase tracking-widest">{t.service}</div>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-[#005b82] rounded-3xl p-12 text-center text-white">
         <h2 className="text-3xl font-bold mb-4">Ready to experience our care?</h2>
         <p className="mb-8 text-gray-200">Join over 5,000 satisfied patients who trust M Health Fairview Oxboro.</p>
         <button className="bg-[#00b2a9] text-white px-10 py-4 rounded-full font-bold hover:bg-[#009e96] transition-all transform hover:scale-105">
           Schedule an Appointment
         </button>
      </div>
    </div>
  );
};

export default TestimonialsPage;
