/* eslint-disable no-underscore-dangle */
// export default class Model {
//   constructor() {
//     this._soundOn = true;
//     this._musicOn = true;
//     this._bgMusic = false;
//     this._score = 0;
//     this._playerName = 'Player';
//   }

//   set score(points) {
//     this._score += points;
//   }

//   get score() {
//     return this._score;
//   }

//   set playerName(str) {
//     this._playerName = str;
//   }

//   get playerName() {
//     return this._playerName;
//   }

//   set musicOn(value) {
//     this._musicOn = value;
//   }

//   get musicOn() {
//     return this._musicOn;
//   }

//   set soundOn(value) {
//     this._soundOn = value;
//   }

//   get soundOn() {
//     return this._soundOn;
//   }

//   set bgMusic(value) {
//     this._bgMusic = value;
//   }

//   get bgMusic() {
//     return this._bgMusic;
//   }
// }
export default class Model {
  constructor() {
    this._soundOn = true;
    this._musicOn = true;
    this._bgMusicPlaying = false;
  }

  set musicOn(value) {
    this._musicOn = value;
  }

  get musicOn() {
    return this._musicOn;
  }

  set soundOn(value) {
    this._soundOn = value;
  }

  get soundOn() {
    return this._soundOn;
  }

  set bgMusicPlaying(value) {
    this._bgMusicPlaying = value;
  }

  get bgMusicPlaying() {
    return this._bgMusicPlaying;
  }
}