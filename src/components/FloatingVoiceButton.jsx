import React from 'react';
import { Mic } from 'lucide-react';
import { useAppStore } from '../store/appStore';

const FloatingVoiceButton = () => {
  const setVoiceModal = useAppStore(state => state.setVoiceModal);

  return (
    <button
      onClick={() => setVoiceModal(true)}
      className="fixed bottom-20 right-4 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 active:scale-95 z-40"
      aria-label="Voice Assistant"
    >
      <Mic className="w-6 h-6" />
    </button>
  );
};

export default FloatingVoiceButton;