import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';

const Mission6View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [view, setView] = useState('chat'); // chat or inbox

  const handleInboxClick = () => {
    setView('inbox');
    if (currentStepIndex === 0) {
      advanceStep();
    }
  };

  const handleChatSelect = () => {
    setView('chat');
    // Mission completes on returning to a chat (or selecting one)
    // The requirement is "Navigate between chats using Inbox".
    // If step 1 is "Go to Inbox", maybe step 2 is "Select chat".
    // Wait, mission data only has 1 step "nav_inbox".
    // Let's check missions.js.
    // 'nav_inbox' trigger 'click'.
    // So just clicking Inbox completes it?
    // "Win Condition: Return to original conversation" implies multiple steps.
    // I should probably add a second step to mission 6 in missions.js if I want that.
    // But currently only 1 step defined.
    // I'll stick to the defined step for simplicity or update missions.js.
    // Let's update missions.js to be more engaging.
  };

  return (
    <div className="w-full h-full flex bg-white rounded-lg overflow-hidden border border-gray-200">
       {/* Sidebar */}
       <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200 font-bold text-gray-700 flex justify-between items-center">
                <span>Antigravity</span>
                <button
                    id="inbox-btn"
                    onClick={handleInboxClick}
                    className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200"
                >
                    {t('ui.inbox')}
                </button>
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="p-3 bg-blue-50 border-l-4 border-blue-500 cursor-pointer">
                    <div className="font-bold text-sm text-gray-800">Agent Alpha</div>
                    <div className="text-xs text-gray-500 truncate">I finished the task...</div>
                </div>
                <div className="p-3 hover:bg-gray-100 cursor-pointer text-gray-600">
                    <div className="font-bold text-sm">Agent Beta</div>
                    <div className="text-xs text-gray-400 truncate">Waiting for input...</div>
                </div>
            </div>
       </div>

       {/* Main Chat */}
       <div className="flex-1 flex flex-col">
            {view === 'chat' && (
                <>
                    <div className="p-4 border-b border-gray-200 font-bold text-gray-800">
                        Agent Alpha
                    </div>
                    <div className="flex-1 p-4 space-y-4">
                        <div className="flex justify-end">
                            <div className="bg-blue-600 text-white p-3 rounded-lg rounded-tr-none max-w-xs text-sm">
                                {t('m4.step1')}
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-xs text-sm">
                                Done! I visited google.com.
                            </div>
                        </div>
                    </div>
                </>
            )}

            {view === 'inbox' && (
                <div className="flex-1 p-8">
                    <h2 className="text-2xl font-bold mb-4">{t('ui.inbox')}</h2>
                    <div className="space-y-2">
                         <div onClick={handleChatSelect} className="p-4 border rounded hover:bg-gray-50 cursor-pointer flex justify-between">
                            <span className="font-bold">Agent Alpha</span>
                            <span className="text-green-600">Completed</span>
                         </div>
                         <div onClick={handleChatSelect} className="p-4 border rounded hover:bg-gray-50 cursor-pointer flex justify-between">
                            <span className="font-bold">Agent Beta</span>
                            <span className="text-yellow-600">Idle</span>
                         </div>
                    </div>
                </div>
            )}
       </div>

       {missionStatus === 'completed' && (
            <div className="absolute bottom-8 right-8 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce z-20">
                ✓ {t('ui.mission_completed')}
            </div>
       )}
    </div>
  );
};

export default Mission6View;
