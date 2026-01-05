import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Load placeholder assets
    this.load.setBaseURL('https://labs.phaser.io');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('sky', 'assets/skies/space3.png');
  }

  create() {
    this.scene.start('MainScene');
  }
}
