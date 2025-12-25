import { create } from 'zustand';

export const useGameStore = create((set) => ({
  user: {
    name: 'Cadet',
    xp: 0,
    badges: [],
  },
  currentMissionId: 'mission-1',
  missionStatus: 'active', // active, completed, failed

  completeMission: (missionId, xpReward) => set((state) => ({
    user: {
      ...state.user,
      xp: state.user.xp + xpReward,
      badges: [...state.user.badges, missionId] // Simplified badge logic
    },
    missionStatus: 'completed'
  })),

  setMission: (missionId) => set({ currentMissionId: missionId, missionStatus: 'active' }),
}));
