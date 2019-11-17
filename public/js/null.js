function tabplein(p4){
	for (let i = 0 ; i < p4.cols ; i++){
		if(p4.board[p4.rows-1][i] === 0){
			return ; 
		}
	}
	p4.winner = 3 ;
	return ;
}