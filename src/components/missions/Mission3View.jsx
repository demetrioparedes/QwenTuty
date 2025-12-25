import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';

const Mission3View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [activeTab, setActiveTab] = useState('home');
  const [agentMode, setAgentMode] = useState('manual');
  const [saved, setSaved] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'settings' && currentStepIndex === 0) {
      advanceStep(); // Step 1 complete: Settings Opened
    }
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);

    if (agentMode === 'assisted' && currentStepIndex === 1) {
      advanceStep(); // Step 2 complete: Correct Mode Saved
    }
  };

  return (
    <div className="w-full h-full bg-gray-50 flex flex-col p-4 rounded-lg relative overflow-hidden">
      {/* Top Nav */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
            onClick={() => handleTabClick('home')}
            className={`px-4 py-2 font-medium ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
            Home
        </button>
        <button
            id="settings-tab"
            onClick={() => handleTabClick('settings')}
            className={`px-4 py-2 font-medium ${activeTab === 'settings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
            {t('menu.settings')}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 bg-white rounded shadow-sm border border-gray-100">
        {activeTab === 'home' && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <span className="text-4xl mb-4">🏠</span>
                <p>{t('ui.my_workspaces')}</p>
            </div>
        )}

        {activeTab === 'settings' && (
            <div className="max-w-md mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">{t('menu.settings')}</h3>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">{t('ui.agent_mode')}</label>
                    <div className="space-y-2">
                        {/* Manual */}
                        <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50 transition-colors">
                            <input
                                type="radio"
                                name="mode"
                                value="manual"
                                checked={agentMode === 'manual'}
                                onChange={(e) => setAgentMode(e.target.value)}
                                className="w-4 h-4 text-blue-600"
                            />
                            <div className="ml-3">
                                <span className="block text-sm font-medium text-gray-900">{t('ui.mode_manual')}</span>
                                <span className="block text-xs text-gray-500">{t('ui.desc_manual')}</span>
                            </div>
                        </label>

                        {/* Assisted */}
                        <label className={`flex items-center p-3 border rounded cursor-pointer transition-colors ${agentMode === 'assisted' ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'}`}>
                            <input
                                type="radio"
                                name="mode"
                                value="assisted"
                                checked={agentMode === 'assisted'}
                                onChange={(e) => setAgentMode(e.target.value)}
                                className="w-4 h-4 text-blue-600"
                            />
                            <div className="ml-3">
                                <span className="block text-sm font-medium text-gray-900">{t('ui.mode_assisted')}</span>
                                <span className="block text-xs text-gray-500">{t('ui.desc_assisted')}</span>
                            </div>
                        </label>

                        {/* Automatic */}
                        <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50 transition-colors">
                            <input
                                type="radio"
                                name="mode"
                                value="automatic"
                                checked={agentMode === 'automatic'}
                                onChange={(e) => setAgentMode(e.target.value)}
                                className="w-4 h-4 text-blue-600"
                            />
                            <div className="ml-3">
                                <span className="block text-sm font-medium text-gray-900">{t('ui.mode_auto')}</span>
                                <span className="block text-xs text-gray-500">{t('ui.desc_auto')}</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div className="flex justify-end items-center gap-4">
                    {saved && <span className="text-green-600 text-sm font-medium animate-fade-out">{t('ui.settings_saved')}</span>}
                    <button
                        id="save-settings"
                        onClick={handleSave}
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium transition-colors"
                    >
                        {t('ui.save_settings')}
                    </button>
                </div>
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

export default Mission3View;
