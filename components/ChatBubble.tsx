import React from 'react';
import { Message, Sender } from '../types';
import { PeacockFeatherIcon } from './icons';

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.sender === Sender.User;

  if (isUser) {
    return (
      <div className="flex justify-end animate-fade-in-up">
        <div className="px-5 py-3 rounded-2xl shadow-md bg-orange-100 dark:bg-orange-900/50 text-gray-900 dark:text-gray-100 rounded-br-none max-w-lg">
          <p className="text-lg">{message.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start animate-fade-in-up">
      <div className="flex-shrink-0 mr-3 mt-1">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <PeacockFeatherIcon className="w-6 h-6 text-white" />
          </div>
      </div>
      <div className="px-5 py-3 rounded-2xl shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-bl-none max-w-2xl">
        <p className="text-lg mb-4 whitespace-pre-wrap">{message.text}</p>
        {message.shloka && (
          <div className="mt-4 p-4 border-l-4 border-orange-400 bg-orange-50 dark:bg-gray-700/50 rounded-r-lg">
            <p className="font-semibold text-lg italic text-orange-800 dark:text-orange-300 whitespace-pre-wrap">"{message.shloka}"</p>
          </div>
        )}
        {message.reference && (
          <p className="text-right text-sm mt-3 text-gray-500 dark:text-gray-400 font-mono">{message.reference}</p>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
