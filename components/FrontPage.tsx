import React from 'react';
import { ChariotWheelIcon } from './icons';

interface FrontPageProps {
  onExampleClick: (prompt: string) => void;
}

const FrontPage: React.FC<FrontPageProps> = ({ onExampleClick }) => {
  const examplePrompts = [
    "আমি আমার কাজে মনোযোগ দিতে পারছি না।",
    "ভবিষ্যৎ নিয়ে আমি খুব চিন্তিত।",
    "কিভাবে রাগ নিয়ন্ত্রণ করা যায়?",
    "সঠিক সিদ্ধান্ত নিতে আমার অসুবিধা হচ্ছে।",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-gray-700 dark:text-gray-300 animate-fade-in">
      <ChariotWheelIcon className="w-24 h-24 mb-6 text-orange-400" />
      <h1 className="text-4xl font-bold mb-2">গীতা-জ্ঞান</h1>
      <h2 className="text-xl mb-8 text-gray-500 dark:text-gray-400">আপনার জীবনের যেকোনো প্রশ্নের উত্তর খুঁজুন भगवद् गीता-র আলোকে।</h2>
      
      <div className="w-full max-w-2xl mx-auto">
        <p className="mb-4 font-semibold">কিছু উদাহরণ:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {examplePrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => onExampleClick(prompt)}
              className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-700 transition-all duration-300 text-left"
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
