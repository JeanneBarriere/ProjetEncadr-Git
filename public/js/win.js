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
    count = (p4.board[i][shift - i] == player) ? count+1 : 0;
    if (count >= 4) return true;
  }

  return false;
}
