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
     showCounter(p4);
     var audio = new Audio('sound/jeton.mp3');
     audio.play();
     tabplein(p4);
      switch (p4.winner) {
        case 1:
        var resultElem = document.getElementById("win");
        resultElem.textContent = "Victoire du premier joueur";
        window.document.getElementById("save").style.display = "none" ;
        var victoire = new Audio('sound/victoire.mp3');
        victoire.play();
          break;
        case 2:
          var resultElem = document.getElementById("win");
          resultElem.textContent = "Victoire du second joueur";
          window.document.getElementById("save").style.display = "none" ;
          var victoire = new Audio('sound/victoire.mp3');
          victoire.play();
          break;
        case 10:
          var resultElem = document.getElementById("win");
          window.document.getElementById("save").style.display = "none" ;
          resultElem.textContent = "Partie nulle";
          var victoire = new Audio('sound/nulle.mp3');
          victoire.play();
	      break;
      }
    }
  }
}
