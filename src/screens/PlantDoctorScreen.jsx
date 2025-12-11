import React, { useState, useRef } from 'react';
import { Camera, Upload, Loader, Leaf, ArrowLeft } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { useTranslation } from '../hooks/useTranslation';


const PlantDoctorScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState('organic');
  const fileInputRef = useRef(null);
  
  const { addDiagnosis, setCurrentScreen } = useAppStore();
  const { t } = useTranslation();

  const handleImageCapture = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result;
        setSelectedImage(imageUrl);
        analyzeImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (imageUrl) => {
    setIsAnalyzing(true);
    setResult(null);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResult = {
        id: Date.now().toString(),
        image: imageUrl,
        problem: 'Bacterial Leaf Spot',
        confidence: 87,
        solutions: {
          organic: [
            'Remove affected leaves and dispose properly',
            'Apply neem oil spray in early morning or evening',
            'Improve air circulation around plants',
            'Use copper-based organic fungicide',
            'Maintain proper watering schedule'
          ],
          chemical: [
            'Apply streptomycin sulfate spray',
            'Use copper hydroxide fungicide',
            'Treat with bactericide containing copper',
            'Apply systemic fungicide as preventive measure'
          ]
        },
        prevention: [
          'Avoid overhead watering',
          'Maintain proper plant spacing',
          'Use drip irrigation system',
          'Remove plant debris regularly',
          'Rotate crops annually'
        ]
      };
      
      setResult(mockResult);
      addDiagnosis(mockResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  if (result) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-green-600 text-white p-4">
          <div className="flex items-center mb-4">
            <button 
              onClick={() => setResult(null)}
              className="mr-4 p-2 hover:bg-green-700 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold">Diagnosis Result</h1>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Analyzed Image */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <img 
              src={result.image} 
              alt="Analyzed plant"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{result.problem}</h2>
                <p className="text-sm text-gray-600">Confidence: {result.confidence}%</p>
              </div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          {/* Solution Tabs */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('organic')}
                className={`flex-1 py-3 px-4 text-center font-medium ${
                  activeTab === 'organic'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600'
                }`}
              >
                {t('organic')} Solutions
              </button>
              <button
                onClick={() => setActiveTab('chemical')}
                className={`flex-1 py-3 px-4 text-center font-medium ${
                  activeTab === 'chemical'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600'
                }`}
              >
                {t('chemical')} Solutions
              </button>
            </div>
            
            <div className="p-4">
              <ul className="space-y-3">
                {result.solutions[activeTab].map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{solution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prevention Tips */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('prevention')} Tips</h3>
            <ul className="space-y-2">
              {result.prevention.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{tip}</p>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => {
              setResult(null);
              setSelectedImage(null);
            }}
            className="w-full p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Scan Another Plant
          </button>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Loader className="w-10 h-10 text-green-600 animate-spin" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{t('diagnosing')}</h2>
          <p className="text-gray-600">Analyzing your plant image...</p>
          <div className="mt-6">
            <img 
              src={selectedImage} 
              alt="Analyzing plant"
              className="w-48 h-48 object-cover rounded-lg mx-auto"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-green-600 text-white p-4">
        <h1 className="text-xl font-bold mb-2">{t('plantDoctor')}</h1>
        <p className="text-green-100 text-sm">Take a photo of your plant to diagnose issues</p>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="w-12 h-12 text-green-600" />
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Plant Health Scanner</h2>
          <p className="text-gray-600 mb-8">
            Point your camera at the affected plant part for accurate diagnosis
          </p>

          <div className="space-y-4">
            <button
              onClick={handleCameraClick}
              className="w-full p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Camera className="w-5 h-5" />
              <span>{t('takePicture')}</span>
            </button>

            <button
              onClick={handleCameraClick}
              className="w-full p-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>Upload from Gallery</span>
            </button>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageCapture}
            className="hidden"
          />
        </div>

        {/* Tips Section */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Photography Tips</h3>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <span className="text-yellow-600 text-sm font-bold">1</span>
              </div>
              <p className="text-gray-700">Take photos in good natural light</p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <span className="text-yellow-600 text-sm font-bold">2</span>
              </div>
              <p className="text-gray-700">Focus on the affected area clearly</p>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <span className="text-yellow-600 text-sm font-bold">3</span>
              </div>
              <p className="text-gray-700">Include some healthy parts for comparison</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDoctorScreen;