// GameBoard module
const GameBoard = (() => {
  let gameboard = [];

})();

// Game module
const Game = (() => {

})();

// Player factory
const Player = (marker) => {
  const getMarker = () => marker;

  return {getMarker}
};

const playerOne = Player('x');
const playerTwo = Player('o');

console.log(playerOne.getMarker())
console.log(playerTwo.getMarker())