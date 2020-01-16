class Puissance4Save {

  constructor(element_id, rows, cols, turn, moves) {
    this.rows = rows;
    this.cols = cols;
    this.board = Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = Array(this.cols).fill(0);
    }

    this.turn = turn;
    this.moves = moves;
    this.winner = null;
    this.element = document.querySelector(element_id);
    this.element.addEventListener('click', (event) => handle_click(event,p4));
	
  }
}
