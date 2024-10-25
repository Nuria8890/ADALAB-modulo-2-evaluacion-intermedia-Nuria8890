'use strict';

const max = 100;
const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const track = document.querySelector('.js-track');
const attempts = document.querySelector('.js-attempts');
let numberAttempts = 0;


// Genero número aletorio
function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}
const randomNumber = getRandomNumber(max);


// Comparo el número introducido por la usuaria con el número aleatorio
const compareNumbers = () => {
  const userNumber = parseInt(input.value);

    if(userNumber === randomNumber) {
      track.innerHTML = 'Has ganado campeona!!!'
    } else if (userNumber < randomNumber && userNumber > 0) {
      track.innerHTML = 'Pista: Demasiado bajo'
    } else if (userNumber > randomNumber && userNumber < 101) {
      track.innerHTML = 'Pista: Demasiado alto'
    } else if (userNumber < 1 || userNumber > 100) {
      track.innerHTML = 'Pista: El número debe estar entre 1 y 100'
    }

  /*También se puede hacer así:  
    if (userNumber < 1 || userNumber > 100) {
      track.innerHTML = 'Pista: El número debe estar entre 1 y 100'  
    } else if (userNumber === randomNumber) {
      track.innerHTML = 'Has ganado campeona!!!'
    } else if (userNumber < randomNumber) {
      track.innerHTML = 'Pista: Demasiado bajo'
    } else if (userNumber > randomNumber) {
      track.innerHTML = 'Pista: Demasiado alto'
    }
  */
}


// Actualizo el número de intentos
const updateAttempst = () => {
  numberAttempts += 1;
    attempts.innerHTML = `Número de intentos: ${numberAttempts}`;
}

// Función manejadora del evento
const handleClickButton = (event) => {
  event.preventDefault();
  compareNumbers();
  updateAttempst();
}

// Escucho el click del botón
button.addEventListener('click', (handleClickButton));




