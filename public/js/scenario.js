function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

let level = 1;

async function handle_click(event,p4) {
  if(p4.turn==1){
 if (p4.winner !== (null)) {
    window.document.getElementById("newpart").style.display = "flex" ;
	return ;
  }
  let column = event.target.dataset.column;
  if (column !== undefined) {
    let row = play(parseInt(column), p4);
    if (row === null) {
      window.alert("La colonne est pleine!");
    } else {
      if (win(row, parseInt(column), p4.turn, p4)) {
        p4.winner = p4.turn;
      }
      p4.turn = ((3) - p4.turn) ;
      for(var i=0 ; i<6 ; i++){
        anime(p4, row, column,i);
        await pause(25);
      }
     render(p4);
     counter ++;
     showCounter(p4);
     var audio = new Audio('sound/jeton.mp3');
     audio.play();
     tabplein(p4);
      switch (p4.winner) {
        case 1:
        var resultElem = document.getElementById("win");
        resultElem.textContent = "Victoire du premier joueur";
        var victoire = new Audio('sound/victoire.mp3');
        level = (level < 3) ? level+1 : 3 ;
        victoire.play();
          break;
        case 2:
          var resultElem = document.getElementById("win");
          resultElem.textContent = "Victoire de l'ordinateur";
          var victoire = new Audio('sound/victoire.mp3');
          victoire.play();
          break;
        case 10:
          var resultElem = document.getElementById("win");
          resultElem.textContent = "Partie nulle";
          var victoire = new Audio('sound/nulle.mp3');
          victoire.play();
	         break;
         }
       }

       setTimeout(IA, 500);
     }
   }
       }

async function IA(Puissance4){
  if (p4.winner !== (null)) {
     window.document.getElementById("newpart").style.display = "flex" ;
 	return ;
   }
  if(p4.winner==(null)){
  if(p4.turn==2){
  let column = null;
  let row = null;

  //est-ce que IA gagne
  if(level>=2){
  for(var i =0; i<p4.cols; i++){
    let p4IA = new Puissance4IA(p4);
    p4IA.turn = 2;
    let columnIA = i;
    let rowIA = play(parseInt(columnIA), p4IA);
    if(rowIA == null) continue;
    if (winIA(parseInt(rowIA), parseInt(columnIA), 2, p4IA, 4)){
      column = columnIA;
      row = rowIA;
      break;
    }
  }

  //est-ce que joueur gagne
  if(column == null && row ==null){
    for(var i =0; i<p4.cols; i++){

      let p4IA = new Puissance4IA(p4);
      p4IA.turn = 1;
      let columnIA = parseInt(i);
      let rowIA = play(parseInt(columnIA), p4IA);
      if(rowIA == null) continue;
      if (winIA(parseInt(rowIA), parseInt(columnIA), 1, p4IA, 4)){
        column = columnIA;
        row = rowIA;
        break;
      }
    }
  }

  if(level >=3){
  // est-ce que joueur gagne 3
  if(column == null && row ==null){
    for(var i =0; i<p4.cols; i++){
      if(column === null){
        let p4IA = new Puissance4IA(p4);
        p4IA.turn = 1;
        let columnIA = parseInt(i);
        let rowIA = play(parseInt(columnIA), p4IA);
        if(rowIA == null) continue;
        if (winIA(parseInt(rowIA), parseInt(columnIA), 1, p4IA, 3)){
          let test = 0;
          for(var j =0; j<p4.cols; j++){
            let p4IA2 = new Puissance4IA(p4);
            p4IA2.turn = 2;
            play(parseInt(columnIA), p4IA2);
            p4IA2.turn = 1;
            rowIA = play(parseInt(j), p4IA2);
            if(rowIA == null) continue;
            if ((winIA(parseInt(rowIA), parseInt(j), 1, p4IA2, 4))){
              test = 1;
            }
          }
          if (test == 1) continue;
          if (test == 0) {
            column = columnIA;
          }
        }
      }
  }
}

 if(column == null && row ==null){
   let w = 0;
   let row;
   let cpt = 0;
   while(w==0){
     let columnIA = getRandomInt(cols);
     let p4IA = new Puissance4IA(p4);
     p4IA.turn = 2;
     let rowIA = play(parseInt(columnIA), p4IA);
     if(rowIA == null) continue;
     p4IA.turn = 1;
     rowIA = play(parseInt(columnIA), p4IA);
      if(rowIA == null) continue;
     if (!(winIA(parseInt(rowIA), parseInt(columnIA), 1, p4IA, 4))) w=1;
     row = rowIA;
     column = columnIA;
     if(cpt > 30) w=1;
     cpt ++;
   }
 }
 row = play(column, p4);
}
}

 while (row == null) {
   column = getRandomInt(cols);
   row = play(column, p4);
 }

    if (win(row, column, p4.turn, p4)) {
      p4.winner = p4.turn;
    }
    p4.turn = ((3) - p4.turn) ;
    for(var i=0 ; i<6 ; i++){
      anime(p4, row, column,i);
      await pause(25);
    }
    render(p4);
    counter ++;
    showCounter(p4);
    var audio = new Audio('sound/jeton.mp3');
    audio.play();
    tabplein(p4);
    switch (p4.winner) {
      case 1:
      var resultElem = document.getElementById("win");
      resultElem.textContent = "Victoire du premier joueur";
      var victoire = new Audio('sound/victoire.mp3');
      level = (level < 3) ? level+1 : 3 ;
      victoire.play();
      break;
      case 2:
      var resultElem = document.getElementById("win");
      resultElem.textContent = "Victoire de l'ordinateur";
      var victoire = new Audio('sound/victoire.mp3');
      victoire.play();
      break;
      case 10:
      var resultElem = document.getElementById("win");
      resultElem.textContent = "Partie nulle";
      var victoire = new Audio('sound/nulle.mp3');
      victoire.play();
      break;
    }
  }
}
}

function newpart(){
  reset(p4);
  render(p4);
  var resultElem = document.getElementById("win");
  resultElem.textContent = "Partie en cours...";
  var resultElem = document.getElementById("counter");
  resultElem.textContent = "Nombre de tours : 0";
  document.getElementById("newpart").style.display ="none";
  var leveltext = document.getElementById("level");
  leveltext.textContent = "Niveau de l'IA : "+level;
  window.document.getElementById("save").style.display = "flex" ;
  return;
}
