import React from 'react';
import { Home, Camera, TrendingUp, Calendar } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { useTranslation } from '../hooks/useTranslation';

const BottomNavigation = () => {
  const { currentScreen, setCurrentScreen } = useAppStore();
  const { t } = useTranslation();

  const navItems = [
    { id: 'dashboard', icon: Home, label: t('dashboard') },
    { id: 'plant-doctor', icon: Camera, label: t('plantDoctor') },
    { id: 'market', icon: TrendingUp, label: t('market') },
    { id: 'calendar', icon: Calendar, label: t('calendar') }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-30">
      <div className="flex justify-around max-w-md mx-auto">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setCurrentScreen(id)}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors min-w-0 ${
              currentScreen === id 
                ? 'text-green-600 bg-green-50' 
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium truncate">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;