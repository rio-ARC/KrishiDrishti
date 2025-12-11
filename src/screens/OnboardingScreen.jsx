import React, { useState } from 'react';
import { ChevronRight, MapPin, Volume2 } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { languages } from '../data/mockData';

const OnboardingScreen= () => {
  const [step, setStep] = useState(0);
  const { selectedLanguage, setLanguage, completeOnboarding, setLocation } = useAppStore();

  const handleLanguageSelect = (languageCode) => {
    setLanguage(languageCode);
    setStep(1);
  };

  const handleLocationSetup = () => {
    setLocation('Pune, Maharashtra');
    setStep(2);
  };

  const handleComplete = () => {
    completeOnboarding();
  };

  if (step === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center p-6">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Krishi-Drishti</h1>
          <p className="text-lg text-green-700">Your AI Agricultural Assistant</p>
        </div>

        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold text-center mb-6 text-gray-800">
            Select Your Language
          </h2>
          
          <div className="space-y-3">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className="w-full p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-green-500 hover:shadow-md transition-all duration-200 text-left"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-gray-900">{language.nativeName}</div>
                    <div className="text-sm text-gray-600">{language.name}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md text-center">
          <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Location Setup</h2>
          <p className="text-gray-600 mb-8">
            We need your location to provide accurate weather forecasts and local market prices.
          </p>
          
          <button
            onClick={handleLocationSetup}
            className="w-full p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium mb-4"
          >
            Allow Location Access
          </button>
          
          <button
            onClick={() => setStep(2)}
            className="w-full p-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Enter Manually
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <Volume2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Voice Assistant Ready</h2>
        <p className="text-gray-600 mb-8">
          You can now use voice commands to get instant help with farming queries, market prices, and plant diagnoses.
        </p>
        
        <div className="bg-white rounded-lg p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-800 mb-3">Try saying:</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• "What's the weather today?"</li>
            <li>• "Show me market prices"</li>
            <li>• "Diagnose my plant"</li>
            <li>• "What are my tasks?"</li>
          </ul>
        </div>
        
        <button
          onClick={handleComplete}
          className="w-full p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;