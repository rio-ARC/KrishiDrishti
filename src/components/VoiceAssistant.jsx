import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { useTranslation } from '../hooks/useTranslation';

const VoiceAssistant = () => {
  const { isVoiceModalOpen, isListening, setVoiceModal, setListening } = useAppStore();
  const { t } = useTranslation();
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const voiceCommands = {
    'weather': 'Today it will be 28°C with partly cloudy skies. Good for outdoor farming activities.',
    'market prices': 'Wheat prices are up by 5.2% at ₹2150 per quintal in Pune APMC.',
    'plant disease': 'Please take a picture of your plant so I can help diagnose any issues.',
    'today tasks': 'You have 2 pending tasks: water the crops and apply fertilizer.',
    'mausam': 'आज 28°C तापमान होगा और आंशिक बादल होंगे। खेती के कार्य के लिए अच्छा दिन है।',
    'bhav': 'गेहूं की कीमत पुणे APMC में 5.2% बढ़कर ₹2150 प्रति क्विंटल है।'
  };

  const handleVoiceInput = async () => {
    if (!isListening) {
      setListening(true);
      setTranscript('Listening...');
      
      // Simulate voice recognition
      setTimeout(() => {
        const commands = Object.keys(voiceCommands);
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        setTranscript(randomCommand);
        setResponse(voiceCommands[randomCommand]);
        setListening(false);
        
        // Auto-speak response (simulated)
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(voiceCommands[randomCommand]);
          utterance.lang = 'en-IN';
          speechSynthesis.speak(utterance);
        }
      }, 2000);
    }
  };

  const closeModal = () => {
    setVoiceModal(false);
    setTranscript('');
    setResponse('');
    setListening(false);
  };

  if (!isVoiceModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{t('voiceAssistant')}</h2>
          <p className="text-sm text-gray-600">Tap the microphone and ask your question</p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleVoiceInput}
            disabled={isListening}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-200 ${
              isListening 
                ? 'bg-red-500 animate-pulse' 
                : 'bg-green-600 hover:bg-green-700 active:scale-95'
            }`}
          >
            {isListening ? (
              <MicOff className="w-8 h-8 text-white" />
            ) : (
              <Mic className="w-8 h-8 text-white" />
            )}
          </button>
        </div>

        {transcript && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">You said:</h3>
            <p className="text-gray-900">{transcript}</p>
          </div>
        )}

        {response && (
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-green-800">Response:</h3>
              <Volume2 className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-green-900">{response}</p>
          </div>
        )}

        <div className="flex space-x-3">
          <button
            onClick={closeModal}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
          {!isListening && (
            <button
              onClick={handleVoiceInput}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;