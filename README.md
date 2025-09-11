# Krishi-Drishti

## 🌾 Agricultural Vision Platform

Krishi-Drishti is a comprehensive React-based web application designed to empower Indian farmers with cutting-edge agricultural insights and tools. Leveraging vision-based guidance and multi-language support, the platform provides an intuitive interface for plant diagnosis, market price tracking, weather forecasting, and farming task management.

## 📋 Overview

Krishi-Drishti serves as an AI-powered agricultural assistant that bridges the gap between traditional farming practices and modern technology. The platform offers farmers real-time access to:

- **Vision-based plant diagnosis** using image analysis
- **Multi-language support** for regional accessibility
- **Location-based market intelligence**
- **Weather forecasting and alerts**
- **Interactive farming calendar and task management**
- **Voice assistant integration** for hands-free operation

The application is built with a focus on user experience, supporting multiple Indian languages including Hindi, Malayalam, Tamil, Telugu, and Bengali, making it accessible to farmers across diverse linguistic regions.

## ✨ Key Features

### 🌐 Multi-Language Support
- **6 Languages Supported**: English, Hindi, Malayalam, Tamil, Telugu, and Bengali
- **Dynamic Translation**: Real-time language switching with persistent preferences
- **Regional Accessibility**: Tailored for Indian farmers across different states

### 📸 Plant Health Scanner
- **AI-Powered Diagnosis**: Upload or capture plant images for instant analysis
- **Disease Identification**: Recognizes common crop diseases with confidence scores
- **Treatment Recommendations**: Organic and chemical solution suggestions
- **Prevention Tips**: Proactive farming advice to avoid future issues

### 📊 Market Intelligence
- **Real-Time Prices**: Live crop price tracking from local markets
- **Trend Analysis**: Price movement indicators (up/down/stable)
- **Location-Based**: Market data filtered by distance and relevance
- **Historical Data**: Price tracking for informed decision-making

### 🌤️ Weather Integration
- **Local Forecasts**: 5-day weather predictions
- **Agricultural Alerts**: Weather conditions affecting crop health
- **Visual Indicators**: Intuitive weather icons and temperature displays

### 📅 Smart Calendar
- **Task Management**: Planting, watering, fertilizing, and harvesting schedules
- **Priority System**: High, medium, and low priority task categorization
- **Completion Tracking**: Visual progress indicators
- **Automated Reminders**: Daily task notifications

### 🎙️ Voice Assistant
- **Voice Commands**: Hands-free operation for farmers
- **Natural Language Processing**: Intuitive command recognition
- **Quick Actions**: Instant access to weather, prices, and tasks
- **Accessibility**: Voice interface for users with limited literacy

### 🎨 Interactive UI Components
- **Bottom Navigation**: Seamless screen switching
- **Floating Voice Button**: Always-accessible voice commands
- **Responsive Design**: Optimized for mobile and desktop
- **Intuitive Icons**: Lucide React icons for clear visual communication

## 🛠️ Technical Architecture

### Recent Updates
- **TypeScript to JavaScript Conversion**: Complete migration from TypeScript (.ts/.tsx) to JavaScript (.js/.jsx) for broader compatibility
- **Clean Codebase**: Removal of all Bolt AI watermarks and references
- **Optimized Dependencies**: Streamlined package management

### Tech Stack
- **Frontend Framework**: React 18 with Hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: Zustand for lightweight, scalable state handling
- **Styling**: Tailwind CSS for utility-first responsive design
- **Icons**: Lucide React for consistent, accessible iconography
- **Routing**: React Router for seamless navigation
- **Charts**: Chart.js integration for data visualization

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── BottomNavigation.jsx
│   ├── FloatingVoiceButton.jsx
│   └── VoiceAssistant.jsx
├── screens/            # Main application screens
│   ├── DashboardScreen.jsx
│   ├── PlantDoctorScreen.jsx
│   ├── MarketScreen.jsx
│   ├── CalendarScreen.jsx
│   └── OnboardingScreen.jsx
├── store/              # State management
│   └── appStore.js
├── data/               # Mock data and translations
│   └── mockData.js
├── hooks/              # Custom React hooks
│   └── useTranslation.js
└── App.jsx            # Main application component
```

## 🚀 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/krishi-drishti.git
   cd krishi-drishti
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

### First-Time Setup
1. Launch the application
2. Select your preferred language from the onboarding screen
3. Grant location permissions for personalized market data
4. Complete voice assistant setup

### Core Workflows

#### Plant Diagnosis
1. Navigate to "Plant Doctor" screen
2. Capture or upload a plant image
3. Wait for AI analysis (simulated processing)
4. Review diagnosis results and treatment options
5. Access prevention tips for future reference

#### Market Price Tracking
1. Visit the "Market" screen
2. View current crop prices with trend indicators
3. Filter by location and crop type
4. Monitor price history for decision-making

#### Task Management
1. Access the "Calendar" screen
2. View today's tasks with priority indicators
3. Mark completed tasks
4. Plan future farming activities

#### Voice Commands
1. Tap the floating voice button
2. Speak natural language commands like:
   - "What's the weather today?"
   - "Show me market prices"
   - "Diagnose my plant"
   - "What are my tasks?"

## ⚙️ Build Configuration

### Vite Configuration
The project uses Vite for fast development and optimized production builds:

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📦 Dependencies

### Core Dependencies
- **React**: UI framework
- **React DOM**: DOM rendering
- **React Router DOM**: Client-side routing
- **Zustand**: State management
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Chart.js**: Data visualization
- **React Webcam**: Camera integration

### Development Dependencies
- **Vite**: Build tool and dev server
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests: `npm run lint`
5. Commit your changes: `git commit -am 'Add new feature'`
6. Push to the branch: `git push origin feature/your-feature`
7. Submit a pull request

### Guidelines
- Follow the existing code style and structure
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed
- Ensure responsive design works on mobile devices

### Areas for Contribution
- **Language Support**: Add more Indian languages
- **AI Integration**: Implement real plant diagnosis APIs
- **Offline Support**: Add service worker for offline functionality
- **Data Sources**: Integrate real market price APIs
- **Accessibility**: Improve screen reader support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern React and Vite
- Icons provided by Lucide
- Font support via Google Fonts
- Inspired by the needs of Indian farmers

## 📞 Support

For questions, issues, or feature requests:
- Open an issue on GitHub
- Contact the development team
- Check the documentation for common solutions

---

**Krishi-Drishti** - Empowering farmers with technology for a sustainable future 🌱
