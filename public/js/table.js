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
  this.element.addEventListener('click', (event) => this.handle_click(event));
  this.render();
}
}

render() {
  let table = document.createElement('table');
  //ATTENTION, la page html est écrite de haut en bas. Les indices
  //pour le jeu vont de bas en haut (compteur i de la boucle)
  for (let i = this.rows - 1; i >= 0; i--) {
    let tr = table.appendChild(document.createElement('tr'));
    for (let j = 0; j < this.cols; j++) {
      let td = tr.appendChild(document.createElement('td'));
      let colour = this.board[i][j];
      if (colour)
        td.className = 'player' + colour;
      td.dataset.column = j;
    }
  }
  this.element.innerHTML = '';
  this.element.appendChild(table);
}
