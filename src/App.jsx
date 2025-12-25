import React from 'react';
import GameComponent from './components/GameComponent';
import { useGameStore } from './stores/useGameStore';

function App() {
  const { user, currentMissionId } = useGameStore();

  return (
    <div className="min-h-screen bg-space-900 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-6xl flex justify-between items-center mb-6">
        <h1 className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          ANTIGRAVITY
          <span className="text-white text-lg block font-sans font-normal">Robot Boss Academy</span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="bg-gray-800 px-4 py-2 rounded-full border border-secondary">
            <span className="text-secondary font-bold">Cadet: </span>
            <span className="text-white">{user.name}</span>
          </div>
          <div className="bg-gray-800 px-4 py-2 rounded-full border border-accent">
            <span className="text-accent font-bold">XP: </span>
            <span className="text-white">{user.xp}</span>
          </div>
        </div>
      </header>

      <main className="flex gap-6 w-full max-w-6xl">
        <div className="flex-1">
          <GameComponent />
        </div>

        <aside className="w-80 bg-gray-900/80 p-6 rounded-xl border border-primary backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-secondary mb-4">Mission Control</h2>
          <div className="bg-black/50 p-4 rounded-lg border border-gray-700 mb-4">
            <h3 className="text-primary font-bold mb-2">Current Objective:</h3>
            <p className="text-gray-300 text-sm">{currentMissionId}</p>
          </div>

          <div className="space-y-4">
            <button className="w-full bg-primary hover:bg-purple-600 text-white font-bold py-3 px-4 rounded transition-colors shadow-lg shadow-purple-500/20">
              Start Mission
            </button>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded transition-colors">
              Access Terminal
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
