import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';
import CodeEditor from '../editor/CodeEditor';

const Mission9View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [showAI, setShowAI] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [code, setCode] = useState(`// Math Helper Library

// TODO: Add math functions below
`);

  // Handle Keyboard Shortcut (Cmd+I or Ctrl+I)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'i') {
        e.preventDefault();
        triggerAI();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIndex]);

  const triggerAI = () => {
    setShowAI(true);
    if (currentStepIndex === 0) {
      advanceStep();
    }
  };

  const handleAISubmit = (e) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;

    // Simulate AI generation
    setShowAI(false);
    const newFunction = `
function sum(a, b) {
  return a + b;
}
`;
    setCode(prev => prev + newFunction);

    if (currentStepIndex === 1) {
      advanceStep();
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden relative">
        {/* Editor */}
        <div className="flex-1 relative">
            <CodeEditor
                initialValue={code}
                language="javascript"
                readOnly={false}
            />
        </div>

        {/* AI Trigger Button (Visual Helper) */}
        {!showAI && (
            <button
                id="ai-trigger"
                onClick={triggerAI}
                className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded shadow text-sm hover:bg-blue-500 z-10"
            >
                AI Assist (Cmd+I)
            </button>
        )}

        {/* AI Input Overlay */}
        {showAI && (
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl p-4 z-20 animate-in fade-in zoom-in duration-200">
                <form onSubmit={handleAISubmit}>
                    <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold text-sm">
                        <span>✨</span> Antigravity AI
                    </div>
                    <input
                        id="ai-input"
                        type="text"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder={t('ui.ai_placeholder')}
                        className="w-full bg-black/50 border border-gray-600 rounded p-2 text-white outline-none focus:border-blue-500"
                        autoFocus
                    />
                    <div className="text-xs text-gray-500 mt-2 text-right">Press Enter to generate</div>
                </form>
            </div>
        )}

        {missionStatus === 'completed' && (
            <div className="absolute bottom-8 right-8 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce z-20">
                ✓ {t('ui.mission_completed')}
            </div>
        )}
    </div>
  );
};

export default Mission9View;
