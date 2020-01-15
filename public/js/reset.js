function reset(p4) {
  for (let i = 0; i < p4.rows; i++) {
    for (let j = 0; j < p4.cols; j++) {
      p4.board[i][j] = 0;
    }
  }
  p4.moves = 0;
  p4.winner = null;
  p4.turn = 1;
}
