import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../stores/useGameStore';
import Mission1View from './missions/Mission1View';
import Mission2View from './missions/Mission2View';
import Mission3View from './missions/Mission3View';
import Mission4View from './missions/Mission4View';
import Mission5View from './missions/Mission5View';
import Mission6View from './missions/Mission6View';
import Mission7View from './missions/Mission7View';
import Mission8View from './missions/Mission8View';
import Mission9View from './missions/Mission9View';
import Mission10View from './missions/Mission10View';
import Mission11View from './missions/Mission11View';
import Mission12View from './missions/Mission12View';
import CertificationView from './CertificationView';

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
      case 'mission-7':
        return <Mission7View />;
      case 'mission-8':
        return <Mission8View />;
      case 'mission-9':
        return <Mission9View />;
      case 'mission-10':
        return <Mission10View />;
      case 'mission-11':
        return <Mission11View />;
      case 'mission-12':
        return <Mission12View />;
      case 'certification':
        return <CertificationView />;
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
