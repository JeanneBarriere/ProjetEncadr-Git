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
