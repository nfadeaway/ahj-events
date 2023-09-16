import GameField from "./GameField";
import GameScore from "./GameScore";

const appContainer = document.querySelector(".app");

const gameField = new GameField(appContainer, 16);
gameField.create();
const gameScore = new GameScore(5);

appContainer.addEventListener("click", (e) => {
  if (gameField.isTarget(e)) {
    gameScore.addStep();
    gameScore.addScorePoint();
    gameField.scoreCell.innerText = `Очки: ${gameScore.score}`;
    clearTimeout(playTimer);
    playTimer = setTimeout(gamePlay, 1000);
  }
});

let playTimer = setTimeout(gamePlay, 1000);

function gamePlay() {
  gameScore.removeStep();
  if (gameScore.step < 0) {
    gameScore.gameOver();
    return;
  }
  const i = gameField.getTargetCellIndex();
  gameField.moveTarget(i);
  playTimer = setTimeout(gamePlay, 1000);
}
