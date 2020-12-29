import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: '#container',
    width: 800,
    height: 600,
  },
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 700 },
    },
  },
};


export { config as default };
