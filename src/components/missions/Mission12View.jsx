import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';

const Mission12View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [workflow, setWorkflow] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [passed, setPassed] = useState(false);

  const handleAddBlock = (block) => {
    if (workflow.find(b => b.id === block.id)) return;
    setWorkflow([...workflow, block]);

    if (block.id === 'test' && currentStepIndex === 0) {
      advanceStep();
    }
  };

  const handleRun = () => {
    if (workflow.length === 0) return;
    setIsRunning(true);

    setTimeout(() => {
        setIsRunning(false);
        setPassed(true);
        if (currentStepIndex === 1) {
            advanceStep();
        }
    }, 2000);
  };

  return (
    <div className="w-full h-full flex bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        {/* Sidebar: Blocks */}
        <div className="w-1/4 bg-white border-r border-gray-200 p-4 flex flex-col gap-4">
            <h3 className="font-bold text-gray-500 uppercase text-xs mb-2">Blocks</h3>
            <div
                id="workflow-canvas" // For test targeting
                onClick={() => handleAddBlock({ id: 'test', label: 'Run Tests', icon: '🧪', color: 'bg-yellow-500' })}
                className="bg-white border-2 border-dashed border-gray-300 p-3 rounded cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors flex items-center gap-3 shadow-sm"
            >
                <span className="text-xl">🧪</span>
                <span className="font-bold text-gray-700">Test Unit</span>
            </div>
            <div className="bg-white border-2 border-dashed border-gray-300 p-3 rounded cursor-not-allowed opacity-50 flex items-center gap-3 shadow-sm">
                <span className="text-xl">🚀</span>
                <span className="font-bold text-gray-700">Deploy</span>
            </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-gray-100 p-8 flex flex-col items-center relative">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">{t('ui.workflow')}</h2>

            <div className="flex-1 w-full max-w-md bg-white rounded-xl shadow-inner border border-gray-200 p-6 flex flex-col items-center gap-4 relative">
                {/* Start Node */}
                <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">START</div>
                <div className="h-8 w-1 bg-gray-300"></div>

                {/* Workflow Blocks */}
                {workflow.map((block, index) => (
                    <React.Fragment key={block.id}>
                        <div className={`${block.color} text-white px-6 py-4 rounded-lg font-bold shadow-lg w-full text-center flex items-center justify-center gap-2 animate-in slide-in-from-bottom`}>
                            <span>{block.icon}</span>
                            {block.label}
                            {passed && <span className="ml-auto bg-white/20 px-2 py-1 rounded text-xs">✓ OK</span>}
                        </div>
                        <div className="h-8 w-1 bg-gray-300"></div>
                    </React.Fragment>
                ))}

                {/* End Node */}
                <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">END</div>
            </div>

            <button
                id="run-workflow-btn"
                onClick={handleRun}
                disabled={workflow.length === 0 || isRunning || passed}
                className={`mt-8 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all ${
                    isRunning ? 'bg-gray-400 cursor-wait' :
                    passed ? 'bg-green-500 hover:bg-green-600' :
                    'bg-blue-600 hover:bg-blue-500 hover:scale-105'
                } text-white disabled:opacity-50`}
            >
                {isRunning ? t('ui.cmd_processing') : passed ? t('ui.test_passed') : t('ui.run_workflow')}
            </button>
        </div>

        {missionStatus === 'completed' && (
            <div className="absolute bottom-8 right-8 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce z-20">
                ✓ {t('ui.mission_completed')}
            </div>
        )}
    </div>
  );
};

export default Mission12View;
