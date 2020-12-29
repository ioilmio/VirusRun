import Phaser from 'phaser';
import ScoreLabel from '../ui/ScoreLabel';
import VirusSpawner from './VirusSpawn';
import LifeLabel from '../ui/LifeLabel';

const GROUND_KEY = 'ground';
const DUDE_KEY = 'dude';
const PILL = 'pill';
const VIRUS_KEY = 'virus';


export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Play');
    this.player = undefined;
    this.cursors = undefined;
    this.scoreLabel = undefined;
    this.lifeLabel = undefined;
    this.pills = undefined;
    this.virusSpawner = undefined;
    this.life = 3;
    this.score = 0;
  }

  create() {
    this.model = this.sys.game.globals.model;
    this.add.image(400, 300, 'sky');
    this.jumpSound = this.sound.add('jump');

    const platforms = this.createPlatforms();
    this.player = this.createPlayer();
    this.pills = this.createPills();

    this.scoreLabel = this.createScoreLabel(16, 16, 0);
    this.lifeLabel = this.createLifeLabel(614, 16, 3);

    this.virusSpawner = new VirusSpawner(this, VIRUS_KEY);
    const virusGroup = this.virusSpawner.group;

    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(this.pills, platforms);
    this.physics.add.collider(virusGroup, platforms);
    this.physics.add.collider(this.player, virusGroup, this.hitVirus, null, this);
    this.physics.add.overlap(this.player, this.pills, this.collectPill, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createPlatforms() {
    const platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, GROUND_KEY).setScale(2).refreshBody();

    platforms.create(600, 400, GROUND_KEY);
    platforms.create(50, 250, GROUND_KEY);
    platforms.create(750, 220, GROUND_KEY);

    return platforms;
  }

  createPlayer() {
    const player = this.physics.add.sprite(100, 450, DUDE_KEY);
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers(DUDE_KEY, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: DUDE_KEY, frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers(DUDE_KEY, { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    return player;
  }

  createPills() {
    const pills = this.physics.add.group({
      key: PILL,
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });
    pills.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      child.setScale(0.05, 0.05);
    });

    return pills;
  }

  collectPill(player, pills) {
    pills.disableBody(true, true);
    this.scoreLabel.add(10);
    this.score += 10;
    if (this.pills.countActive(true) === 0) {
      this.pills.children.iterate((child) => {
        child.enableBody(true, child.x, 0, true, true);
      });
    }

    this.virusSpawner.spawn(player.x);
  }

  hitVirus(player, virus) {
    player.anims.play('turn');
    virus.disableBody(true, true);
    player.setTint(0xff0000);
    this.lifeLabel.remove(1);
    this.life -= 1;
    setTimeout(player.clearTint(), 1000);
  }

  update() {
    if (this.life === 0) {
      this.physics.pause();
      this.model.score = this.score;
      this.score = this.model.score;
      this.scene.stop('Play');
      this.life = 3;
      this.score = 0;
      this.scene.start('GameOver');
    }

    if (this.scoreLabel.score === 50) {
      this.lifeLabel.add(1);
      this.life += 1;
      this.scoreLabel.score -= 50;
      this.model.score -= 50;
      this.score -= 50;
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(200);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }
    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-700);
      this.sound.play('jump');
    }
    return this.model.score;
  }

  createScoreLabel(x, y, score) {
    const style = { fontSize: '32px', fill: '#000' };
    const label = new ScoreLabel(this, x, y, score, style);
    this.add.existing(label);
    return label;
  }

  createLifeLabel(x, y, life) {
    const style = { fontSize: '32px', fill: '#000' };
    const lifeLabel = new LifeLabel(this, x, y, life, style);
    this.add.existing(lifeLabel);
    return lifeLabel;
  }
}