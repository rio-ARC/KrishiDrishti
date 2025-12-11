import React, { useState } from 'react';
import { Calendar as CalendarIcon, Plus, CheckCircle, Clock, Droplets, Sprout, Bug, Scissors } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { useTranslation } from '../hooks/useTranslation';


const CalendarScreen = () => {
  const { calendarTasks, toggleTask } = useAppStore();
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [viewMode, setViewMode] = useState('day');

  const getTaskIcon = (type) => {
    switch (type) {
      case 'watering': return <Droplets className="w-5 h-5 text-blue-500" />;
      case 'planting': return <Sprout className="w-5 h-5 text-green-500" />;
      case 'fertilizing': return <div className="w-5 h-5 bg-yellow-500 rounded-full" />;
      case 'pest-control': return <Bug className="w-5 h-5 text-red-500" />;
      case 'harvesting': return <Scissors className="w-5 h-5 text-orange-500" />;
      default: return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const todayTasks = calendarTasks.filter(task =>
    new Date(task.date).toDateString() === selectedDate
  );

  const upcomingTasks = calendarTasks.filter(task =>
    new Date(task.date) > new Date(selectedDate)
  ).slice(0, 5);

  const completedTasksCount = todayTasks.filter(task => task.completed).length;
  const totalTasksCount = todayTasks.length;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-green-600 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold">{t('calendar')}</h1>
            <p className="text-green-100 text-sm">Manage your farming schedule</p>
          </div>
          <button className="p-2 bg-green-700 rounded-lg hover:bg-green-800 transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-green-700 rounded-full h-2 mb-2">
          <div 
            className="bg-yellow-400 rounded-full h-2 transition-all duration-300"
            style={{ width: `${totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0}%` }}
          />
        </div>
        <p className="text-green-100 text-sm">
          {completedTasksCount} of {totalTasksCount} tasks completed today
        </p>
      </div>

      <div className="p-4">
        {/* View Toggle */}
        <div className="bg-white rounded-lg shadow-sm p-1 mb-6 flex">
          <button
            onClick={() => setViewMode('day')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'day'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Daily View
          </button>
          <button
            onClick={() => setViewMode('week')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'week'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Weekly View
          </button>
        </div>

        {/* Today's Tasks */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Today's Tasks</h2>
            <span className="text-sm text-gray-500">
              {new Date().toLocaleDateString('en-IN', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>

          {todayTasks.length > 0 ? (
            <div className="space-y-3">
              {todayTasks.map((task) => (
                <div key={task.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="mr-4 transition-colors"
                  >
                    {task.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <div className="w-6 h-6 border-2 border-gray-300 rounded-full hover:border-green-500" />
                    )}
                  </button>

                  <div className="mr-4">
                    {getTaskIcon(task.type)}
                  </div>

                  <div className="flex-1">
                    <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {task.title}
                    </p>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>

                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <CalendarIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No tasks scheduled for today</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Add Your First Task
              </button>
            </div>
          )}
        </div>

        {/* Upcoming Tasks */}
        {upcomingTasks.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Tasks</h2>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="mr-4">
                    {getTaskIcon(task.type)}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{task.title}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(task.date).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric' 
                      })} • {task.description}
                    </p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Weather Integration */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Weather-Based Recommendations</h3>
          <div className="space-y-3">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Droplets className="w-5 h-5" />
                <span className="font-medium">Irrigation Alert</span>
              </div>
              <p className="text-blue-100 text-sm">
                Light rain expected tomorrow. Consider reducing irrigation schedule.
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Bug className="w-5 h-5" />
                <span className="font-medium">Pest Control</span>
              </div>
              <p className="text-blue-100 text-sm">
                High humidity levels. Good time for pest inspection and treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarScreen;