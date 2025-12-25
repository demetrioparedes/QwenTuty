import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../stores/useGameStore';
import Mission1View from './missions/Mission1View';
import Mission2View from './missions/Mission2View';
import Mission3View from './missions/Mission3View';
import Mission4View from './missions/Mission4View';
import Mission5View from './missions/Mission5View';
import Mission6View from './missions/Mission6View';

const MissionView = () => {
  const { currentMissionId } = useGameStore();
  const { t } = useTranslation();

  const renderMission = () => {
    switch (currentMissionId) {
      case 'mission-1':
        return <Mission1View />;
      case 'mission-2':
        return <Mission2View />;
      case 'mission-3':
        return <Mission3View />;
      case 'mission-4':
        return <Mission4View />;
      case 'mission-5':
        return <Mission5View />;
      case 'mission-6':
        return <Mission6View />;
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
