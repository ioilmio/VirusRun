import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'src/assets/logo.png');
    this.load.image('sky', 'src/assets/sky.png');
    this.timedEvent = this.time.delayedCall(1000, this.ready, [], this);
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount !== 0) {
      this.scene.start('Preloader');
    }
  }

  create() {
    this.add.image(200, 200, 'sky').setScale(3);
    this.add.image(300, 200, 'logo');
    this.add.text(500, 200, 'Booting...',
      {
        font: '20px monospace',
        fill: '#00000',
      });
  }
}