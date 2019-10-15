function handle_click(event,p4) {
  if (p4.winner !== null) {
    if (window.confirm("Partie terminée!\n\n Vous voulez recommencer?")) {
      reset(p4);
      render(p4);
    }
    return;
  }
  let column = event.target.dataset.column;
  if (column !== undefined) {
    column = parseInt(column);
    let row = play(parseInt(column),p4);
    if (row === null) {
      window.alert("La colonne est pleine!");
    } else {
      if (win(row, column, p4.turn, p4)) {
        p4.winner = p4.turn;
      } else if (p4.moves >= p4.rows * p4.columns) {
        p4.winner = 0;
      }

      p4.turn = 3 - p4.turn;

      render(p4)

      switch (p4.winner) {
        case 0:
          window.alert("Partie nulle!!");
          break;
        case 1:
          window.alert("Victoire du premier joueur !!");
          break;
        case 2:
          window.alert("Victoire du seconde joueur !!");
          break;
      }
    }
  }
}


function reset(p4) {
  for (let i = 0; i < p4.rows; i++) {
    for (let j = 0; j < p4.cols; j++) {
      p4.board[i][j] = 0;
    }
  }
  p4.move = 0;
  p4.winner = null;
}

function set(row, column, player, p4) {
  // On colore la case
  p4.board[row][column] = player;
  // On compte le coup
  p4.moves++;
}
