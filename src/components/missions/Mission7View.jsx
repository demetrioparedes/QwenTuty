import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';
import Terminal from '../terminal/Terminal';

const Mission7View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [showPlan, setShowPlan] = useState(false);
  const [commentAdded, setCommentAdded] = useState(false);
  const [history, setHistory] = useState([
    { type: 'output', text: 'Agent ready.' }
  ]);

  const handleCommand = (cmd, reply) => {
    // Check for "todo", "list", "lista", "tareas"
    if (/todo|list|lista|tareas/i.test(cmd)) {
        if (currentStepIndex === 0) {
            reply(t('ui.cmd_processing'));
            setTimeout(() => {
                reply("Generating plan...");
                setShowPlan(true);
                advanceStep();
            }, 1000);
        } else {
            reply("Plan already generated.");
        }
    } else {
        reply(t('ui.cmd_unknown', { cmd }));
    }
  };

  const handlePlanClick = () => {
    if (showPlan && !commentAdded && currentStepIndex === 1) {
        setCommentAdded(true);
        advanceStep();
    }
  };

  return (
    <div className="w-full h-full flex bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
      {/* Left: Terminal */}
      <div className="w-1/3 border-r border-gray-700 flex flex-col">
        <div className="bg-gray-800 p-2 text-xs text-gray-400 uppercase font-bold tracking-wider border-b border-gray-700">
            Chat / Terminal
        </div>
        <Terminal
            id="chat-input"
            onCommand={handleCommand}
            history={history}
            className="flex-1"
        />
      </div>

      {/* Right: Plan */}
      <div className="w-2/3 bg-white p-8 overflow-y-auto relative">
        {!showPlan ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <span className="text-6xl mb-4">📄</span>
                <p>Waiting for plan...</p>
            </div>
        ) : (
            <div
                id="plan-document"
                className="max-w-2xl mx-auto border p-8 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors relative"
                onClick={handlePlanClick}
            >
                <h1 className="text-2xl font-bold mb-4 border-b pb-2">{t('ui.plan')}</h1>
                <div className="space-y-4 text-gray-700">
                    <p><strong>Goal:</strong> Create a landing page.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Set up React project</li>
                        <li>Install Tailwind CSS</li>
                        <li className="relative group">
                            Design Hero section
                            {commentAdded && (
                                <div className="absolute left-full top-0 ml-4 bg-yellow-100 p-2 rounded shadow text-xs w-32 border border-yellow-300 animate-in slide-in-from-left">
                                    <strong>Cadet:</strong> Change color to blue.
                                </div>
                            )}
                            {!commentAdded && (
                                <div className="hidden group-hover:block absolute left-full top-0 ml-4 bg-gray-800 text-white p-1 rounded text-xs w-24 text-center">
                                    {t('ui.add_comment')}
                                </div>
                            )}
                        </li>
                        <li>Deploy to Firebase</li>
                    </ul>
                </div>
            </div>
        )}

        {missionStatus === 'completed' && (
            <div className="absolute bottom-8 right-8 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce z-20">
                ✓ {t('ui.mission_completed')}
            </div>
        )}
      </div>
    </div>
  );
};

export default Mission7View;
