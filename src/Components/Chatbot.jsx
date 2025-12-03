// src/components/ProductChatbot.jsx
import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const predefinedQuestions = [
  "What is Magmist and how does it work?",
  "How much water can Magmist produce daily?",
  "What is the pH level of Magmist water?",
  "Is Magmist suitable for home use?",
  "What are the available models of Magmist?",
  "Tell me about Tavarum hair products",
  "Are Tavarum products 100% natural?",
  "Does Tavarum help reduce hair fall and greying?",
  "Where are SCADE products made?",
  "How can I buy or inquire about your products?"
];

const predefinedAnswers = {
  "What is Magmist and how does it work?": "Magmist is an advanced Atmospheric Water Generator (AWG) that produces pure, alkaline, mineral-rich drinking water directly from the air's humidity. It captures moisture, purifies it through multi-stage filtration, and enriches it with essential minerals like calcium and magnesium, delivering water with a healthy pH of 8–9.5.",
  
  "How much water can Magmist produce daily?": "Production depends on humidity and temperature:\n• Magmist Home: Up to 20–30 liters/day\n• Magmist Pro: Up to 50–100 liters/day\nHigher humidity = more water!",
  
  "What is the pH level of Magmist water?": "Magmist water has a healthy alkaline pH range of 8.0 to 9.5, which helps balance body pH, supports detoxification, and improves hydration at the cellular level.",
  
  "Is Magmist suitable for home use?": "Yes! The Magmist Home model is compact, plug-and-play, requires no plumbing, and is perfect for homes, small offices, and apartments.",
  
  "What are the available models of Magmist?": "We offer two models:\n• Magmist Home – Compact countertop (20–30L/day)\n• Magmist Pro – High-capacity floor model (50–100L/day)\nIdeal for larger families, offices, schools, and hospitals.",
  
  "Tell me about Tavarum hair products": "Tavarum is our premium 100% organic hair care range — completely sulphate-free, paraben-free, and chemical-free. Made with ancient Indian herbs and essential oils, it nourishes hair naturally.",
  
  "Are Tavarum products 100% natural?": "Absolutely! Tavarum uses only natural herbs, plant extracts, and essential oils. No sulphates, parabens, silicones, ammonia, or synthetic chemicals.",
  
  "Does Tavarum help reduce hair fall and greying?": "Yes! Regular use of Tavarum Hair Oil and Serum strengthens roots, improves scalp health, promotes new growth, and helps delay premature greying naturally.",
  
  "Where are SCADE products made?": "All SCADE products, including Magmist and Tavarum, are proudly designed and manufactured in Mysore, Karnataka, India — with love, precision, and sustainability.",
  
  "How can I buy or inquire about your products?": "You can contact us directly via WhatsApp at +91 74115 32800 or fill out the contact form. We’ll share pricing, demos, and dealership info promptly!"
};

const ProductChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 Welcome to SCADE Store-Studio. How can I help you today?", sender: "bot" }
  ]);

  const sendQuestion = (question) => {
    setMessages(prev => [...prev, { text: question, sender: "user" }]);
    
    setTimeout(() => {
      const answer = predefinedAnswers[question] || "Thank you for your question! We'll get back to you soon via WhatsApp or email.";
      setMessages(prev => [...prev, { text: answer, sender: "bot" }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#0A8A67] text-white p-4 rounded-full shadow-2xl hover:bg-[#064B39] transition-all hover:scale-110"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[32rem] bg-white rounded-2xl shadow-3xl overflow-hidden flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#064B39] to-[#0A8A67] text-white p-5">
            <div className="flex items-center gap-3">
              <Bot size={32} />
              <div>
                <h3 className="font-bold text-lg">SCADE Assistant</h3>
                <p className="text-sm opacity-90">Ask me anything about Magmist & Tavarum</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-[#0A8A67] text-white"
                      : "bg-white text-gray-800 shadow-md"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  {msg.sender === "bot" && <div className="flex items-center gap-1 mt-1"><Bot size={14} /></div>}
                  {msg.sender === "user" && <div className="flex justify-end mt-1"><User size={14} /></div>}
                </div>
              </div>
            ))}
          </div>

          {/* Predefined Questions */}
          <div className="p-4 bg-white border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-3 text-center">Quick Questions:</p>
            <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
              {predefinedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendQuestion(q)}
                  className="text-left text-sm bg-gray-100 hover:bg-[#0A8A67] hover:text-white text-gray-700 px-4 py-3 rounded-lg transition text-start"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="p-4 bg-[#0A8A67] text-white text-center">
            <a
              href="https://wa.me/7411532800?text=Hello%20SCADE%20Team!%20I%20have%20some%20questions%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold hover:underline"
            >
              <Send size={18} />
              Chat with Human on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductChatbot;