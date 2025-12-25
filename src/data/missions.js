export const MISSIONS = {
  'mission-1': {
    id: 'mission-1',
    level: 1,
    titleKey: 'missions.m1.title',
    descKey: 'missions.m1.desc',
    badgeId: 'pilot',
    xpReward: 50,
    steps: [
      {
        id: 'install_app',
        instructionKey: 'steps.m1.step1', // "Install Antigravity"
        type: 'interaction',
        targetId: 'install-btn',
        trigger: 'click'
      },
      {
        id: 'open_app',
        instructionKey: 'steps.m1.step2', // "Open the app"
        type: 'interaction',
        targetId: 'open-btn',
        trigger: 'click'
      }
    ]
  },
  'mission-2': {
    id: 'mission-2',
    level: 1,
    titleKey: 'missions.m2.title',
    descKey: 'missions.m2.desc',
    badgeId: 'organizer',
    xpReward: 75,
    steps: [
      {
        id: 'new_workspace',
        instructionKey: 'steps.m2.step1', // "Click New Workspace"
        type: 'interaction',
        targetId: 'new-workspace-btn',
        trigger: 'click'
      },
      {
        id: 'enter_name',
        instructionKey: 'steps.m2.step2', // "Enter name and create"
        type: 'form',
        targetId: 'create-btn',
        trigger: 'submit'
      }
    ]
  },
  'mission-3': {
    id: 'mission-3',
    level: 1,
    titleKey: 'missions.m3.title',
    descKey: 'missions.m3.desc',
    badgeId: 'guardian',
    xpReward: 75,
    steps: [
      {
        id: 'open_settings',
        instructionKey: 'steps.m3.step1', // "Go to Settings"
        type: 'interaction',
        targetId: 'settings-tab',
        trigger: 'click'
      },
      {
        id: 'select_mode',
        instructionKey: 'steps.m3.step2', // "Select Assisted Mode"
        type: 'form',
        targetId: 'save-settings',
        trigger: 'click'
      }
    ]
  }
};

export const LEVELS = {
  1: { id: 1, name: 'Novice', minXp: 0 },
  2: { id: 2, name: 'Explorer', minXp: 200 },
  3: { id: 3, name: 'Builder', minXp: 600 },
  4: { id: 4, name: 'Expert', minXp: 1200 }
};
