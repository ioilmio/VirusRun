import Phaser from 'phaser';


export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(300, 200, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(100, 300, 'Created By: Illuminato Salvatore', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(window.width / 2, window.height / 2, window.width, window.height);

    this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', () => {
      this.scene.start('Title');
    });
    this.input.on('pointerover', (_event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (_event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });
  }
}