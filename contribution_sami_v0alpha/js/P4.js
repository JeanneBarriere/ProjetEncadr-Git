// classe P4 dans le fichier P4.js
class P4
	{
		// constructeur par defaut pour la V0
		constructor(selector)
			{
				this.COL = 7 ; 
				this.LGN = 6 ;
				this.selector = selector;
				this.player = 'red' ; 
				
				this.drawGame() ; // Affiche le jeu 
				this.listen() ; 
				//this.gagner pour checker qui gagne 
			}
	
			// Affichage du jeu
			drawGame()
				{
					const $jeu = $(this.selector) ; 
		
					for(let lgn = 0; lgn < this.LGN; lgn++) // boucle des lignes
						{
							const $lgn = $('<div>').addClass('lgn');
							for(let col = 0; col < this.COL; col++) // boucle des colonnes
								{
									const $col = $('<div>').addClass('col empty').attr("data-col", col).attr("data-lgn", lgn) ; 
									$lgn.append($col);
								}
							$jeu.append($lgn);
						}
				}
	
		listen()
			{
				const $jeu = $(this.selector) ; 
				const that = this ; 
				
				// cherche la dernière case libre
				function lastCase(col)
					{
						const $cells = $(`.col[data-col='${col}']`) ;
						for(let i = $cells.length - 1; i >= 0 ; i--)
							{
								const $cell = $($cells[i]) ;
								if($cell.hasClass('empty'))
									{
										return ($cell) ; 
									}
							}
						return (null) ; 
					}
					
				$jeu.on('mouseenter', '.col.empty', function()
					{
						const $col = $(this).data('col') ; 
						const $last = lastCase($col) ;
						if($last != null)
							{
								$last.addClass(`p${that.player}`) ; 
							}
					}) ;
					
				$jeu.on('mouseleave', '.col', function()
					{
						$('.col').removeClass(`p${that.player}`) ; 
					}) ;
					
				$jeu.on('click', '.col.empty', function()
					{
						const col = $(this).data('col') ; 
						const $last = lastCase(col) ; 
						$last.addClass(`${that.player}`).removeClass(`empty p${that.player}`).data('player', `${that.player}`) ; 
						
						// tour du joueur opposé
						that.player = (that.player === 'red') ? 'yellow' : 'red' ; 
					}) ; 
			}
			


	}