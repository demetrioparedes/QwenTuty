import Phaser from 'phaser';
import i18next from 'i18next';
import { useGameStore } from '../../stores/useGameStore';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    this.add.image(400, 300, 'sky');

    // Robot Group
    this.robot = this.add.container(400, 300);

    // Body
    const body = this.add.rectangle(0, 0, 60, 80, 0x7B68EE);
    this.robot.add(body);

    // Head
    const head = this.add.rectangle(0, -50, 50, 40, 0x00D4FF);
    this.robot.add(head);

    // Eyes
    const leftEye = this.add.circle(-10, -50, 5, 0xffffff);
    const rightEye = this.add.circle(10, -50, 5, 0xffffff);
    this.robot.add(leftEye);
    this.robot.add(rightEye);

    // Title Text
    const title = i18next.t('app.subtitle') || 'Robot Boss Academy';
    const text = this.add.text(400, 100, title, {
        fontSize: '24px',
        fill: '#fff',
        fontFamily: '"Quattrocento Sans", sans-serif'
    });
    text.setOrigin(0.5);

    // Initial Animation (Idle)
    this.idleTween = this.tweens.add({
        targets: this.robot,
        y: 310,
        duration: 1500,
        yoyo: true,
        loop: -1,
        ease: 'Sine.easeInOut'
    });

    // Subscribe to store
    this.unsubscribe = useGameStore.subscribe((state) => {
        this.handleStateChange(state.missionStatus);
    });
  }

  handleStateChange(status) {
    if (status === 'completed') {
        // Celebration
        if (this.idleTween) this.idleTween.pause();
        this.tweens.add({
            targets: this.robot,
            angle: 360,
            duration: 1000,
            ease: 'Back.easeOut',
            onComplete: () => {
                this.robot.angle = 0;
                if (this.idleTween) this.idleTween.resume();
            }
        });
    }
  }

  shutdown() {
    if (this.unsubscribe) this.unsubscribe();
  }
}
