/* eslint-disable no-underscore-dangle */
import Phaser from 'phaser';

export default class VirusSpawner {
  constructor(scene, virusKey = 'virus') {
    this.scene = scene;
    this.key = virusKey;

    this._group = this.scene.physics.add.group();
  }

  get group() {
    return this._group;
  }

  spawn(playerX = 0) {
    const x = (playerX < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

    const virus = this.group.create(x, 1, this.key);
    virus.setBounce(1);
    virus.setCollideWorldBounds(true);
    virus.setVelocity(Phaser.Math.Between(-200, 200), 20);
    virus.setScale(0.1);


    return virus;
  }
}