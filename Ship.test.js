import Ship from './Ship.js';

test('Ship of length 2 hit 2 times should sink', () => {
  const ship = new Ship();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test('Ship of length 3 hit 2 times should not sink', () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
