export default class GameScore {
  constructor(step) {
    this.step = step;
    this.score = 0;
  }
  addStep() {
    this.step += 1;
  }
  removeStep() {
    this.step -= 1;
  }
  addScorePoint() {
    this.score += 1;
  }
  gameOver() {
    alert(`Игра окончена. Ваш прогресс: ${this.score}`);
  }
}
