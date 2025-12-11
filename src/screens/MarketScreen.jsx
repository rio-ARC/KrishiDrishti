import React, { useState } from 'react';
import { TrendingUp, TrendingDown, MapPin, Calendar, Filter } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { useTranslation } from '../hooks/useTranslation';

const MarketScreen = () => {
  const { cropPrices } = useAppStore();
  const { t } = useTranslation();
  const [selectedCrop, setSelectedCrop] = useState(null);

  const getTrendIcon = (trend, change) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <div className="w-4 h-4 bg-gray-400 rounded-full" />;
  };

  const getTrendColor = (trend) => {
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-green-600 text-white p-4">
        <h1 className="text-xl font-bold mb-2">{t('market')} Intelligence</h1>
        <p className="text-green-100 text-sm">Live crop prices and market trends</p>
      </div>

      <div className="p-4">
        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Market Filters</h2>
            <Filter className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              All Crops
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Grains
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Vegetables
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Fruits
            </button>
          </div>
        </div>

        {/* Price Cards */}
        <div className="space-y-4">
          {cropPrices.map((crop, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{crop.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{crop.market} • {crop.distance}km away</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-800">₹{crop.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">per quintal</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getTrendIcon(crop.trend, crop.change)}
                  <span className={`text-sm font-medium ${getTrendColor(crop.trend)}`}>
                    {crop.change > 0 ? '+' : ''}{crop.change}% from last week
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCrop(selectedCrop === crop.name ? null : crop.name)}
                  className="text-green-600 text-sm font-medium"
                >
                  {selectedCrop === crop.name ? 'Hide Chart' : 'View Trend'}
                </button>
              </div>

              {/* Price History Chart */}
              {selectedCrop === crop.name && (
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">7-Day Price History</h4>
                  <div className="flex items-end justify-between h-32 bg-gray-50 rounded-lg p-4">
                    {crop.history.map((price, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className="bg-green-500 rounded-t w-6 mb-2"
                          style={{ 
                            height: `${(price / Math.max(...crop.history)) * 80}px`,
                            minHeight: '4px'
                          }}
                        />
                        <span className="text-xs text-gray-600">
                          {idx === 0 ? '6d' : idx === 1 ? '5d' : idx === 2 ? '4d' : idx === 3 ? '3d' : idx === 4 ? '2d' : 'Today'}
                        </span>
                        <span className="text-xs font-medium text-gray-800">
                          ₹{price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-4">
                <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                  Get Directions
                </button>
                <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium">
                  Set Price Alert
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Market Summary */}
        <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Market Summary</h3>
          <p className="text-blue-100 text-sm mb-4">
            Overall market is showing positive trends with seasonal variations
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <p className="text-blue-100 text-sm">Trending Up</p>
              <p className="text-xl font-bold">5 crops</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3">
              <p className="text-blue-100 text-sm">Best Price</p>
              <p className="text-xl font-bold">Wheat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketScreen;