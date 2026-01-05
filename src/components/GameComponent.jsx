import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { phaserConfig } from '../game/phaserConfig';

const GameComponent = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    if (gameRef.current === null) {
      gameRef.current = new Phaser.Game(phaserConfig);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return (
    <div id="phaser-container" className="rounded-lg overflow-hidden border-4 border-primary shadow-lg shadow-purple-500/50" />
  );
};

export default GameComponent;
