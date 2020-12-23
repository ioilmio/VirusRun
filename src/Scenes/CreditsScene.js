import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(300, 200, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(100, 300, 'Created By: Illuminato Salvatore', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(window.width / 2, window.height / 2, window.width, window.height);

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  }
}