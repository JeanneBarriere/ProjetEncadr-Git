  let counter = 0;
  let j1color = 1;
  let j2color = 6;
  let element_id = '#game' ;
  let rows = 6 ;
  var cols = 7 ;
  let p4 = new Puissance4('#game', rows, cols);
  render(p4);

  const musique = new Audio('sound/cours.mp3') ;

  function activateSound(){
      document.getElementById('activateSound').style.display='none';
      document.getElementById('desactivedSound').style.display='block';
      musique.play() ;
  }

  function desactivedSound(){
      document.getElementById('desactivedSound').style.display='none';
      document.getElementById('activateSound').style.display='block';
      musique.pause() ;
  }

function plusC(){
  cols++;
  console.log(cols);
  p4 = new Puissance4('#game', rows, cols);
  //render(p4);
}

function minusC(){
  cols--;
  console.log(cols);
  p4 = new Puissance4('#game', rows, cols);
  render(p4);
}

function plusL(){
  rows++;
  console.log(cols);
  p4 = new Puissance4('#game', rows, cols);
  render(p4);
}

function minusL(){
  rows--;
  console.log(cols);
  p4 = new Puissance4('#game', rows, cols);
  render(p4);
}
