import { describe, it, expect, beforeEach } from 'vitest';
import { useGameStore } from './useGameStore';

describe('useGameStore', () => {
  beforeEach(() => {
    useGameStore.getState().resetProgress();
  });

  it('should initialize with default state', () => {
    const state = useGameStore.getState();
    expect(state.user.xp).toBe(0);
    expect(state.currentMissionId).toBe('mission-1');
  });

  it('should complete mission and award xp', () => {
    const store = useGameStore.getState();
    store.completeMission();

    const newState = useGameStore.getState();
    expect(newState.user.xp).toBe(50); // M1 reward
    expect(newState.missionStatus).toBe('completed');
    expect(newState.user.badges).toContain('pilot');
  });

  it('should not award double xp for same mission', () => {
    const store = useGameStore.getState();
    store.completeMission();
    store.completeMission(); // Second time

    const newState = useGameStore.getState();
    expect(newState.user.xp).toBe(50); // Still 50
  });

  it('should advance steps', () => {
    const store = useGameStore.getState();
    expect(store.currentStepIndex).toBe(0);

    store.advanceStep();
    expect(useGameStore.getState().currentStepIndex).toBe(1);
  });
});
