
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import TestimonialsPage from './pages/TestimonialsPage.tsx';
import Contact from './pages/Contact.tsx';
import Blog from './pages/Blog.tsx';
import LabBooking from './pages/services/LabBooking.tsx';
import GynExam from './pages/services/GynExam.tsx';
import Lactation from './pages/services/Lactation.tsx';
import GeminiChat from './components/GeminiChat.tsx';

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
