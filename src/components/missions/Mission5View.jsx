import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';

const Mission5View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [activeTab, setActiveTab] = useState('browser');
  const [showModal, setShowModal] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'artifacts' && currentStepIndex === 0) {
      advanceStep();
    }
  };

  const handleArtifactClick = () => {
    setShowModal(true);
    if (currentStepIndex === 1) {
      advanceStep();
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100 rounded-lg overflow-hidden">
        {/* Fake Browser Tabs */}
        <div className="flex bg-gray-800 text-gray-400 text-sm">
            <button
                onClick={() => handleTabClick('browser')}
                className={`px-4 py-2 border-r border-gray-700 hover:bg-gray-700 ${activeTab === 'browser' ? 'bg-gray-700 text-white' : ''}`}
            >
                Google
            </button>
            <button
                id="artifacts-tab"
                onClick={() => handleTabClick('artifacts')}
                className={`px-4 py-2 border-r border-gray-700 hover:bg-gray-700 flex items-center gap-2 ${activeTab === 'artifacts' ? 'bg-gray-700 text-white' : ''}`}
            >
                <span>📸</span> {t('ui.artifacts')}
            </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 relative">
            {activeTab === 'browser' && (
                <div className="flex flex-col items-center justify-center h-full">
                    <span className="text-4xl font-bold text-gray-300">Google</span>
                </div>
            )}

            {activeTab === 'artifacts' && (
                <div className="grid grid-cols-4 gap-4">
                    <div
                        id="artifact-item"
                        onClick={handleArtifactClick}
                        className="aspect-video bg-white border rounded shadow hover:shadow-md cursor-pointer flex flex-col items-center justify-center p-2 group"
                    >
                        <div className="w-full h-20 bg-gray-100 mb-2 flex items-center justify-center text-xs text-gray-400">
                            screenshot.png
                        </div>
                        <span className="text-xs font-bold text-gray-600 group-hover:text-blue-600">google_home.png</span>
                    </div>
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10 backdrop-blur-sm" onClick={() => setShowModal(false)}>
                    <div className="bg-white p-2 rounded max-w-lg w-full">
                         <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-400">SCREENSHOT PREVIEW</span>
                         </div>
                    </div>
                </div>
            )}

            {missionStatus === 'completed' && (
                <div className="absolute bottom-8 right-8 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce z-20">
                    ✓ {t('ui.mission_completed')}
                </div>
            )}
        </div>
    </div>
  );
};

export default Mission5View;
