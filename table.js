let rows = 6;
let cols = 7;
class Puissance4 {
  constructor() {
    this.rows = rows;
    this.cols = cols;
    this.board = Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = Array(this.cols).fill(0);
    }
  }
}

let p4 = new Puissance4();
