import React from 'react';
import { useTranslation } from 'react-i18next';
import MissionView from './components/MissionView';
import { useGameStore } from './stores/useGameStore';

function App() {
  const { user, currentMissionId, missionStatus, getCurrentStep, startNextMission } = useGameStore();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-space-900 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-6xl flex justify-between items-center mb-6">
        <div>
            <h1 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {t('app.title')}
            <span className="text-white text-lg block font-sans font-normal">{t('app.subtitle')}</span>
            </h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="bg-gray-800 text-gray-300 hover:text-white px-3 py-1 rounded border border-gray-600 text-sm"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <div className="bg-gray-800 px-4 py-2 rounded-full border border-secondary">
            <span className="text-secondary font-bold">{t('app.cadet')}: </span>
            <span className="text-white">{user.name}</span>
          </div>
          <div className="bg-gray-800 px-4 py-2 rounded-full border border-accent">
            <span className="text-accent font-bold">{t('app.xp')}: </span>
            <span className="text-white">{user.xp}</span>
          </div>
        </div>
      </header>

      <main className="flex gap-6 w-full max-w-6xl">
        <div className="flex-1">
          <MissionView />
        </div>

        <aside className="w-80 bg-gray-900/80 p-6 rounded-xl border border-primary backdrop-blur-sm h-fit">
          <h2 className="text-2xl font-bold text-secondary mb-4">{t('menu.mission_control')}</h2>

          {/* Mission Info Card */}
          <div className="bg-black/50 p-4 rounded-lg border border-gray-700 mb-4">
            <h3 className="text-primary font-bold mb-2">{t('menu.current_objective')}:</h3>
            <p className="text-white font-bold text-sm">
                {t(`missions.${currentMissionId.replace('mission-', 'm')}.title`)}
            </p>
            <p className="text-gray-400 text-xs mt-1 mb-4">
                {t(`missions.${currentMissionId.replace('mission-', 'm')}.desc`)}
            </p>

            {/* Dynamic Step Instruction */}
            {missionStatus === 'active' && getCurrentStep() && (
                <div className="bg-blue-900/30 border-l-4 border-blue-500 p-2">
                    <p className="text-blue-200 text-sm">
                        {t(getCurrentStep().instructionKey)}
                    </p>
                </div>
            )}

            {missionStatus === 'completed' && (
                <div className="bg-green-900/30 border-l-4 border-green-500 p-2 animate-pulse">
                    <p className="text-green-200 text-sm font-bold">
                        {t('ui.mission_completed')}
                    </p>
                </div>
            )}
          </div>

          <div className="space-y-4">
            {missionStatus === 'completed' ? (
                <button
                    onClick={startNextMission}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded transition-colors shadow-lg shadow-green-500/20 animate-pulse"
                >
                    {t('ui.next_mission')} →
                </button>
            ) : (
                <button className="w-full bg-primary hover:bg-purple-600 text-white font-bold py-3 px-4 rounded transition-colors shadow-lg shadow-purple-500/20">
                    {t('menu.start_mission')}
                </button>
            )}

            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded transition-colors">
              {t('menu.access_terminal')}
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
