export default class Ship {
  #length;
  #hits;
  #sunk;

  constructor(length = 2) {
    this.#length = length;
    this.#hits = 0;
    this.#sunk = false;
  }

  hit() {
    this.#hits += 1;
    if (this.#hits === this.#length) this.#sunk = true;
  }

  isSunk() {
    return this.#sunk;
  }
}
