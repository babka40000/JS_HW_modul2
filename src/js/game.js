import {Character} from './domain.js';

export default Game;

module.exports = {
    GameSavingData,
    readGameSaving,
    writeGameSaving,
};

class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}