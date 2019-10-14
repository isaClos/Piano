/* fonction jouer le son qd on presse une touche

function playSound(event) {
    let audiokey = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audiokey.currentTime = 0;
    audiokey.play();
}
window.addEventListener('keydown', playSound);*/

// fonction jouer le son quand on clique sur un élément 'ici les img
let divkey = document.querySelectorAll('.key');

for(var i= 0; i < divkey.length; i++) {
    let keydiv = divkey[i].getAttribute('data-key');
    let audiokey = document.querySelector(`audio[data-key="${keydiv}"]`);

    divkey[i].addEventListener('click', function (event) {
            audiokey.currentTime = 0;
            audiokey.play();
            event.target.classList.add('animate');
        });
}

/* Ajouter une nouvelle function removePlaying(event)
qui enlève la classe CSS sur la currentTarget de l'evenement */
function removePlaying(event) {
    event.target.classList.remove('animate');
}

/*Ajouter un écouteur d'evenement sur chaque .key, sur l'evenement
transitionend et qui fait appelle à la fonction removePlaying*/
divkey.forEach(key=>key.addEventListener('animationend', removePlaying));

