import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';

const Mission11View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [activeTab, setActiveTab] = useState(1);
  const [agent1Active, setAgent1Active] = useState(false);
  const [agent2Active, setAgent2Active] = useState(false);

  const handleStart1 = () => {
    setAgent1Active(true);
    if (currentStepIndex === 0) {
      advanceStep();
    }
  };

  const handleStart2 = () => {
    setAgent2Active(true);
    if (currentStepIndex === 1 && agent1Active) {
      advanceStep();
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-100 rounded-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex bg-gray-200 border-b border-gray-300">
            <button
                onClick={() => setActiveTab(1)}
                className={`flex-1 py-3 font-bold text-center ${activeTab === 1 ? 'bg-white text-blue-600 border-t-2 border-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
                {t('ui.agent_1')}
                {agent1Active && <span className="ml-2 text-green-500 animate-pulse">●</span>}
            </button>
            <button
                onClick={() => setActiveTab(2)}
                className={`flex-1 py-3 font-bold text-center ${activeTab === 2 ? 'bg-white text-purple-600 border-t-2 border-purple-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
                {t('ui.agent_2')}
                {agent2Active && <span className="ml-2 text-green-500 animate-pulse">●</span>}
            </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-8 bg-white flex flex-col items-center justify-center">
            {activeTab === 1 && (
                <div className="text-center animate-in fade-in">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <span className="text-4xl">🤖</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{t('ui.agent_1')}</h2>
                    {!agent1Active ? (
                        <button
                            id="agent1-start"
                            onClick={handleStart1}
                            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105"
                        >
                            {t('ui.start_task')}
                        </button>
                    ) : (
                        <div className="flex flex-col items-center">
                            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                                <div className="h-full bg-blue-500 animate-progress"></div>
                            </div>
                            <span className="text-blue-600 font-bold">{t('ui.cmd_processing')}</span>
                        </div>
                    )}
                </div>
            )}

            {activeTab === 2 && (
                <div className="text-center animate-in fade-in">
                    <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <span className="text-4xl">👾</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{t('ui.agent_2')}</h2>
                    {!agent2Active ? (
                        <button
                            id="agent2-start"
                            onClick={handleStart2}
                            className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-purple-500 transition-transform transform hover:scale-105"
                        >
                            {t('ui.start_task')}
                        </button>
                    ) : (
                        <div className="flex flex-col items-center">
                            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                                <div className="h-full bg-purple-500 animate-progress"></div>
                            </div>
                            <span className="text-purple-600 font-bold">{t('ui.cmd_processing')}</span>
                        </div>
                    )}
                </div>
            )}
        </div>

        {missionStatus === 'completed' && (
            <div className="absolute bottom-8 right-8 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce z-20">
                ✓ {t('ui.mission_completed')}
            </div>
        )}
    </div>
  );
};

export default Mission11View;
