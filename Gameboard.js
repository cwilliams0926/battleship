import Ship from './Ship.js';

export default class Gameboard {
  #board;

  constructor() {
    this.#board = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => 0)
    );
  }
}
