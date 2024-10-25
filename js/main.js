'use strict';

const input = document.querySelector('.js-input')
const button = document.querySelector('.js-button');
const track = document.querySelector('.js-track');
const attempts = document.querySelector('.js-attempts');
let numberAttempts = 0;

// Generar número aleatorio
const max = 100;

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}
const randomNumber = getRandomNumber(max);

// Cuando hago click en el botón "Prueba" accedo al contenido del input
button.addEventListener('click', (event) => {
  event.preventDefault();
  const userNumber = parseFloat(input.value);

  // Comparar el userNumber con el número aleatorio
    if(userNumber === randomNumber) {
      track.innerHTML = 'Has ganado campeona!!!'
    } else if (userNumber < randomNumber && userNumber > 1) {
      track.innerHTML = 'Pista: Demasiado bajo'
    } else if (userNumber > randomNumber && userNumber < 100) {
      track.innerHTML = 'Pista: Demasiado alto'
    } else if (userNumber < 1 || userNumber > 100) {
      track.innerHTML = 'Pista: El número debe estar entre 1 y 100'
    }

  // Actualizar el contador de intentos cada vez que la jugadora pruebe
    numberAttempts += 1;
    attempts.innerHTML = `Número de intentos: ${numberAttempts}`;
});

