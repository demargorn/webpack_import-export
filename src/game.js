import Character from './domain';

class Game {
   start() {
      console.log('game started');
   }
}

class GameSavingData {}

function readGameSaving() {}

function writeGameSaving() {}

export { GameSavingData, readGameSaving, writeGameSaving };
export default Game;
