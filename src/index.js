/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import config from './Config/config';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import IntroScene from './Scenes/IntroScene';
import LeaderBoardScene from './Scenes/LeaderboardScene';
import OptionsScene from './Scenes/OptionsScene';
import GameScene from './Scenes/GameScene';
import GameOverScene from './Scenes/GameOverScene';
import CreditsScene from './Scenes/CreditsScene';
import Model from './Model/model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Intro', IntroScene);
    this.scene.add('LeaderBoard', LeaderBoardScene);
    this.scene.add('Play', GameScene);

    this.scene.start('Boot');
    const model = new Model();
    this.globals = { model };
  }
}

window.game = new Game();