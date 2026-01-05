import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import MainScene from './scenes/MainScene';

export const phaserConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  transparent: true,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [BootScene, MainScene]
};
