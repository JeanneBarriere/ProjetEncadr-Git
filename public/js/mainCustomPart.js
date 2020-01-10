  let counter = 0;
  let j1color = 1;
  let j2color = 6;
  var player = 2;
  let element_id = '#game' ;
  var rows = 6 ;
  var cols = 7 ;
  let p4;
  function validate (){
    document.getElementById("custom").style.display ="none";
      class Puissance4 {

      constructor(element_id, rows, cols) {
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
        this.element.addEventListener('click', (event) => handle_click(event,p4));
      }}

      async function handle_click(event,p4) {
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
            p4.turn = p4.turn+1 ;
            if (p4.turn > player) p4.turn = 1;
            for(var i=0 ; i<6 ; i++){
              anime(p4, row, column,i);
              await pause(25);
            }
           render(p4);
           showCounter(p4);
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
                resultElem.textContent = "Victoire du troisième joueur";
                var victoire = new Audio('sound/victoire.mp3');
                victoire.play();
                break;
              case 4:
                var resultElem = document.getElementById("win");
                resultElem.textContent = "Victoire du quatrième joueur";
                var victoire = new Audio('sound/victoire.mp3');
                victoire.play();
                break;
              case 5:
                var resultElem = document.getElementById("win");
                resultElem.textContent = "Victoire du cinquième joueur";
                var victoire = new Audio('sound/victoire.mp3');
                victoire.play();
                break;
              case 6:
                var resultElem = document.getElementById("win");
                resultElem.textContent = "Victoire du sixième joueur";
                var victoire = new Audio('sound/victoire.mp3');
                victoire.play();
                break;
              case 10:
                var resultElem = document.getElementById("win");
                resultElem.textContent = "Partie nulle";
                var victoire = new Audio('sound/nulle.mp3');
                victoire.play();
      	  break;
      	default:
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

      var ok = document.getElementById('ok');
      ok.addEventListener('click',function(){
        reset(p4);
        render(p4);
        var resultElem = document.getElementById("win");
        resultElem.textContent = "Partie en cours...";
        var resultElem = document.getElementById("counter");
        resultElem.textContent = "Nombre de tours : 0";
        document.getElementById("newpart").style.display ="none";
        return;
      });


    let p4 = new Puissance4('#game', rows, cols);
  render(p4);
}
