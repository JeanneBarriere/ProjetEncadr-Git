
function plusC(){
  cols++;
  console.log(cols);
  showResultCols(cols);
}

function minusC(){
  cols--;
  showResultCols(cols);
}

function plusL(){
  rows++;
  showResultRows(rows);
}

function minusL(){
  rows--;
  showResultRows(rows);
}

function plusJ(){
  player++;
  if(player>6)player=6;
  showResultPlayer(player);
}

function minusJ(){
  player--;
  if(player<2)player=2;
  showResultPlayer(player);
}

function showResultCols(cols)
{
  var resultElem = document.getElementById("cols");
  resultElem.textContent = "Nombre de colonnes : "+cols.toString();
}

function showResultRows(rows)
{
  var resultElem = document.getElementById("rows");
  resultElem.textContent = "Nombre de lignes : "+rows.toString();
}

function showResultPlayer(player)
{
  var resultElem = document.getElementById("player");
  resultElem.textContent = "Nombre de joueurs : "+player.toString();
}
