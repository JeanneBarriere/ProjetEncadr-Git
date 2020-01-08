
function plusC(){
  cols++;
  if(cols>20)cols=20;
  showResultCols(cols);
}

function minusC(){
  cols--;
  if(cols<4)cols=4;
  showResultCols(cols);
}

function plusL(){
  rows++;
  if(rows>11)rows=11;
  showResultRows(rows);
}

function minusL(){
  rows--;
  if(rows<4)rows=4;
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
