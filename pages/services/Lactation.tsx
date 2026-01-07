
import React from 'react';
import { Link } from 'react-router-dom';

const Lactation: React.FC = () => {
  return (
    <div className="w-full">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1">
              <h1 className="text-4xl font-bold text-[#005b82] mb-6">Expert Breastfeeding Support When You Need It Most</h1>
              <p className="text-xl text-gray-600 mb-8">
                Our lactation specialists provide compassionate, evidence-based guidance for new and expecting parents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <button className="bg-[#005b82] text-white px-8 py-4 rounded-full font-bold hover:bg-[#004766] transition-all">Schedule Support</button>
                 <Link to="/contact" className="text-center px-8 py-4 border border-[#005b82] text-[#005b82] rounded-full font-bold hover:bg-gray-50 transition-all">Contact Us</Link>
              </div>
           </div>
           <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-lg">
              <img src="https://picsum.photos/800/600?baby" alt="Lactation support" />
           </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="text-center">
                <div className="text-4xl mb-4">🍼</div>
                <h4 className="font-bold mb-2">Feeding Assessments</h4>
                <p className="text-sm text-gray-600">Comprehensive review of your baby’s feeding patterns.</p>
             </div>
             <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="font-bold mb-2">Latch Support</h4>
                <p className="text-sm text-gray-600">Expert guidance on positioning and effective latching techniques.</p>
             </div>
             <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="font-bold mb-2">Supply Guidance</h4>
                <p className="text-sm text-gray-600">Strategies to maintain or increase milk supply safely.</p>
             </div>
             <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h4 className="font-bold mb-2">Ongoing Follow-ups</h4>
                <p className="text-sm text-gray-600">Continuous support throughout your breastfeeding journey.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold mb-8">Related Services</h2>
           <p className="text-gray-600 mb-10">We provide a holistic care environment including postpartum care and pediatric referrals to ensure the health of both parent and child.</p>
           <div className="bg-[#f0f9fa] p-8 rounded-3xl border border-[#d9f2f7]">
              <h4 className="font-bold mb-4">Schedule a Consultation</h4>
              <p className="text-sm text-gray-600 mb-6">Insurance coverage varies. We also offer self-pay options to ensure accessibility for all families.</p>
              <button className="bg-[#00b2a9] text-white px-8 py-3 rounded-full font-bold">Book Now</button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Lactation;
