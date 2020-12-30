import Phaser from 'phaser';
import Button from '../Objects/Button';

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
    this.gameButton = new Button(this, 400, 200, 'blueButton1', 'blueButton2', 'Play', 'Play');
    this.optionsButton = new Button(this, 400, 300, 'blueButton1', 'blueButton2', 'Options', 'Options');
    this.creditsButton = new Button(this, 400, 400, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
    this.leaderBoardButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'LeaderBoard', 'LeaderBoard');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
}
