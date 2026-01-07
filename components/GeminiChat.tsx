
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    // Use 'model' as role for AI responses to match Gemini API expectations
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Use process.env.API_KEY directly as required by guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const systemPrompt = `
        You are an AI assistant for M Health Fairview Clinic – Oxboro in Bloomington, MN.
        Location: 600 W 98th St, Bloomington, MN 55420.
        Services: Online Lab Booking, Annual Gynecological Exams, Lactation Specialists.
        Hours: Mon-Fri 8am-5pm.
        
        Answer patient questions concisely based on these facts. If they ask for medical advice, tell them to consult their provider or book an appointment.
        Always maintain a professional, high-trust healthcare tone.
      `;

      // Format history with correct 'user' and 'model' roles
      const response = await ai.models.generateContent({
        model: model,
        contents: [
          ...messages.map(m => ({ 
            role: m.role, 
            parts: [{ text: m.text }] 
          })), 
          { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      // Access the .text property directly (not a method)
      const aiText = response.text || "I'm sorry, I couldn't process that. Please contact our clinic directly.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Error connecting to AI assistant. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }}
            className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-80 sm:w-[400px] flex flex-col border border-gray-100 overflow-hidden mb-6"
          >
            <div className="bg-gradient-to-r from-[#005b82] to-[#004a69] p-6 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-[#00b2a9] rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[#005b82] rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-white font-black block leading-none">Oxboro AI</span>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Active Assistant</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/50 hover:text-white bg-white/10 p-2 rounded-xl transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div ref={scrollRef} className="h-96 overflow-y-auto p-6 space-y-6 bg-[#fcfdfe]">
              {messages.length === 0 && (
                <div className="text-gray-400 text-sm text-center py-12 px-6">
                  <div className="text-4xl mb-4">👋</div>
                  <p className="font-bold text-gray-900 mb-2">How can I help you today?</p>
                  <p className="text-xs">Ask about booking, lab results, or lactation specialists.</p>
                </div>
              )}
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-3xl text-sm font-medium ${
                    m.role === 'user' 
                      ? 'bg-[#005b82] text-white rounded-br-none shadow-lg shadow-[#005b82]/20' 
                      : 'bg-white border border-gray-100 text-gray-800 rounded-bl-none shadow-sm'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-4 rounded-3xl rounded-bl-none flex space-x-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-100 bg-white">
              <div className="flex items-center space-x-3 bg-gray-50 rounded-2xl px-4 py-2 border border-gray-100 focus-within:ring-2 focus-within:ring-[#00b2a9]/30 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your question..."
                  className="flex-grow bg-transparent text-sm py-2 focus:outline-none font-medium"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-[#00b2a9] text-white p-2.5 rounded-xl hover:bg-[#005b82] disabled:opacity-50 transition-all shadow-md shadow-[#00b2a9]/20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#005b82] text-white p-5 rounded-3xl shadow-[0_15px_35px_-10px_rgba(0,91,130,0.5)] hover:bg-[#00b2a9] transition-all flex items-center justify-center group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-black text-sm whitespace-nowrap">
          How can we help?
        </span>
      </motion.button>
    </div>
  );
};

export default GeminiChat;
