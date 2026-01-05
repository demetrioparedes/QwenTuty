export const MISSIONS = {
  'mission-1': {
    id: 'mission-1',
    level: 1,
    titleKey: 'missions.m1.title',
    descKey: 'missions.m1.desc',
    badgeId: 'pilot',
    xpReward: 50,
    videoUrl: 'https://youtu.be/q2xmNzOzpQw',
    steps: [
      {
        id: 'install_app',
        instructionKey: 'steps.m1.step1',
        type: 'interaction',
        targetId: 'install-btn',
        trigger: 'click'
      },
      {
        id: 'open_app',
        instructionKey: 'steps.m1.step2',
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
    videoUrl: 'https://youtu.be/q2xmNzOzpQw',
    steps: [
      {
        id: 'new_workspace',
        instructionKey: 'steps.m2.step1',
        type: 'interaction',
        targetId: 'new-workspace-btn',
        trigger: 'click'
      },
      {
        id: 'enter_name',
        instructionKey: 'steps.m2.step2',
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
    videoUrl: 'https://youtu.be/q2xmNzOzpQw',
    steps: [
      {
        id: 'open_settings',
        instructionKey: 'steps.m3.step1',
        type: 'interaction',
        targetId: 'settings-tab',
        trigger: 'click'
      },
      {
        id: 'select_mode',
        instructionKey: 'steps.m3.step2',
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
    videoUrl: 'https://youtu.be/BHkubCCCZtY',
    steps: [
      {
        id: 'visit_url',
        instructionKey: 'steps.m4.step1',
        type: 'terminal',
        targetId: 'terminal-input',
        trigger: 'command',
        expectedCommand: /visita?r?\s+google\.com/i
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
    videoUrl: 'https://youtu.be/BHkubCCCZtY',
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
    videoUrl: 'https://youtu.be/BHkubCCCZtY',
    steps: [
      {
        id: 'nav_inbox',
        instructionKey: 'steps.m6.step1',
        type: 'interaction',
        targetId: 'inbox-btn',
        trigger: 'click'
      }
    ]
  },
  'mission-7': {
    id: 'mission-7',
    level: 3,
    titleKey: 'missions.m7.title',
    descKey: 'missions.m7.desc',
    badgeId: 'architect',
    xpReward: 150,
    videoUrl: 'https://youtu.be/9o35pSNLJEQ',
    steps: [
      {
        id: 'request_todo',
        instructionKey: 'steps.m7.step1',
        type: 'terminal',
        targetId: 'chat-input',
        trigger: 'command',
        expectedCommand: /lista?|todo|tareas/i
      },
      {
        id: 'add_comment',
        instructionKey: 'steps.m7.step2',
        type: 'interaction',
        targetId: 'plan-document',
        trigger: 'click'
      }
    ]
  },
  'mission-8': {
    id: 'mission-8',
    level: 3,
    titleKey: 'missions.m8.title',
    descKey: 'missions.m8.desc',
    badgeId: 'speedster',
    xpReward: 150,
    videoUrl: 'https://youtu.be/9o35pSNLJEQ',
    steps: [
      {
        id: 'toggle_fast',
        instructionKey: 'steps.m8.step1',
        type: 'interaction',
        targetId: 'fast-mode-toggle',
        trigger: 'click'
      },
      {
        id: 'rename_var',
        instructionKey: 'steps.m8.step2',
        type: 'code',
        targetId: 'editor',
        trigger: 'edit',
        expectedCode: /puntos/
      }
    ]
  },
  'mission-9': {
    id: 'mission-9',
    level: 3,
    titleKey: 'missions.m9.title',
    descKey: 'missions.m9.desc',
    badgeId: 'sorcerer',
    xpReward: 150,
    videoUrl: 'https://youtu.be/9o35pSNLJEQ',
    steps: [
      {
        id: 'trigger_ai',
        instructionKey: 'steps.m9.step1',
        type: 'interaction',
        targetId: 'ai-trigger',
        trigger: 'click'
      },
      {
        id: 'gen_code',
        instructionKey: 'steps.m9.step2',
        type: 'interaction',
        targetId: 'ai-input',
        trigger: 'submit'
      }
    ]
  },
  'mission-10': {
    id: 'mission-10',
    level: 4,
    titleKey: 'missions.m10.title',
    descKey: 'missions.m10.desc',
    badgeId: 'legislator',
    xpReward: 200,
    videoUrl: 'https://youtu.be/ZZS47MZujSk',
    steps: [
      {
        id: 'open_rules',
        instructionKey: 'steps.m10.step1',
        type: 'interaction',
        targetId: 'file-explorer',
        trigger: 'click'
      },
      {
        id: 'add_rule',
        instructionKey: 'steps.m10.step2',
        type: 'code',
        targetId: 'editor',
        trigger: 'edit',
        expectedCode: /español|spanish/i
      }
    ]
  },
  'mission-11': {
    id: 'mission-11',
    level: 4,
    titleKey: 'missions.m11.title',
    descKey: 'missions.m11.desc',
    badgeId: 'multiprocessor',
    xpReward: 200,
    videoUrl: 'https://youtu.be/ZZS47MZujSk',
    steps: [
      {
        id: 'start_agent1',
        instructionKey: 'steps.m11.step1',
        type: 'interaction',
        targetId: 'agent1-start',
        trigger: 'click'
      },
      {
        id: 'start_agent2',
        instructionKey: 'steps.m11.step2',
        type: 'interaction',
        targetId: 'agent2-start',
        trigger: 'click'
      }
    ]
  },
  'mission-12': {
    id: 'mission-12',
    level: 4,
    titleKey: 'missions.m12.title',
    descKey: 'missions.m12.desc',
    badgeId: 'grandmaster',
    xpReward: 300,
    videoUrl: 'https://youtu.be/ZZS47MZujSk',
    steps: [
      {
        id: 'add_test',
        instructionKey: 'steps.m12.step1',
        type: 'interaction',
        targetId: 'workflow-canvas',
        trigger: 'drop'
      },
      {
        id: 'run_workflow',
        instructionKey: 'steps.m12.step2',
        type: 'interaction',
        targetId: 'run-workflow-btn',
        trigger: 'click'
      }
    ]
  },
  'certification': {
    id: 'certification',
    level: 5,
    titleKey: 'missions.certification.title',
    descKey: 'missions.certification.desc',
    badgeId: 'certified',
    xpReward: 0,
    steps: []
  }
};

export const LEVELS = {
  1: { id: 1, name: 'Novice', minXp: 0 },
  2: { id: 2, name: 'Explorer', minXp: 200 },
  3: { id: 3, name: 'Builder', minXp: 600 },
  4: { id: 4, name: 'Expert', minXp: 1200 }
};
