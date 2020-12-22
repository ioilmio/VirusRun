/* eslint-disable import/no-cycle */
import Phaser from 'phaser';
import BootScene from '../Scenes/BootScene';
import PreloaderScene from '../Scenes/PreloaderScene';
import GameScene from '../Scenes/GameScene';
import GameOverScene from '../Scenes/GameOverScene';
import TitleScene from '../Scenes/TitleScene';
import OptionsScene from '../Scenes/OptionsScene';
import CreditsScene from '../Scenes/CreditsScene';


const config = {
  type: Phaser.AUTO,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: '#container',
    width: 800,
    height: 600,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [
    BootScene,
    PreloaderScene,
    TitleScene,
    GameScene,
    OptionsScene,
    CreditsScene,
    GameOverScene,
  ],
};


export { config as default };
