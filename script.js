var tab = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0],];
var compteur = 1;
var colonne;
var ligne;

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
    for (var i = 0; i<6 ; i++){
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
