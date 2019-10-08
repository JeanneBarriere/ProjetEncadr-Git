var tab = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],];
var compteur = 1;
var colonne;
var ligne;
var joueur;
var nbjetonspourgagner = 4; //Il faut aligner 4 jetons pour un puissance 4 classique
const MAX_COL = 6;  //WARNING : Imposer à l'utilisateur que le nombre de colonnes doit être impair sinon le fichier win.js ne peut pas être juste
                  //Ici l'utilisateur demande 7 colonnes donc MAX_COL vaut 6 (car dans un tableau le premier element est 0)
const MAX_LI = 5; //Ici l'utilisateur demande 6 lignes donc MAX_LI vaut 5 (car dans un tableau le premier element est 0)

function play (i){
  if (compteur%2 == 0){
    playJ2 (i);
  }else{
    playJ1 (i)
  }
  compteur ++;
}

function playJ1 (i){
  tab[i][column(i)] = 1;
  colorj1();
}

function playJ2 (i){
  tab[i][column(i)] = 2;
  colorj2();
}


function column(column){
    let lign;
    for (var i = 0; i<MAX_COL ; i++){
      if (tab[column][i]!=0){
        continue;
      }else{
        lign = i;
        break;
      }
    }
      ligne = lign;
      colonne = column;
      return lign;
     
    }

    var a=document.getElementById('a');
    var b=document.getElementById('b');
    var c=document.getElementById('c');
    var d=document.getElementById('d');
    var e=document.getElementById('e');
    var f=document.getElementById('f');
    var g=document.getElementById('g');

    function colorj1(){
        var cellule='c'+colonne+ligne;
        document.getElementById(cellule).className="j1";
    }

    function colorj2(){
        var cellule='c'+colonne+ligne;
        document.getElementById(cellule).className="j2";
    }


    a.addEventListener("click", function(){
      play(0);
    });

    b.addEventListener("click", function(){
      play(1);
    });

    c.addEventListener("click", function(){
      play(2);
    });

    d.addEventListener("click", function(){
      play(3);
    });

    e.addEventListener("click", function(){
      play(4);
    });

    f.addEventListener("click", function(){
      play(5);
    });

    g.addEventListener("click", function(){
      play(6);
    });
