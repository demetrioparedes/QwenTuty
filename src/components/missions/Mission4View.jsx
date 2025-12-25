import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';
import Terminal from '../terminal/Terminal';

const Mission4View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [browserUrl, setBrowserUrl] = useState('antigravity://new-tab');
  const [browserContent, setBrowserContent] = useState('blank');
  const [history, setHistory] = useState([
    { type: 'output', text: 'Antigravity Shell v1.0.0' },
    { type: 'output', text: 'Type a command to start.' }
  ]);

  const handleCommand = (cmd, reply) => {
    // Check if command matches "visit google.com"
    // Regex allows "visit" or "visitar" and optional http/www
    const visitRegex = /^(visit|visitar)\s+(https?:\/\/)?(www\.)?google\.com$/i;

    if (visitRegex.test(cmd)) {
        reply(t('ui.cmd_processing'));
        setBrowserUrl('https://google.com');
        setTimeout(() => {
            setBrowserContent('google');
            reply('Loaded: google.com');
            if (currentStepIndex === 0) {
                advanceStep();
            }
        }, 1000);
    } else {
        reply(t('ui.cmd_unknown', { cmd }));
    }
  };

  return (
    <div className="w-full h-full flex bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
      {/* Left: Terminal */}
      <div className="w-1/3 border-r border-gray-700 flex flex-col">
        <div className="bg-gray-800 p-2 text-xs text-gray-400 uppercase font-bold tracking-wider border-b border-gray-700">
            Terminal
        </div>
        <Terminal
            onCommand={handleCommand}
            history={history}
            className="flex-1"
        />
      </div>

      {/* Right: Browser */}
      <div className="w-2/3 flex flex-col bg-gray-100">
        {/* Address Bar */}
        <div className="bg-gray-200 p-2 flex items-center gap-2 border-b border-gray-300">
            <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 shadow-inner flex items-center gap-2">
                <span className="text-gray-400">🔒</span>
                {browserUrl}
            </div>
        </div>

        {/* Browser Content */}
        <div className="flex-1 p-4 relative overflow-hidden">
            {browserContent === 'blank' && (
                <div className="h-full flex flex-col items-center justify-center text-gray-400">
                    <span className="text-6xl mb-4">🌍</span>
                    <p>{t('ui.browser_address')}</p>
                </div>
            )}

            {browserContent === 'google' && (
                <div className="h-full flex flex-col items-center justify-center bg-white rounded shadow-sm border animate-in fade-in zoom-in duration-500">
                    <span className="text-5xl font-bold mb-4">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">o</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">g</span>
                        <span className="text-green-500">l</span>
                        <span className="text-red-500">e</span>
                    </span>
                    <div className="w-96 h-10 border rounded-full shadow-inner bg-gray-50"></div>
                    <div className="flex gap-4 mt-4">
                        <div className="w-32 h-8 bg-gray-100 rounded"></div>
                        <div className="w-32 h-8 bg-gray-100 rounded"></div>
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
    </div>
  );
};

export default Mission4View;
