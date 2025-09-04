'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL; // Use NEXT_PUBLIC for client-side access

  useEffect(() => {
    let sessionId = localStorage.getItem('chatSessionId');
    const userName = localStorage.getItem('userName');
    let initialBotMessage: Message;

    if (sessionId) {
      // Existing user
      const welcomeText = userName ? `Welcome back, ${userName}!` : 'Welcome back!';
      initialBotMessage = { text: welcomeText, sender: 'bot' };
    } else {
      // New user
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2)}`;
      localStorage.setItem('chatSessionId', sessionId);
      initialBotMessage = { text: 'Hi there, welcome to 3BTAI. How can I help?', sender: 'bot' };
    }

    setSessionId(sessionId);
    setMessages([initialBotMessage]);
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || !sessionId) return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    if (!N8N_WEBHOOK_URL) {
      console.error('N8N_CHAT_WEBHOOK_URL is not defined.');
      setMessages((prevMessages) => [...prevMessages, { text: 'Chat service is not configured.', sender: 'bot' }]);
      return;
    }

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatInput: input, sessionId }),
      });

      const data = await response.json();
      const botMessage: Message = { text: data.text || "Sorry, I didn't understand that.", sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error communicating with n8n webhook:', error);
      setMessages((prevMessages) => [...prevMessages, { text: 'Error connecting to chat service.', sender: 'bot' }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg focus:outline-none z-50"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col z-50">
          <div className="relative rounded-t-lg overflow-hidden">
            {/* Wavy Background */}
            <svg
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 320 120" // Adjusted viewBox for the path
            >
              <defs>
                <linearGradient id="header-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#2563eb' }} /> {/* blue-600 */}
                  <stop offset="100%" style={{ stopColor: '#0ea5e9' }} /> {/* sky-500 */}
                </linearGradient>
              </defs>
              <path
                d="M0,0 H320 V90 Q240,110 160,90 T0,90 Z"
                fill="url(#header-gradient)"
              />
            </svg>

            {/* Header Content */}
            <div className="relative z-10 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">Chat with 3BT Agent</h3>
                  <div className="flex items-center text-sm text-white opacity-90 mt-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    We are online!
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="focus:outline-none text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto" style={{ scrollBehavior: 'smooth' }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100 text-right ml-auto' : 'bg-gray-100 text-left mr-auto'}`}
                style={{ maxWidth: '80%' }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-gray-200 flex">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 text-white rounded-lg px-4 py-2 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;