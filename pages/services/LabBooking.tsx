
import React from 'react';
import { Link } from 'react-router-dom';

const LabBooking: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-8">
            <Link to="/" className="text-gray-500 hover:text-[#005b82]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#005b82] font-semibold">Online Lab Booking</span>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#005b82] mb-6">Convenient, Secure Lab Scheduling in Bloomington, MN</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our online lab booking service allows you to schedule tests quickly, reduce wait times, and access reliable diagnostic services with ease.
              </p>
              <button className="bg-[#00b2a9] text-white px-8 py-4 rounded-full font-bold hover:bg-[#009e96] transition-all">
                Schedule Your Lab Test Online
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/600?lab" alt="Lab services" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-6">Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-center"><span className="text-[#00b2a9] mr-3 font-bold">✓</span> 24/7 online scheduling</li>
              <li className="flex items-center"><span className="text-[#00b2a9] mr-3 font-bold">✓</span> Reduced in-clinic waiting</li>
              <li className="flex items-center"><span className="text-[#00b2a9] mr-3 font-bold">✓</span> Fast, accurate results</li>
              <li className="flex items-center"><span className="text-[#00b2a9] mr-3 font-bold">✓</span> Secure patient portal</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-[#005b82] text-white flex items-center justify-center shrink-0 mr-4 font-bold">1</div>
                <div>
                   <h4 className="font-bold">Choose your lab test</h4>
                   <p className="text-sm text-gray-600">Select the specific diagnostic test required by your provider.</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-[#005b82] text-white flex items-center justify-center shrink-0 mr-4 font-bold">2</div>
                <div>
                   <h4 className="font-bold">Book a preferred time</h4>
                   <p className="text-sm text-gray-600">Choose a slot that fits your schedule 24/7.</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-[#005b82] text-white flex items-center justify-center shrink-0 mr-4 font-bold">3</div>
                <div>
                   <h4 className="font-bold">Visit the clinic</h4>
                   <p className="text-sm text-gray-600">Quickly drop in for sample collection with minimal waiting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
           <h2 className="text-2xl font-bold mb-8 text-center">Lab Services FAQ</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                 <h4 className="font-bold mb-2">Do I need a doctor’s order?</h4>
                 <p className="text-gray-600 text-sm">Some tests require a provider order; others do not. Please check your specific requirement during booking.</p>
              </div>
              <div>
                 <h4 className="font-bold mb-2">How soon will I get results?</h4>
                 <p className="text-gray-600 text-sm">Most results are available within 1–3 business days via our secure portal.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LabBooking;
