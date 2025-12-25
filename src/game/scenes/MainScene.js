import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    this.add.image(400, 300, 'sky');
    const logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: "Power2",
        yoyo: true,
        loop: -1
    });

    const text = this.add.text(400, 300, 'Antigravity Robot Boss Academy', {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Arial'
    });
    text.setOrigin(0.5);
  }
}
