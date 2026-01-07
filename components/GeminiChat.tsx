
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
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Safely access API key
      const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
      if (!apiKey) throw new Error("API Key not found");
      
      const ai = new GoogleGenAI({ apiKey });
      const modelName = 'gemini-3-flash-preview';
      
      const systemPrompt = `
        You are a highly professional medical receptionist AI for M Health Fairview Clinic – Oxboro in Bloomington, MN.
        Address: 600 W 98th St, Bloomington, MN 55420.
        Services: Online Lab Booking, Annual Gynecological Exams, Lactation Support.
        Tone: Empathetic, clear, and reassuring.
        Rule: Do not give medical diagnoses. Recommend booking an appointment for specific health concerns.
      `;

      const response = await ai.models.generateContent({
        model: modelName,
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: { systemInstruction: systemPrompt },
      });

      const aiText = response.text || "I apologize, I'm having trouble connecting. Please try again or call the clinic.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Service temporarily unavailable. Please call (Clinic Phone Number) for assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] w-[360px] max-w-[calc(100vw-2rem)] flex flex-col border border-gray-100 overflow-hidden mb-4"
          >
            <div className="bg-[#005b82] p-5 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#00b2a9] rounded-xl flex items-center justify-center shadow-inner">
                   <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm leading-none">Oxboro Assistant</h3>
                  <p className="text-[#00b2a9] text-[10px] font-bold uppercase tracking-widest mt-1">Online Now</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div ref={scrollRef} className="h-80 overflow-y-auto p-5 space-y-4 bg-slate-50">
              {messages.length === 0 && (
                <div className="text-center py-10 opacity-50">
                  <div className="text-4xl mb-2">👋</div>
                  <p className="text-xs font-bold text-gray-400">How can we assist you today?</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-[#005b82] text-white rounded-br-none shadow-md shadow-[#005b82]/20' 
                      : 'bg-white border border-gray-100 text-slate-700 rounded-bl-none shadow-sm'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-none flex space-x-1.5 items-center">
                    <div className="w-1.5 h-1.5 bg-[#00b2a9] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#00b2a9] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#00b2a9] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-grow border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#00b2a9] focus:outline-none transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-[#00b2a9] text-white p-2.5 rounded-xl hover:bg-[#005b82] disabled:opacity-50 transition-all shadow-lg shadow-[#00b2a9]/30"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
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
        className="bg-[#005b82] text-white p-4 rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,91,130,0.4)] flex items-center space-x-3 group overflow-hidden relative transition-all"
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <svg className="w-7 h-7 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        <span className="font-bold text-sm relative z-10">Chat with Assistant</span>
      </motion.button>
    </div>
  );
};

export default GeminiChat;
