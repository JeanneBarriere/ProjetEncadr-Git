function play(column,p4) {
  let row;
  for (let i = 0; i < p4.rows; i++) {
    if (p4.board[i][column] == 0) {
      row = i;
      break;
    }
  }
  if (row === undefined) {
    return null;
  } else {
    // Effectuer le coup
    set(row, column, p4.turn, p4);
    // Renvoyer la ligne où on a joué
    return row;
  }
}
