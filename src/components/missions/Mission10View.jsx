import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';
import CodeEditor from '../editor/CodeEditor';

const Mission10View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [fileOpen, setFileOpen] = useState(false);
  const [code, setCode] = useState(`// .cursorrules
// Define how the agent behaves

`);

  const handleFileClick = () => {
    setFileOpen(true);
    if (currentStepIndex === 0) {
      advanceStep();
    }
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    if (currentStepIndex === 1) {
      if (/español|spanish/i.test(newCode)) {
        advanceStep();
      }
    }
  };

  return (
    <div className="w-full h-full flex bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
      {/* Sidebar: File Explorer */}
      <div className="w-1/4 bg-gray-800 border-r border-gray-700 p-4">
        <h3 className="text-gray-400 font-bold mb-4 text-xs uppercase tracking-wider">Project Files</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="pl-4 cursor-default text-gray-500">src/</li>
          <li className="pl-4 cursor-default text-gray-500">public/</li>
          <li className="pl-4 cursor-default text-gray-500">package.json</li>
          <li
            id="file-explorer"
            onClick={handleFileClick}
            className={`pl-4 cursor-pointer hover:bg-gray-700 p-1 rounded flex items-center gap-2 ${fileOpen ? 'bg-gray-700 text-white font-bold' : ''}`}
          >
            <span>⚙️</span> .cursorrules
          </li>
        </ul>
      </div>

      {/* Main: Editor */}
      <div className="flex-1 bg-gray-900 relative">
        {fileOpen ? (
          <div id="editor" className="h-full">
             <div className="bg-gray-800 text-gray-400 text-xs px-4 py-2 border-b border-gray-700">
                .cursorrules
             </div>
             <CodeEditor
                initialValue={code}
                onChange={handleCodeChange}
                language="plaintext"
             />
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            {t('ui.open_file')}
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

export default Mission10View;
