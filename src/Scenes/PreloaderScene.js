import Phaser from 'phaser';

const GROUND_KEY = 'ground';
const DUDE_KEY = 'dude';
const PILL = 'pill';
const VIRUS_KEY = 'virus';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.load.image('blueButton1', 'src/assets/ui/blue_button02.png');
    this.load.image('blueButton2', 'src/assets/ui/blue_button03.png');
    this.load.image('checkedBox', 'src/assets/ui/blue_boxCheckmark.png');
    this.load.html('name_form', 'src/assets/text/name_form.html');
    this.load.image('phaserLogo', 'src/assets/logo.png');
    this.load.image(GROUND_KEY, 'src/assets/platform.png');
    this.load.image(PILL, 'src/assets/pill.png');
    this.load.image(VIRUS_KEY, 'src/assets/virus.png');
    this.load.image('box', 'src/assets/ui/grey_box.png');


    this.load.audio('bgMusic', 'src/assets/bgMusic.mp3');
    this.load.audio('jump', 'src/assets/jump-sound.mp3');

    this.load.spritesheet(DUDE_KEY,
      'src/assets/dude.png',
      { frameWidth: 32, frameHeight: 48 });

    this.add.image(300, 200, 'logo');

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;


    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect((width / 2) - 160, 270, 320, 50);

    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 150,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect((width / 2) - 140, 280, 280 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.scene.start('Intro');
    this.readyCount += 1;
    if (this.readyCount !== 0) {
      this.create();
    }
  }

  create() {
    this.scene.start('Intro');
  }
}
