function newpart(){
  reset(p4);
  render(p4);
  var resultElem = document.getElementById("win");
  resultElem.textContent = "Partie en cours...";
  var resultElem = document.getElementById("counter");
  resultElem.textContent = "Nombre de tours : 0";
  document.getElementById("newpart").style.display ="none";
  counter = 0;
  return;

}
