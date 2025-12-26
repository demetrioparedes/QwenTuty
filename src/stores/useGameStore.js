import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { MISSIONS } from '../data/missions';

export const useGameStore = create(
  persist(
    (set, get) => ({
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

      startNextMission: () => {
        const { currentMissionId } = get();
        // Simple logic for now: extract number and increment
        const currentNum = parseInt(currentMissionId.split('-')[1]);
        const nextId = `mission-${currentNum + 1}`;

        if (MISSIONS[nextId]) {
             set({
                currentMissionId: nextId,
                missionStatus: 'active',
                currentStepIndex: 0
            });
        } else if (currentMissionId === 'mission-12') {
             set({
                currentMissionId: 'certification',
                missionStatus: 'active', // or completed
                currentStepIndex: 0
            });
        }
      },

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
      },

      resetProgress: () => set({
        user: { name: 'Cadet', xp: 0, badges: [], completedMissions: [] },
        currentMissionId: 'mission-1',
        missionStatus: 'active',
        currentStepIndex: 0
      })
    }),
    {
      name: 'antigravity-storage', // unique name
      storage: createJSONStorage(() => localStorage), // use localStorage
      partialize: (state) => ({
        user: state.user,
        currentMissionId: state.currentMissionId
      }),
    }
  )
);
