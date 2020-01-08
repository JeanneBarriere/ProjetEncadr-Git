  let counter = 0;
  let j1color = 1;
  let j2color = 6;
  let element_id = '#game' ;
  let rows = 6 ;
  var cols = 7 ;
  let turn = 1;
  let moves = 0;
  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let p4 = new Puissance4Save('#game', rows, cols, turn, moves, board);

async function load(){
  var pseudo = document.getElementById('pseudo').textContent;
  await ajax.post('/findP4',
    {pseudo},
    function(response){
      if(response == null) return;
      var jsonResponse = JSON.parse(response);
      var pboard =  jsonResponse.board[0].split(',').map(Number);
      p4.turn = jsonResponse.turn;
      p4.moves = jsonResponse.moves;
      board = Array.from(pboard);
      console.log(board);
      for (let i = 0; i < p4.rows; i++) {
        for (let j = 0; j < p4.cols; j++) {
        p4.board[i][j] = board[(i*7)+j];
        }
      }
      showCounter(p4);
      render(p4);
    }
  )
}

load();
console.log(board);
console.log(p4.board);
