import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';

const Mission1View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [isInstalling, setIsInstalling] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  // Step 0: User needs to click Install
  // Step 1: User needs to click Open

  const handleInstall = () => {
    if (currentStepIndex !== 0) return;
    setIsInstalling(true);
    setTimeout(() => {
      setIsInstalling(false);
      setIsInstalled(true);
      advanceStep(); // Move to Step 1
    }, 1500); // Simulate download time
  };

  const handleOpen = () => {
    if (currentStepIndex !== 1) return;
    advanceStep(); // Complete Mission
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-lg p-8 relative overflow-hidden">
        {/* Simulated Browser Bar */}
        <div className="absolute top-0 left-0 w-full bg-gray-200 border-b border-gray-300 p-2 flex items-center gap-2">
            <div className="flex gap-1 ml-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 text-center shadow-inner">
                antigravity.dev/download
            </div>
        </div>

        {/* Content */}
        <div className="mt-8 text-center">
            <div className="w-24 h-24 bg-primary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <span className="text-4xl text-white font-bold">A</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{t('ui.simulator_title')}</h1>
            <p className="text-gray-600 mb-8 max-w-md">
                {t('app.subtitle')} - v1.0.0
            </p>

            {missionStatus === 'completed' ? (
                 <div className="text-green-600 font-bold text-xl animate-bounce">
                    ✓ {t('ui.open')}
                 </div>
            ) : (
                <>
                    {!isInstalled ? (
                        <button
                            id="install-btn"
                            onClick={handleInstall}
                            disabled={isInstalling}
                            className={`
                                px-8 py-3 rounded-full font-bold text-white text-lg transition-all transform
                                ${isInstalling
                                    ? 'bg-gray-400 cursor-wait'
                                    : 'bg-blue-600 hover:bg-blue-500 hover:scale-105 shadow-lg shadow-blue-500/30'
                                }
                            `}
                        >
                            {isInstalling ? t('ui.loading') : t('ui.install')}
                        </button>
                    ) : (
                        <button
                            id="open-btn"
                            onClick={handleOpen}
                            className="px-8 py-3 rounded-full font-bold text-white text-lg bg-green-500 hover:bg-green-400 hover:scale-105 shadow-lg shadow-green-500/30 transition-all transform animate-pulse"
                        >
                            {t('ui.open')}
                        </button>
                    )}
                </>
            )}
        </div>
    </div>
  );
};

export default Mission1View;
