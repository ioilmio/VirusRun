import Phaser from 'phaser';
import Button from '../Objects/Button';
// import config from '../Config/config';
import { getScores } from '../ui/LeaderBoard';
import 'regenerator-runtime';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {
    this.load.image('logo', 'src/assets/logo.png');
    this.load.image('sky', 'src/assets/sky.png');
  }

  // create() {
  //   this.add.image(200, 200, 'sky').setScale(3);
  //   this.add.image(300, 200, 'logo');
  //   this.add.text(500, 200, 'LeaderBoard',
  //     {
  //       font: '20px monospace',
  //       fill: '#00000',
  //     });
  // let highScoreToDisplay = getScores().then(score => score);
  // if (localStorage.getItem('user') !== null) {
  //   highScoreToDisplay = (localStorage.getItem('user'));
  // }

  // this.add.text(600, 300, highScoreToDisplay.toString(),
  //   { font: '20pt Arial', fill: '#FFFFFF' });

  //   this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
  // }
  async create() {
    this.add.image(200, 200, 'sky').setScale(3);
    this.add.image(300, 200, 'logo');
    this.add.text(500, 200, 'LeaderBoard',
      {
        font: '20px monospace',
        fill: 0x30b1da,
      });

    const style = { fontSize: '32px', backgroundColor: 0x30b1da };

    this.add.text(50, 0, 'POS NAME SCORE', style).setTint(0x30b1da);
    // eslint-disable-next-line no-console
    this.score = await getScores().catch(err => console.error(err));

    this.sortScore = this.score.sort((a, b) => (a.score > b.score ? -1 : 1));

    this.menuButton = new Button(this, 500, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    for (let i = 0; i <= 9; i += 1) {
      this.add.text(100, 50 * (i + 1), `${i + 1} ${this.sortScore[i].user} ${this.sortScore[i].score} `, style).setTint(0x30b1da);
    }
  }
}
