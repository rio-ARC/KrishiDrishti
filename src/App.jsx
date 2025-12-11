import React, { useEffect } from 'react';
import { useAppStore } from './store/appStore.js';
import OnboardingScreen from './screens/OnboardingScreen.jsx';
import DashboardScreen from './screens/DashboardScreen.jsx';
import PlantDoctorScreen from './screens/PlantDoctorScreen.jsx';
import MarketScreen from './screens/MarketScreen.jsx';
import CalendarScreen from './screens/CalendarScreen.jsx';
import BottomNavigation from './components/BottomNavigation.jsx';
import FloatingVoiceButton from './components/FloatingVoiceButton.jsx';
import VoiceAssistant from './components/VoiceAssistant.jsx';

function App() {
  const { 
    hasCompletedOnboarding, 
    selectedLanguage,
    currentScreen 
  } = useAppStore();

  // Set default language if none selected
  useEffect(() => {
    if (!selectedLanguage && hasCompletedOnboarding) {
      useAppStore.getState().setLanguage('en');
    }
  }, [selectedLanguage, hasCompletedOnboarding]);

  // Show onboarding if not completed
  if (!hasCompletedOnboarding) {
    return <OnboardingScreen />;
  }

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'plant-doctor':
        return <PlantDoctorScreen />;
      case 'market':
        return <MarketScreen />;
      case 'calendar':
        return <CalendarScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderCurrentScreen()}
      <BottomNavigation />
      <FloatingVoiceButton />
      <VoiceAssistant />
    </div>
  );
}

export default App;