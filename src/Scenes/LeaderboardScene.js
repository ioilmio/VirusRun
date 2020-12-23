import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {
    this.load.image('logo', 'src/assets/logo.png');
    this.load.image('sky', 'src/assets/sky.png');
  }

  create() {
    this.add.image(200, 200, 'sky').setScale(3);
    this.add.image(300, 200, 'logo');
    this.add.text(500, 200, 'LeaderBoard',
      {
        font: '20px monospace',
        fill: '#00000',
      });

    // this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive();
    // this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '#fff' });
    // Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    // this.menuButton.on('pointerdown', () => {
    //   this.scene.start('Title');
    // });
    // this.input.on('pointerover', (_event, gameObjects) => {
    //   gameObjects[0].setTexture('blueButton2');
    // });

    // this.input.on('pointerout', (_event, gameObjects) => {
    //   gameObjects[0].setTexture('blueButton1');
    // });
    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}