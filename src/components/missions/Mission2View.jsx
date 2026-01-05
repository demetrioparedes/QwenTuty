import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGameStore } from '../../stores/useGameStore';

const Mission2View = () => {
  const { t } = useTranslation();
  const { currentStepIndex, advanceStep, missionStatus } = useGameStore();
  const [showModal, setShowModal] = useState(false);
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaces, setWorkspaces] = useState([]);

  const handleNewClick = () => {
    if (currentStepIndex === 0) {
      advanceStep(); // Move to "Enter name" step
    }
    setShowModal(true);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    if (workspaceName.trim().length > 0) {
      setWorkspaces([...workspaces, { id: Date.now(), name: workspaceName }]);
      setShowModal(false);
      setWorkspaceName('');
      if (currentStepIndex === 1) {
        advanceStep(); // Mission Complete
      }
    }
  };

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col p-8 rounded-lg relative overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        {t('ui.my_workspaces')}
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {/* New Workspace Button */}
        <button
            id="new-workspace-btn"
            onClick={handleNewClick}
            disabled={missionStatus === 'completed'}
            className="aspect-square border-2 border-dashed border-gray-400 rounded-xl flex flex-col items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all group"
        >
            <div className="w-12 h-12 rounded-full bg-gray-200 group-hover:bg-blue-100 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold">+</span>
            </div>
            <span className="font-medium">{t('ui.new_workspace')}</span>
        </button>

        {/* Existing Workspaces */}
        {workspaces.map(ws => (
            <div key={ws.id} className="aspect-square bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col items-center justify-center">
                <div className="w-16 h-16 text-yellow-500 mb-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                    </svg>
                </div>
                <span className="font-medium text-gray-700 truncate w-full text-center">{ws.name}</span>
            </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 backdrop-blur-sm">
            <form onSubmit={handleCreate} className="bg-white p-6 rounded-lg shadow-xl w-96 animate-in fade-in zoom-in duration-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{t('ui.new_workspace')}</h3>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('ui.workspace_name')}</label>
                    <input
                        type="text"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-800"
                        placeholder="e.g. BaseMarte"
                        autoFocus
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                    >
                        {t('ui.cancel')}
                    </button>
                    <button
                        id="create-btn"
                        type="submit"
                        disabled={workspaceName.trim().length === 0}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {t('ui.create')}
                    </button>
                </div>
            </form>
        </div>
      )}

      {missionStatus === 'completed' && (
        <div className="absolute bottom-8 right-8 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold shadow-lg animate-bounce">
            ✓ {t('ui.mission_completed')}
        </div>
      )}
    </div>
  );
};

export default Mission2View;
