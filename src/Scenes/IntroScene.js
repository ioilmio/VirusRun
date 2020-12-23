import Phaser from 'phaser';

export default class IntroScene extends Phaser.Scene {
  constructor() {
    super('Intro');
  }

  create() {
    this.add.image(400, 300, 'virus');
    this.introText = this.add.text(200, 0, 'Introduction', { fontSize: '34px', fill: '#fff' });
    this.loreTxt = this.add.text(200, 0, `${'Your planet is in danger and you have to fight a new lethal virus,\n collect medications to stay alive\n or die due to the viral charge\n\n Collect 5 mediactions to get an extra life,\n but 50 points will be subtracted from your total score \n\n Move and Jump using Arrow Keys'}`, { fontSize: '20px', fill: '#fff', align: 'center' });
    this.zone = this.add.zone(400, 300, 800, 600);

    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.skipText = this.add.text(10, 10, 'Press Space to skip', { fontSize: '12px', fill: '#fff' });

    Phaser.Display.Align.In.Center(
      this.introText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.loreTxt,
      this.zone,
    );
    this.loreTxt.setY(400);

    this.introTween = this.tweens.add({
      targets: this.introText,
      y: -400,
      duration: 5000,
      delay: 1000,
    });

    this.createdByTween = this.tweens.add({
      targets: this.loreTxt,
      y: -400,
      duration: 5000,
      delay: 1000,
      onComplete: (() => {
        this.scene.start('Title');
      }),
    });

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  update() {
    if (this.keySpace.isDown) {
      this.scene.start('Title');
    }
  }
}