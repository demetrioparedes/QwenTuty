import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../stores/useGameStore';
import Mission1View from './missions/Mission1View';

const MissionView = () => {
  const { currentMissionId } = useGameStore();
  const { t } = useTranslation();

  const renderMission = () => {
    switch (currentMissionId) {
      case 'mission-1':
        return <Mission1View />;
      case 'mission-2':
        return <div className="text-white text-center p-10">{t('ui.coming_soon')}</div>;
      default:
        return <div className="text-white text-center p-10">{t('ui.select_mission')}</div>;
    }
  };

  return (
    <div className="w-full h-[600px] bg-gray-900 rounded-lg overflow-hidden border-4 border-primary shadow-lg shadow-purple-500/50">
      {renderMission()}
    </div>
  );
};

export default MissionView;
