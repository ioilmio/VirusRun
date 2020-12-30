import Phaser from 'phaser';

const formatLife = (life) => `Life: ${life}`;

export default class LifeLabel extends Phaser.GameObjects.Text {
  constructor(scene, x, y, life, style) {
    super(scene, x, y, formatLife(life), style);

    this.life = life;
  }

  setLife(life) {
    this.life = life;
    this.updatelifeText();
  }

  remove(life) {
    this.setLife(this.life - life);
  }

  add(life) {
    this.setLife(this.life + life);
  }

  updatelifeText() {
    this.setText(formatLife(this.life));
  }
}