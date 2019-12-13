class Puissance4IA {

  constructor(Puissance4) {
    this.rows = Puissance4.rows;
    this.cols = Puissance4.cols;
    this.board = Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = Array(this.cols).fill(0);
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++)
      this.board[i][j] = Puissance4.board[i][j];
    }
    this.turn = 2;

  }}
