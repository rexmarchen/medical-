
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-white font-bold text-lg mb-4">Oxboro Clinic</h3>
          <p className="text-sm">
            Providing trusted, compassionate healthcare to the Bloomington community for over 5 years.
          </p>
          <div className="mt-6 flex space-x-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-[#00b2a9] cursor-pointer transition-colors flex items-center justify-center">FB</div>
             <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-[#00b2a9] cursor-pointer transition-colors flex items-center justify-center">IG</div>
             <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-[#00b2a9] cursor-pointer transition-colors flex items-center justify-center">LI</div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/lab-booking" className="hover:text-white transition-colors">Online Lab Booking</Link></li>
            <li><Link to="/services/gyn-exam" className="hover:text-white transition-colors">Annual Gyn Exams</Link></li>
            <li><Link to="/services/lactation" className="hover:text-white transition-colors">Lactation Specialist</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="mr-2">📍</span>
              600 W 98th St, Bloomington, MN 55420
            </li>
            <li className="flex items-start">
              <span className="mr-2">📞</span>
              (Clinic Phone Number)
            </li>
            <li className="flex items-start">
              <span className="mr-2">🕒</span>
              Mon–Fri: 8 AM – 5 PM
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
        &copy; {new Date().getFullYear()} M Health Fairview Clinic – Oxboro. All Rights Reserved. Part of the M Health Fairview Health System.
      </div>
    </footer>
  );
};

export default Footer;
