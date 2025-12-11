import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAppStore = create(
  persist(
    (set, get) => ({
      // Initial state
      selectedLanguage: '',
      hasCompletedOnboarding: false,
      location: '',
      isVoiceModalOpen: false,
      isListening: false,
      currentScreen: 'dashboard',
      weatherData: null,
      cropPrices: [],
      recentDiagnoses: [],
      calendarTasks: [],
      
      // Actions
      setLanguage: (language) => set({ selectedLanguage: language }),
      completeOnboarding: () => set({ hasCompletedOnboarding: true }),
      setLocation: (location) => set({ location }),
      setVoiceModal: (open) => set({ isVoiceModalOpen: open }),
      setListening: (listening) => set({ isListening: listening }),
      setCurrentScreen: (screen) => set({ currentScreen: screen }),
      
      addDiagnosis: (diagnosis) => set((state) => ({
        recentDiagnoses: [diagnosis, ...state.recentDiagnoses.slice(0, 4)]
      })),
      
      toggleTask: (taskId) => set((state) => ({
        calendarTasks: state.calendarTasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      }))
    }),
    {
      name: 'krishi-drishti-storage',
    }
  )
);