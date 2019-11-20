class Puissance4 {

  constructor(element_id, rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.board = Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      this.board[i] = Array(this.cols).fill(0);
    }
    this.turn = 1;
    this.moves = 0;
    this.winner = null;
    this.element = document.querySelector(element_id);
    this.element.addEventListener('click', (event) => handle_click(event,p4));	
	// this.element=addEventListener('mouseover', (event) => handle_mouseover(event,p4)) ; 
  }}
