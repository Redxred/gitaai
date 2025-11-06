import React, { useState, useRef, useEffect } from 'react';
import { Message, Sender } from './types';
import getGitaAnswer from './services/geminiService';
import ChatBubble from './components/ChatBubble';
import Loader from './components/Loader';
import { SendIcon, ChariotWheelIcon, BackIcon } from './components/icons';
import FrontPage from './components/FrontPage';

type View = 'frontpage' | 'chat';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<View>('frontpage');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);
  
  useEffect(() => {
    if (currentView === 'chat') {
      inputRef.current?.focus();
    }
  }, [currentView]);

  const handleSend = async (promptToSend?: string) => {
    const currentInput = promptToSend ?? input;
    if (currentInput.trim() === '' || isLoading) return;

    if (currentView === 'frontpage') {
      setCurrentView('chat');
    }

    const userMessage: Message = {
      id: Date.now(),
      sender: Sender.User,
      text: currentInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    
    // Only clear the input field if the user typed the message
    if (!promptToSend) {
      setInput('');
    }
    
    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await getGitaAnswer(currentInput);
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: Sender.AI,
        text: aiResponse.answer,
        shloka: aiResponse.shloka,
        reference: aiResponse.reference,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(errorMessage);
       // Revert optimistic update and restore input
       setMessages((prev) => prev.filter(m => m.id !== userMessage.id));
       setInput(currentInput);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (prompt: string) => {
    handleSend(prompt);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
  }

  const handleBack = () => {
    setCurrentView('frontpage');
    setMessages([]);
    setError(null);
    setInput('');
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 font-sans">
      <header className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        {currentView === 'chat' && (
          <button 
            onClick={handleBack}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
            aria-label="Go back to home"
          >
            <BackIcon className="w-6 h-6" />
          </button>
        )}
        <ChariotWheelIcon className="w-8 h-8 text-orange-500" />
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200 ml-3">গীতা-জ্ঞান</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {currentView === 'frontpage' ? (
            <FrontPage onExampleClick={handleExampleClick} />
          ) : (
            <>
              {messages.map((msg) => <ChatBubble key={msg.id} message={msg} />)}
              {isLoading && <Loader />}
              {error && (
                <div className="flex justify-start animate-fade-in-up">
                  <div className="px-5 py-3 rounded-2xl bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-200 rounded-bl-none shadow-md">
                    <p><strong>দুঃখিত, একটি সমস্যা হয়েছে:</strong> {error}</p>
                  </div>
                </div>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {currentView === 'chat' && (
        <footer className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sticky bottom-0">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="আপনার প্রশ্ন এখানে লিখুন..."
                className="w-full p-4 pr-14 text-lg text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition-all duration-300"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || input.trim() === ''}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 dark:disabled:bg-gray-600 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-700 focus:ring-orange-500"
                aria-label="Send message"
              >
                <SendIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;