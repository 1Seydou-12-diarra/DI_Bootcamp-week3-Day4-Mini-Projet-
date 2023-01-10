let cadre = document.getElementById('cadre');//recuperation de l'id de des grilles
let colors = document.querySelectorAll('.couleur');//recuperation de la class des couleurs

/**
 * ic l'on crée des grilles
 */
for (let i = 0; i < 1620; i++) {
    let carre = document.createElement('div');
    carre.classList.add('lesCarres');
    cadre.appendChild(carre);
}

/**
 * ajout de couleur sur boutton avec l'ecouteur d'evenement
 */
colors.forEach(couleur => {
    couleur.addEventListener('click', () => {
        couleurCourante = couleur.style.backgroundColor;
    });
});

let Dessin= false;
let couleurCourante = '';

/**
 * ici l'on ajoute des couleurs aux Evenements
 */
const squares = document.querySelectorAll('.lesCarres');
squares.forEach(lesCarres => {
    lesCarres.addEventListener('mousedown', () => {
        Dessin = true;
        lesCarres.style.backgroundColor = couleurCourante;
    });
    lesCarres.addEventListener('mouseup', () => {
        Dessin = false;
    });
    lesCarres.addEventListener('mouseover', () => {
        if (Dessin) {
        lesCarres.style.backgroundColor = couleurCourante;
        }
    });
});