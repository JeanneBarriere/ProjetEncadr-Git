var save = document.getElementById('save');

var pseudo = document.getElementById('pseudo').textContent;
let colsdb = p4.cols;
let rowsdb = p4.rows;
let turndb = p4.turn;
let movesdb = p4.moves;
let boarddb = p4.board;

function changeTurnDB(){
  turndb = p4.turn;
}
function changeMovesDB(){
  movesdb = p4.moves;
}
function changeBoardDB(){
  boarddb = p4.board;
}

save.addEventListener("click",  async function(p4){
  changeTurnDB();
  changeMovesDB();
  var cols = colsdb;
  var rows = rowsdb;
  var turn = turndb;
  var board = boarddb;
  var moves = movesdb;
  ajax.post('/createP4',
  {cols,rows,turn,moves,board,pseudo},
  function(response){
    alert('partie enregistrée !!')
  },
  function(){
    alert('erreur');
  }
)
});
