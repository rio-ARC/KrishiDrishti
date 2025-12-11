export const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' }
];

export const mockWeatherData = {
  location: 'Pune, Maharashtra',
  temperature: 28,
  condition: 'Partly Cloudy',
  icon: 'partly-cloudy',
  forecast: [
    { day: 'Today', temp: 28, condition: 'Partly Cloudy' },
    { day: 'Tomorrow', temp: 30, condition: 'Sunny' },
    { day: 'Day After', temp: 26, condition: 'Rainy' }
  ]
};

export const mockCropPrices = [
  {
    name: 'Wheat',
    price: 2150,
    trend: 'up',
    change: 5.2,
    market: 'Pune APMC',
    distance: 12,
    history: [2000, 2050, 2100, 2120, 2150]
  },
  {
    name: 'Rice',
    price: 1850,
    trend: 'down',
    change: -2.1,
    market: 'Mumbai APMC',
    distance: 45,
    history: [1900, 1890, 1870, 1860, 1850]
  },
  {
    name: 'Onion',
    price: 3200,
    trend: 'up',
    change: 12.5,
    market: 'Nashik APMC',
    distance: 78,
    history: [2800, 2900, 3000, 3100, 3200]
  }
];

export const mockCalendarTasks = [
  {
    id: '1',
    title: 'Water the crops',
    description: 'Morning irrigation for wheat field',
    date: new Date().toISOString(),
    type: 'watering',
    priority: 'high',
    completed: false
  },
  {
    id: '2',
    title: 'Apply fertilizer',
    description: 'NPK fertilizer for rice plantation',
    date: new Date(Date.now() + 86400000).toISOString(),
    type: 'fertilizing',
    priority: 'medium',
    completed: false
  },
  {
    id: '3',
    title: 'Pest inspection',
    description: 'Check for pests in tomato plants',
    date: new Date(Date.now() + 172800000).toISOString(),
    type: 'pest-control',
    priority: 'high',
    completed: true
  }
];

export const mockDiagnoses = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=300',
    problem: 'Leaf Blight Disease',
    confidence: 92,
    solutions: {
      organic: [
        'Apply neem oil spray twice a week',
        'Remove affected leaves immediately',
        'Improve air circulation around plants'
      ],
      chemical: [
        'Use copper-based fungicide',
        'Apply chlorothalonil spray',
        'Treat with mancozeb solution'
      ]
    },
    prevention: [
      'Avoid overhead watering',
      'Maintain proper plant spacing',
      'Use disease-resistant varieties'
    ]
  }
];

export const translations = {
  en: {
    appName: 'Krishi-Drishti',
    welcome: 'Welcome to Krishi-Drishti',
    selectLanguage: 'Select Your Language',
    dashboard: 'Dashboard',
    plantDoctor: 'Plant Doctor',
    market: 'Market',
    calendar: 'Calendar',
    weather: 'Weather',
    todayTasks: "Today's Tasks",
    marketPrices: 'Market Prices',
    recentDiagnoses: 'Recent Diagnoses',
    voiceAssistant: 'Voice Assistant',
    takePicture: 'Take Picture',
    diagnosing: 'Diagnosing...',
    organic: 'Organic',
    chemical: 'Chemical',
    prevention: 'Prevention',
    completed: 'Completed',
    pending: 'Pending'
  },
  hi: {
    appName: 'कृषि-दृष्टि',
    welcome: 'कृषि-दृष्टि में आपका स्वागत है',
    selectLanguage: 'अपनी भाषा चुनें',
    dashboard: 'डैशबोर्ड',
    plantDoctor: 'पौधे डॉक्टर',
    market: 'बाज़ार',
    calendar: 'कैलेंडर',
    weather: 'मौसम',
    todayTasks: 'आज के कार्य',
    marketPrices: 'बाज़ार भाव',
    recentDiagnoses: 'हाल की जाँच',
    voiceAssistant: 'आवाज सहायक',
    takePicture: 'तस्वीर लें',
    diagnosing: 'जाँच कर रहे हैं...',
    organic: 'जैविक',
    chemical: 'रासायनिक',
    prevention: 'बचाव',
    completed: 'पूर्ण',
    pending: 'लंबित'
  }
};