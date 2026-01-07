
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { SERVICES, TESTIMONIALS, FAQS } from '../constants.tsx';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', damping: 25, stiffness: 100 } 
  }
};

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#005b82]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#005b82] via-[#005b82]/90 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Professional" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-[#00b2a9]/20 border border-[#00b2a9]/30 text-[#00b2a9] text-xs font-black uppercase tracking-[0.2em] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00b2a9] mr-2 animate-pulse"></span>
              Bloomington, MN Patient Care
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              Compassionate Care <br />
              <span className="text-[#00b2a9]">For Every Life.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-2xl font-medium">
              Join 5,000+ neighbors who trust Oxboro Clinic for expert women's health, modern lab services, and personalized support.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-[#00b2a9] text-white rounded-2xl font-bold text-lg shadow-[0_15px_30px_-5px_rgba(0,178,169,0.4)] hover:shadow-[#00b2a9]/60 hover:-translate-y-1 transition-all text-center"
              >
                Request Appointment
              </Link>
              <Link 
                to="/services/lab-booking" 
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Schedule Lab Test
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[#00b2a9] font-bold uppercase tracking-widest text-xs mb-3 block">Specialized Clinical Care</span>
              <h2 className="text-4xl font-extrabold text-[#005b82] tracking-tight">Expert Services Tailored to You</h2>
            </div>
            <Link to="/services/lab-booking" className="text-[#005b82] font-bold border-b-2 border-[#00b2a9]/30 hover:border-[#00b2a9] transition-all pb-1 flex items-center gap-2">
              View All Services <span>→</span>
            </Link>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id} 
                variants={itemVariants}
                className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-[#005b82]/10 transition-all border border-transparent hover:border-[#005b82]/5"
              >
                <div className="w-16 h-16 bg-[#f0f9fa] rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-[#00b2a9] transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#005b82] transition-colors">{service.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{service.description}</p>
                <Link to={service.path} className="inline-flex items-center text-[#00b2a9] font-bold group-hover:translate-x-2 transition-transform">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-extrabold text-[#005b82] mb-8 leading-tight">Over 5,000 Lives <br /> Trusted to Our Care.</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Patient satisfaction isn't just a metric — it's our daily mission. We combine advanced clinical standards with the warmth of a community clinic.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-4xl font-black text-[#00b2a9] mb-1">4.9/5</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Avg Patient Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-[#00b2a9] mb-1">5+ Yrs</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Local Experience</div>
                </div>
              </div>

              <Link to="/testimonials" className="inline-flex items-center px-8 py-4 bg-slate-100 text-[#005b82] rounded-2xl font-bold hover:bg-slate-200 transition-all">
                Read All Reviews
              </Link>
            </motion.div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100"
              >
                <div className="text-5xl text-[#00b2a9]/20 mb-6 font-serif">“</div>
                <p className="text-xl text-slate-700 italic font-medium leading-relaxed mb-8">
                  {TESTIMONIALS[0].text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#005b82] rounded-xl flex items-center justify-center text-white font-bold">
                    {TESTIMONIALS[0].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{TESTIMONIALS[0].name}</div>
                    <div className="text-xs text-[#00b2a9] font-bold">{TESTIMONIALS[0].service}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-gradient-to-br from-[#005b82] to-[#004a69] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#00b2a9]/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Start Your Wellness <br /> Journey With Us.</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Accepting new patients for annual exams, lab services, and lactation support. Expert care is closer than you think.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact" className="px-12 py-5 bg-white text-[#005b82] rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl">
                Book My Visit
              </Link>
              <a href="tel:0000000000" className="px-12 py-5 bg-white/10 border border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
                Call Clinic
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
