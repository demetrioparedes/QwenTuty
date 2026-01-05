import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';
import CodeEditor from '../editor/CodeEditor';

const Mission8View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [fastMode, setFastMode] = useState(false);
  const [code, setCode] = useState(`// Game Score Logic
let score = 0;

function addScore(points) {
  score += points;
  console.log("New score: " + score);
}
`);

  const handleToggle = () => {
    const newMode = !fastMode;
    setFastMode(newMode);
    if (newMode && currentStepIndex === 0) {
      advanceStep();
    }
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    if (currentStepIndex === 1) {
       // Check if 'score' was replaced by 'puntos'
       // Simple check: 'score' count decreased or 'puntos' exists
       if (newCode.includes('puntos') && !newCode.includes('score')) {
           advanceStep();
       } else if (newCode.includes('puntos')) {
           // Maybe partial match, wait for full replace
           // Or just check if 'let puntos' exists
           if (/let\s+puntos\s*=/.test(newCode)) {
               advanceStep();
           }
       }
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden">
        {/* Toolbar */}
        <div className="bg-gray-800 p-2 flex justify-between items-center border-b border-gray-700">
            <div className="text-gray-400 text-sm font-mono">game.js</div>
            <button
                id="fast-mode-toggle"
                onClick={handleToggle}
                className={`px-3 py-1 rounded text-sm font-bold flex items-center gap-2 transition-colors ${fastMode ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50' : 'bg-gray-700 text-gray-300'}`}
            >
                <span>⚡</span> {fastMode ? t('ui.fast_mode') : t('ui.slow_mode')}
            </button>
        </div>

        {/* Editor */}
        <div id="editor" className="flex-1 relative">
            <CodeEditor
                initialValue={code}
                onChange={handleCodeChange}
                language="javascript"
            />

            {missionStatus === 'completed' && (
                <div className="absolute bottom-8 right-8 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce z-20">
                    ✓ {t('ui.mission_completed')}
                </div>
            )}
        </div>
    </div>
  );
};

export default Mission8View;
