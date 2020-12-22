import Phaser from 'phaser';
// import config from '../Config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.load.image('blueButton1', 'src/assets/ui/blue_button02.png');
    this.load.image('blueButton2', 'src/assets/ui/blue_button03.png');
    this.load.image('virus', 'src/assets/virus.png');
  }

  create() {
    this.add.image(500, 300, 'virus');
    this.gameButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
    this.optionsButton = this.add.sprite(300, 300, 'blueButton1').setInteractive();
    this.creditsButton = this.add.sprite(300, 400, 'blueButton1').setInteractive();

    this.gameText = this.add.text(0, 0, 'Play', { fontSize: '32px', fill: '#fff' });
    this.optionsText = this.add.text(0, 0, 'Options', { fontSize: '32px', fill: '#fff' });
    this.creditsText = this.add.text(0, 0, 'Credit', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.creditsText, this.creditsButton);
    Phaser.Display.Align.In.Center(this.gameText, this.gameButton);
    Phaser.Display.Align.In.Center(this.optionsText, this.optionsButton);

    this.gameButton.on('pointerdown', () => {
      this.scene.start('Play');
    });
    this.optionsButton.on('pointerdown', () => {
      this.scene.start('Options');
    });
    this.creditsButton.on('pointerdown', () => {
      this.scene.start('Credits');
    });


    this.input.on('pointerover', (_event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (_event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });
  }
}