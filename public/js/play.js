function handle_click(event,p4) {
 if (p4.winner !== (null)) {
    window.document.getElementById("newpart").style.display = "flex" ;
	return ;
  }
  let column = event.target.dataset.column;
  if (column !== undefined) {
    let row = play(column, p4);

    if (row === null) {
      window.alert("La colonne est pleine!");
    } else {
      if (win(row, column, p4.turn, p4)) {
        p4.winner = p4.turn;
      }
      p4.turn = ((3) - p4.turn) ;
     render(p4);
     counter ++;
     showCounter(counter);
     var audio = new Audio('sound/jeton.mp3');
     audio.play();
     tabplein(p4);
     let first = 0 ; 
      switch (p4.winner) {
        case 1:
        var resultElem = document.getElementById("win");
        resultElem.textContent = "Victoire du premier joueur";
        var victoire = new Audio('sound/victoire.mp3');
        victoire.play();
          break;
        case 2:
          var resultElem = document.getElementById("win");
          resultElem.textContent = "Victoire du second joueur";
          var victoire = new Audio('sound/victoire.mp3');
          victoire.play();
          break;
        case 3:
          var resultElem = document.getElementById("win");
          resultElem.textContent = "Partie nulle";
          var victoire = new Audio('sound/nulle.mp3');
          victoire.play();
	  break;
	default:
	  first++ ;
	  const musique = new Audio('sound/cours.mp3') ; 
	  if (counter === 1 && first === 1) {
  	  	musique.play() ;
	  }
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
  // Pour regler probleme musique ajouter : musique.stop();
  // ok mais probleme : affichage de boite dialogue
  // necessite debuggage mais aussi variables locales et globales visibles et justes pour ne plus interferer 
}

function set(row, column, player, p4) {
  p4.board[row][column] = player;
  p4.moves++;
}
