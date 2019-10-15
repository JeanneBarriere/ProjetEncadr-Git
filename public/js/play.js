function set(row, column, player, p4) {
  // On colore la case
  p4.board[row][column] = player;
  // On compte le coup
  p4.moves++;
}

function handle_click(event,p4) {
  // Vérifier si la partie est encore en cours
  if (p4.winner !== null) {
    if (window.confirm("Game over!\n\nDo you want to restart?")) {
      p4.reset();
      p4.render();
    }
    return;
  }

  let column = event.target.dataset.column;
  if (column !== undefined) {
    //attention, les variables dans les datasets sont TOUJOURS
    //des chaînes de caractères. Si on veut être sûr de ne pas faire de bêtise,
    //il vaut mieux la convertir en entier avec parseInt
    column = parseInt(column);
    let row = play(parseInt(column),p4);

    if (row === null) {
      window.alert("La colonne est pleine!");
    } else {
      // Vérifier s'il y a un gagnant, ou si la partie est finie
      if (win(row, column, p4.turn, p4)) {
        p4.winner = p4.turn;
      } else if (p4.moves >= p4.rows * p4.columns) {
        p4.winner = 0;
      }
      // Passer le tour : 3 - 2 = 1, 3 - 1 = 2
      p4.turn = 3 - p4.turn;

      // Mettre à jour l'affichage
      p4.render()

      //Au cours de l'affichage, pensez eventuellement, à afficher un
      //message si la partie est finie...
      switch (p4.winner) {
        case 0:
          window.alert("Null game!!");
          break;
        case 1:
          window.alert("Player 1 wins");
          break;
        case 2:
          window.alert("Player 2 wins");
          break;
      }
    }
  }
}

function win(row, column, player, p4) {
  // Horizontal
  let count = 0;
  for (let j = 0; j < p4.cols; j++) {
    count = (p4.board[row][j] == player) ? count+1 : 0;
    if (count >= 4) return true;
  }
  // Vertical
  count = 0;
  for (let i = 0; i < p4.rows; i++) {
    count = (p4.board[i][column] == player) ? count+1 : 0;
    if (count >= 4) return true;
  }
  // Diagonal
  count = 0;
  let shift = row - column;
  for (let i = Math.max(shift, 0); i < Math.min(p4.rows, p4.cols + shift); i++) {
    count = (p4.board[i][i - shift] == player) ? count+1 : 0;
    if (count >= 4) return true;
  }
  // Anti-diagonal
  count = 0;
  shift = row + column;
  for (let i = Math.max(shift - p4.cols + 1, 0); i < Math.min(p4.rows, shift + 1); i++) {
    console.log(i,shift-i,shift)
    count = (p4.board[i][shift - i] == player) ? count+1 : 0;
    if (count >= 4) return true;
  }

  return false;
}

// Cette fonction vide le plateau et remet à zéro l'état
function reset() {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      this.board[i][j] = 0;
    }
  }
  this.move = 0;
  this.winner = null;
}
