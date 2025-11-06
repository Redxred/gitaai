// FIX: Populating the file with the FrontPage component as it was previously empty/invalid.
import React, { useState } from 'react';
import { KrishnaIcon, SendIcon } from './icons';

interface FrontPageProps {
  onExampleClick: (prompt: string) => void;
}

const FrontPage: React.FC<FrontPageProps> = ({ onExampleClick }) => {
  const [input, setInput] = useState('');

  const examplePrompts = [
    "আমি আমার কাজে মনোযোগ দিতে পারছি না।",
    "ভবিষ্যৎ নিয়ে আমি খুব চিন্তিত।",
    "আমার জীবনে সুখ নেই কেন?",
    "কিভাবে রাগ নিয়ন্ত্রণ করা যায়?",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onExampleClick(input);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-4 animate-fade-in-up h-full">
      <div className="w-40 h-40">
        <KrishnaIcon />
      </div>

      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mt-2 mb-2" style={{ animationDelay: '0.2s' }}>শ্রীমদ্ভগবদ্গীতা AI</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8" style={{ animationDelay: '0.3s' }}>
        আপনার জীবনের যেকোনো সমস্যা বা প্রশ্ন আমাকে বলুন, আমি গীতার আলোকে আপনাকে পথ দেখানোর চেষ্টা করব।
      </p>
      
      <div className="w-full max-w-2xl" style={{ animationDelay: '0.4s' }}>
        <form onSubmit={handleSubmit} className="relative mb-8">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="এখানে আপনার প্রশ্ন লিখুন..."
                className="w-full p-4 pr-14 text-lg text-gray-800 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-orange-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition-all duration-300"
            />
            <button
                type="submit"
                disabled={!input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 dark:disabled:bg-gray-600 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-700 focus:ring-orange-500"
                aria-label="Send message"
            >
                <SendIcon className="w-6 h-6" />
            </button>
        </form>

        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">অথবা, একটি বেছে নিন:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {examplePrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => onExampleClick(prompt)}
              className="p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-lg hover:bg-orange-50 dark:hover:bg-gray-700/50 transition-all duration-300 text-left text-gray-800 dark:text-gray-200"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontPage;