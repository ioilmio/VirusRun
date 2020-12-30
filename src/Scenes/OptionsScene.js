import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(300, 100, 'Options', { fontSize: '40px' });

    this.menuBtn = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.musicBtn = this.add.image(200, 200, 'checkedBox');
    this.musicTxt = this.add.text(250, 190, 'Music Enabled', { fontSize: '24px' });

    this.soundBtn = this.add.image(200, 300, 'checkedBox');
    this.soundTxt = this.add.text(250, 290, 'Sound Enabled', { fontSize: '24px' });

    this.musicBtn.setInteractive();
    this.soundBtn.setInteractive();

    this.musicBtn.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.soundBtn.on('pointerdown', () => {
      this.model.soundOn = !this.model.soundOn;
      this.updateAudio();
    });

    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicBtn.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicBtn.setTexture('checkedBox');
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }
    if (this.model.soundOn === false) {
      this.soundBtn.setTexture('box');
    } else {
      this.soundBtn.setTexture('checkedBox');
    }
  }
}