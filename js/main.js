'use strict';


const input = document.querySelector('.js-input')
const button = document.querySelector('.js-button');

// Generar número aleatorio
const max = 100;

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}
console.log('El número aleatorio es:', getRandomNumber(max));



button.addEventListener('click', (event) => {
  event.preventDefault();
  const userNumber = parseFloat(input.value);
  console.log('El número introducido por la usuaria es:', userNumber);
});