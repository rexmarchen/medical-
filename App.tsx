
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/lab-booking" element={<LabBooking />} />
            <Route path="/services/gyn-exam" element={<GynExam />} />
            <Route path="/services/lactation" element={<Lactation />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <GeminiChat />
      </div>
    </Router>
  );
};

export default App;
