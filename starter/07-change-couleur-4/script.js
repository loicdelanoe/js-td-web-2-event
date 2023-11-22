/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/
// red.addEventListener('click', () => {
//     body.style.backgroundColor = 'red';
// });
//
// green.addEventListener('click', () => {
//     body.style.backgroundColor = 'green';
// });


const color = {
    body: document.body,
    alpha: 1,
    init() {
        this.inputs = document.querySelectorAll('input[type="radio"]');

        this.inputs.forEach((input) => {
            input.addEventListener('change', () => {
                this.body.style.backgroundColor = input.value;
            });
        });

        this.randomBtn = document.getElementById('boutonCouleur');
        this.randomBtn.addEventListener('click', () => {
            this.red = Math.floor(Math.random() * 255);
            this.green = Math.floor(Math.random() * 255);
            this.blue = Math.floor(Math.random() * 255);
            this.body.style.backgroundColor = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
        });
    },
};

color.init();

console.log(color.alpha);