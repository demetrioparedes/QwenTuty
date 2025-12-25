import { create } from 'zustand';
import { MISSIONS } from '../data/missions';

export const useGameStore = create((set, get) => ({
  user: {
    name: 'Cadet',
    xp: 0,
    badges: [],
    completedMissions: []
  },

  // Mission State
  currentMissionId: 'mission-1',
  missionStatus: 'active', // active, completed, failed
  currentStepIndex: 0,

  // Actions
  completeMission: () => {
    const { currentMissionId, user } = get();
    const mission = MISSIONS[currentMissionId];

    if (!mission) return;

    // Avoid double completion
    if (user.completedMissions.includes(currentMissionId)) return;

    set((state) => ({
      user: {
        ...state.user,
        xp: state.user.xp + mission.xpReward,
        badges: [...state.user.badges, mission.badgeId],
        completedMissions: [...state.user.completedMissions, currentMissionId]
      },
      missionStatus: 'completed'
    }));
  },

  setMission: (missionId) => set({
    currentMissionId: missionId,
    missionStatus: 'active',
    currentStepIndex: 0
  }),

  advanceStep: () => {
    const { currentMissionId, currentStepIndex } = get();
    const mission = MISSIONS[currentMissionId];

    if (!mission) return;

    const nextIndex = currentStepIndex + 1;

    if (nextIndex >= mission.steps.length) {
        // Mission Finished
        get().completeMission();
    } else {
        set({ currentStepIndex: nextIndex });
    }
  },

  getCurrentStep: () => {
    const { currentMissionId, currentStepIndex } = get();
    const mission = MISSIONS[currentMissionId];
    if (!mission || !mission.steps) return null;
    return mission.steps[currentStepIndex];
  }
}));
