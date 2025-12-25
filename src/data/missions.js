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
  },
  'mission-4': {
    id: 'mission-4',
    level: 2,
    titleKey: 'missions.m4.title',
    descKey: 'missions.m4.desc',
    badgeId: 'navigator',
    xpReward: 100,
    steps: [
      {
        id: 'visit_url',
        instructionKey: 'steps.m4.step1', // "Type visit google.com"
        type: 'terminal',
        targetId: 'terminal-input',
        trigger: 'command',
        expectedCommand: /visita?r?\s+google\.com/i // Regex for flexibility
      }
    ]
  },
  'mission-5': {
    id: 'mission-5',
    level: 2,
    titleKey: 'missions.m5.title',
    descKey: 'missions.m5.desc',
    badgeId: 'detective',
    xpReward: 100,
    steps: [
      {
        id: 'open_artifacts',
        instructionKey: 'steps.m5.step1',
        type: 'interaction',
        targetId: 'artifacts-tab',
        trigger: 'click'
      },
      {
        id: 'view_image',
        instructionKey: 'steps.m5.step2',
        type: 'interaction',
        targetId: 'artifact-item',
        trigger: 'click'
      }
    ]
  },
  'mission-6': {
    id: 'mission-6',
    level: 2,
    titleKey: 'missions.m6.title',
    descKey: 'missions.m6.desc',
    badgeId: 'messenger',
    xpReward: 100,
    steps: [
      {
        id: 'nav_inbox',
        instructionKey: 'steps.m6.step1',
        type: 'interaction',
        targetId: 'inbox-btn',
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
