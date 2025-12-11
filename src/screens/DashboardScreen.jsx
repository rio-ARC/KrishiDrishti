import React, { useEffect } from 'react';
import { Sun, Cloud, Thermometer, CheckCircle, Clock, TrendingUp, Eye } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { useTranslation } from '../hooks/useTranslation';
import { mockWeatherData, mockCropPrices, mockCalendarTasks, mockDiagnoses } from '../data/mockData';

const DashboardScreen= () => {
  const { 
    weatherData, 
    cropPrices, 
    calendarTasks, 
    recentDiagnoses,
    location,
    setCurrentScreen 
  } = useAppStore();
  const { t } = useTranslation();

  useEffect(() => {
    // Initialize mock data
    useAppStore.setState({
      weatherData: mockWeatherData,
      cropPrices: mockCropPrices,
      calendarTasks: mockCalendarTasks,
      recentDiagnoses: mockDiagnoses
    });
  }, []);

  const todayTasks = calendarTasks.filter(task => 
    new Date(task.date).toDateString() === new Date().toDateString()
  );

  const getWeatherIcon = (condition) => {
    if (condition.includes('Sunny')) return <Sun className="w-6 h-6 text-yellow-500" />;
    if (condition.includes('Cloudy')) return <Cloud className="w-6 h-6 text-gray-500" />;
    return <Sun className="w-6 h-6 text-yellow-500" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with Weather */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold">{t('appName')}</h1>
            <p className="text-green-100 text-sm">{location}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center">
              {getWeatherIcon(weatherData?.condition || '')}
              <span className="ml-2 text-2xl font-bold">{weatherData?.temperature}°C</span>
            </div>
            <p className="text-green-100 text-sm">{weatherData?.condition}</p>
          </div>
        </div>

        {/* Weather Forecast */}
        <div className="flex space-x-4 overflow-x-auto">
          {weatherData?.forecast.map((day, index) => (
            <div key={index} className="flex-shrink-0 bg-white bg-opacity-20 rounded-lg p-3 min-w-[80px] text-center">
              <p className="text-xs text-green-100">{day.day}</p>
              <div className="my-2">{getWeatherIcon(day.condition)}</div>
              <p className="text-sm font-medium">{day.temp}°C</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Today's Tasks */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">{t('todayTasks')}</h2>
            <button 
              onClick={() => setCurrentScreen('calendar')}
              className="text-green-600 text-sm font-medium"
            >
              View All
            </button>
          </div>
          
          {todayTasks.length > 0 ? (
            <div className="space-y-3">
              {todayTasks.slice(0, 3).map((task) => (
                <div key={task.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  {task.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  ) : (
                    <Clock className="w-5 h-5 text-orange-500 mr-3" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{task.title}</p>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    task.priority === 'high' 
                      ? 'bg-red-100 text-red-800' 
                      : task.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {task.priority}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">No tasks for today</p>
          )}
        </div>

        {/* Market Prices */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">{t('marketPrices')}</h2>
            <button 
              onClick={() => setCurrentScreen('market')}
              className="text-green-600 text-sm font-medium"
            >
              View All
            </button>
          </div>
          
          <div className="space-y-3">
            {cropPrices.slice(0, 3).map((crop, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{crop.name}</p>
                  <p className="text-sm text-gray-600">{crop.market}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">₹{crop.price}</p>
                  <div className="flex items-center text-sm">
                    <TrendingUp className={`w-4 h-4 mr-1 ${
                      crop.trend === 'up' ? 'text-green-500' : 
                      crop.trend === 'down' ? 'text-red-500 rotate-180' : 'text-gray-500'
                    }`} />
                    <span className={
                      crop.trend === 'up' ? 'text-green-600' : 
                      crop.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }>
                      {crop.change > 0 ? '+' : ''}{crop.change}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Diagnoses */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">{t('recentDiagnoses')}</h2>
            <button 
              onClick={() => setCurrentScreen('plant-doctor')}
              className="text-green-600 text-sm font-medium"
            >
              Scan Plant
            </button>
          </div>
          
          {recentDiagnoses.length > 0 ? (
            <div className="space-y-3">
              {recentDiagnoses.map((diagnosis) => (
                <div key={diagnosis.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <img 
                    src={diagnosis.image} 
                    alt="Plant diagnosis"
                    className="w-12 h-12 rounded-lg object-cover mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{diagnosis.problem}</p>
                    <p className="text-sm text-gray-600">{diagnosis.confidence}% confidence</p>
                  </div>
                  <Eye className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-gray-500 mb-4">No recent diagnoses</p>
              <button 
                onClick={() => setCurrentScreen('plant-doctor')}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Scan Your First Plant
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;