function win(colonne,ligne,joueur,nbjetonspourgagner){
    return (winEnLigne(colonne,ligne,joueur,nbjetonspourgagner)); // || winEnColonne(colonne,ligne,joueur,nbjetonspourgagner) || winEnDiagonale(colonne,ligne,joueur,nbjetonspourgagner)) 
}

function winEnLigne(colonne,ligne,joueur,nbjetonspourgagner){
	var min = (colonne - (MAX_COL/2) < 0) ? 0 : colonne - (MAX_COL/2);
	var max = (colonne + (MAX_COL/2) > MAX_COL) ? MAX_COL : col + (MAX_COL/2);
	var acc = 0;

	for (var i = min; i <= max; i++) {
		if (tab[i][ligne] == joueur) {
			acc++;
			if (acc == nbjetonspourgagner) return true;
		}
		else {
			acc = 0;
		}
	}
	return false;

}
/*
function winEnColonne(colonne,ligne,joueur,nbjetonspourgagner){


}

function winEnDiagonale(colonne,ligne,joueur,nbjetonspourgagner){


} */
