
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TestimonialsPage from './pages/TestimonialsPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import LabBooking from './pages/services/LabBooking';
import GynExam from './pages/services/GynExam';
import Lactation from './pages/services/Lactation';
import GeminiChat from './components/GeminiChat';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/lab-booking" element={<LabBooking />} />
          <Route path="/services/gyn-exam" element={<GynExam />} />
          <Route path="/services/lactation" element={<Lactation />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen selection:bg-[#00b2a9] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
        <GeminiChat />
      </div>
    </Router>
  );
};

export default App;
