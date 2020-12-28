import Phaser from 'phaser';
import ScoreLabel from '../ui/ScoreLabel';
import { postScore } from '../ui/LeaderBoard';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {
    this.load.image('sky', 'src/assets/sky.png');
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.add.image(400, 300, 'sky');
    this.add.text(280, 220, 'Game Over', { fontFamily: 'monospace, sans-serif', fontSize: '48px' });
    this.scoreLabel = this.createScoreLabel(16, 16, this.model.score);
    this.menuButton = this.add.sprite(400, 500, 'blueButton1').setInteractive().setScale(1.5);
    this.menuText = this.add.text(0, 0, 'Play Again?', { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', () => {
      this.scene.start('Title');
    });

    this.add.text(300, 100, 'Enter your name:', { color: 'white', fontFamily: 'Arial', fontSize: '24px ' });
    const form = this.add.dom(400, 180).createFromCache('name_form');
    form.setPerspective(800);
    form.addListener('click');
    form.on('click', async (event) => {
      if (event.target.name === 'confirmButton') {
        const inputUsername = form.getChildByName('username');
        if (inputUsername.value !== '') {
          const input = inputUsername.value;
          const data = {
            user: input,
            score: this.model.score,
          };
          postScore(JSON.stringify(data))
          .catch(err => console.error(err))
          ;
          form.scene.scene.start('Title');
        }
      }
    });
  }


  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#000' };
    const label = new ScoreLabel(this, x, y, score, style);

    this.add.existing(label);

    return label;
  }
}
