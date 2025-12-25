import Phaser from 'phaser';
import i18next from 'i18next';

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

    const title = i18next.t('app.subtitle') || 'Robot Boss Academy';
    const text = this.add.text(400, 300, title, {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Arial'
    });
    text.setOrigin(0.5);
  }
}
