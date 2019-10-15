class Puissance4 {

  constructor(element_id, rows=6, cols=7) {
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

  }}

  function render(p4) {
    let table = document.createElement('table');
    for (let i = p4.rows - 1; i >= 0; i--) {
      let tr = table.appendChild(document.createElement('tr'));
      for (let j = 0; j < p4.cols; j++) {
        let td = tr.appendChild(document.createElement('td'));
        let colour = p4.board[i][j];
        if (colour)
          td.className = 'player' + colour;
        td.dataset.column = j;
      }
    }
    p4.element.innerHTML = '';
    p4.element.appendChild(table);
  }
  let p4 = new Puissance4('#game');
  render(p4);
