import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 justify-start animate-fade-in-up">
        <div className="px-5 py-3 rounded-2xl shadow-md bg-white dark:bg-gray-800 rounded-bl-none">
            <div className="flex items-center space-x-1">
                <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
      </div>
    </div>
  );
};

export default Loader;