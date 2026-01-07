
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { SERVICES, TESTIMONIALS, FAQS } from '../constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Explicitly type itemVariants as Variants to resolve AnimationGeneratorType incompatibility
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', damping: 20, stiffness: 100 } 
  }
};

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#005b82] via-[#004a69] to-[#00b2a9] opacity-95"></div>
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            alt="Healthcare background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-1/4 -right-20 w-96 h-96 bg-[#00b2a9] rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
              x: [0, -50, 0]
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-[#005b82] rounded-full blur-[120px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              Accepting New Patients in Bloomington
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-[800] text-white leading-[1.1] mb-8 tracking-tight">
              Compassionate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e0f7fa] to-[#00b2a9]">Care for Every</span> <br />
              Stage of Life.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join 5,000+ neighbors who trust Oxboro Clinic for expert women's health, fast labs, and dedicated support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-[#00b2a9] text-white rounded-3xl font-extrabold text-lg shadow-[0_10px_30px_-5px_rgba(0,178,169,0.5)] hover:shadow-[#00b2a9]/60 hover:-translate-y-1 transition-all"
              >
                Request Appointment
              </Link>
              <Link 
                to="/services/lab-booking" 
                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-3xl font-extrabold text-lg hover:bg-white/20 transition-all"
              >
                Schedule Lab Test
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                alt="Clinic provider" 
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20"
            >
              <div className="text-[#005b82] font-black text-3xl">4.9/5</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Patient Rating</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-[#00b2a9] p-6 rounded-3xl shadow-xl z-20 text-white"
            >
              <div className="font-bold text-lg leading-tight">Expert Lactation Support</div>
              <div className="text-xs opacity-80 uppercase tracking-widest mt-1">Available Daily</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <span className="font-black text-2xl tracking-tighter text-[#005b82]">M HEALTH FAIRVIEW</span>
           <span className="font-black text-2xl tracking-tighter text-[#005b82]">FAIRVIEW HEALTH</span>
           <span className="font-black text-2xl tracking-tighter text-[#005b82]">UNIVERSITY OF MINNESOTA</span>
           <span className="font-black text-2xl tracking-tighter text-[#005b82]">OXBORO MEDICAL</span>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#00b2a9] font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Experience Excellence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-[#005b82] mb-6"
            >
              Healthcare Designed for You
            </motion.h2>
            <div className="w-20 h-1.5 bg-[#00b2a9] mx-auto rounded-full"></div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { icon: '🏥', title: 'Modern Facilities', desc: 'Step into a warm, welcoming environment equipped with the latest diagnostic technology.' },
              { icon: '👩‍⚕️', title: 'Dedicated Specialists', desc: 'Our providers spend more time with you, ensuring all your concerns are heard and addressed.' },
              { icon: '📱', title: 'Seamless Technology', desc: 'From online booking to digital results, we make managing your health effortless.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                className="group p-10 bg-gray-50 rounded-[2.5rem] transition-all hover:bg-[#005b82] hover:shadow-2xl hover:shadow-[#005b82]/30"
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-white/80 transition-colors leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-[#005b82] mb-4">Our Specialty Care</h2>
              <p className="text-gray-500 text-lg font-medium">Focused clinical services tailored for Bloomington families.</p>
            </div>
            <Link to="/services/lab-booking" className="group bg-white text-[#005b82] px-8 py-4 rounded-2xl font-bold shadow-md hover:shadow-xl transition-all flex items-center">
              Explore All Services 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id} 
                variants={itemVariants}
                className="group relative h-[500px] overflow-hidden rounded-[3rem] bg-white shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 z-0">
                  <img src={`https://images.unsplash.com/photo-${idx === 0 ? '1579152128802-7dc5a3d1d3d7' : idx === 1 ? '1559757175-5700dde675bc' : '1555252333-9f8e92e65ee9'}?auto=format&fit=crop&q=80&w=800`} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                  <div className="w-14 h-14 bg-[#00b2a9] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-[#00b2a9]/40 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-8 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">{service.description}</p>
                  <Link to={service.path} className="inline-flex items-center text-[#00b2a9] font-bold group-hover:text-white transition-colors">
                    View Details <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials with Swiper-like feel */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-[#005b82] mb-4 tracking-tight">Voices of Our Community</h2>
            <div className="flex justify-center items-center gap-1 mb-6">
              {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-3xl">★</span>)}
            </div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Top-rated patient experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TESTIMONIALS.slice(0, 3).map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-12 rounded-[3rem] relative border border-gray-100"
              >
                <div className="text-6xl text-[#00b2a9]/20 absolute top-8 left-8 font-serif leading-none">“</div>
                <p className="text-gray-700 text-lg italic mb-10 relative z-10 leading-relaxed font-medium">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#005b82] to-[#00b2a9] rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-lg">{t.name}</div>
                    <div className="text-xs text-[#00b2a9] font-bold uppercase tracking-widest">{t.service}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-7xl mx-auto bg-gradient-to-br from-[#005b82] to-[#004a69] rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative blur */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#00b2a9] rounded-full blur-[100px] opacity-30"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Start Your <br /> Wellness Journey?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Accepting new patients for annual exams, lab services, and lactation support. Experience the difference of personalized care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="px-12 py-5 bg-[#00b2a9] text-white rounded-3xl font-extrabold text-xl shadow-xl hover:bg-white hover:text-[#005b82] transition-all transform hover:scale-105 active:scale-95">
                Book My Visit
              </Link>
              <a href="tel:0000000000" className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-3xl font-extrabold text-xl hover:bg-white/20 transition-all">
                Call Our Clinic
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
