
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We have received your inquiry and will respond within 1 business day.");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold text-[#005b82] mb-8">Get in Touch</h1>
          <p className="text-gray-600 mb-12 text-lg">
            Whether you have a question about our services or are ready to book your first appointment, our team is here to help.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#f0f9fa] rounded-2xl flex items-center justify-center text-[#005b82] shrink-0 mr-4">
                📞
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Phone</h4>
                <p className="text-gray-600 font-medium">(Clinic Phone Number)</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#f0f9fa] rounded-2xl flex items-center justify-center text-[#005b82] shrink-0 mr-4">
                📧
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email</h4>
                <p className="text-gray-600 font-medium">oxboro.clinic@mhealthfairview.org</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#f0f9fa] rounded-2xl flex items-center justify-center text-[#005b82] shrink-0 mr-4">
                📍
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Address</h4>
                <p className="text-gray-600 font-medium">600 W 98th St, Bloomington, MN 55420</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-3xl">
             <h4 className="font-bold mb-4">Business Hours</h4>
             <div className="flex justify-between text-sm py-2 border-b border-gray-200">
                <span>Monday – Friday</span>
                <span className="font-semibold text-gray-900">8:00 AM – 5:00 PM</span>
             </div>
             <div className="flex justify-between text-sm py-2">
                <span>Saturday – Sunday</span>
                <span className="text-gray-400">Closed</span>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00b2a9] focus:outline-none"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00b2a9] focus:outline-none"
                  placeholder="(000) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00b2a9] focus:outline-none"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Service Requested</label>
              <select
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00b2a9] focus:outline-none"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="">Select a service</option>
                <option value="lab">Lab Booking</option>
                <option value="gyn">Annual Exam</option>
                <option value="lactation">Lactation Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Preferred Time</label>
              <input
                type="text"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00b2a9] focus:outline-none"
                placeholder="e.g. Next Tuesday Morning"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00b2a9] focus:outline-none"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#005b82] text-white py-4 rounded-xl font-bold hover:bg-[#004766] transition-all mt-4"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-20 h-96 rounded-3xl overflow-hidden shadow-inner bg-gray-200 flex items-center justify-center text-gray-400">
         <p className="text-center">
           <span className="block text-2xl mb-2">📍 Map Integration</span>
           600 W 98th St, Bloomington, MN 55420
         </p>
      </div>
    </div>
  );
};

export default Contact;
