function reset(p4) {
  for (let i = 0; i < p4.rows; i++) {
    for (let j = 0; j < p4.cols; j++) {
      p4.board[i][j] = 0;
    }
  }
  p4.move = 0;
  p4.winner = null;
  // Pour regler probleme musique ajouter : musique.stop();
  // ok mais probleme : affichage de boite dialogue
  // necessite debuggage mais aussi variables locales et globales visibles et justes pour ne plus interferer 
}