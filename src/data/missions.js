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
    steps: [] // To be defined
  },
  'mission-3': {
    id: 'mission-3',
    level: 1,
    titleKey: 'missions.m3.title', // Need to add to translation
    descKey: 'missions.m3.desc',
    badgeId: 'guardian',
    xpReward: 75,
    steps: []
  }
};

export const LEVELS = {
  1: { id: 1, name: 'Novice', minXp: 0 },
  2: { id: 2, name: 'Explorer', minXp: 200 },
  3: { id: 3, name: 'Builder', minXp: 600 },
  4: { id: 4, name: 'Expert', minXp: 1200 }
};
