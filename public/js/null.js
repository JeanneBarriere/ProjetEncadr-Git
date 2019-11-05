function tabplein(p4){

	var plein =1;
	var i=0;

	for (i=0; i<p4.cols; i++){

		if(p4.board[p4.rows-1][i] === 0){
			plein=0;
		}
	}

	if (plein === 1){
		p4.winner=3;
		
	}
}