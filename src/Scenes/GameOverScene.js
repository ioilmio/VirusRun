import Phaser from 'phaser';
import ScoreLabel from '../ui/ScoreLabel';
import GameScene from './GameScene';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {
    this.load.image('sky', 'src/assets/sky.png');
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.add.text(280, 200, 'Game Over', { fontFamily: 'monospace, sans-serif', fontSize: '48px' });
    this.scoreLabel = this.createScoreLabel(16, 16, GameScene.label);
    this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive().setScale(1.5);
    this.menuText = this.add.text(0, 0, 'Play Again?', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', () => {
      this.scene.start('Play');
    });
  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#000' };
    const label = new ScoreLabel(this, x, y, score, style);

    this.add.existing(label);

    return label;
  }
}