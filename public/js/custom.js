
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
  showResultRows(player);
}

function minusJ(){
  player--;
  if(player<2)player=2;
  showResultRows(player);
}

function showResultCols(cols)
{
  var resultElem = document.getElementById("cols");
  resultElem.textContent = "Nombre de joueurs : "+cols.toString();
}

function showResultRows(rows)
{
  var resultElem = document.getElementById("rows");
  resultElem.textContent = "Nombre de lignes : "+rows.toString();
}

function showResultRows(player)
{
  var resultElem = document.getElementById("player");
  resultElem.textContent = "Nombre de lignes : "+player.toString();
}
