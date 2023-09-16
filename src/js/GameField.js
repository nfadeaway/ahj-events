export default class GameField {
  constructor(parentContainer, size) {
    this.size = size;
    this.parentContainer = parentContainer;
    this.cells = undefined;
    this.scoreCell = undefined;
  }
  create() {
    for (let i = 1; i <= this.size; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.parentContainer.appendChild(cell);
    }
    const score = document.createElement("div");
    score.classList.add("score");
    score.innerText = "Очки: 0";
    this.parentContainer.appendChild(score);
    this.scoreCell = score;
    this.cells = this.parentContainer.querySelectorAll(".cell");
  }
  moveTarget(i) {
    const activeCell = this.parentContainer.querySelector(".active");
    if (activeCell) {
      activeCell.classList.remove("active");
    }
    this.cells[i].classList.add("active");
  }
  isTarget(e) {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      return true;
    }
    return false;
  }
  getTargetCellIndex() {
    const i = Math.floor(Math.random() * this.size);
    if (this.cells[i].classList.contains("active")) {
      this.getTargetCellIndex();
    }
    return i;
  }
}
