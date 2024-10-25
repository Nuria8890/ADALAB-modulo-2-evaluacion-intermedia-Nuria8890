'use strict';


const input = document.querySelector('.js-input')
const button = document.querySelector('.js-button');

// Generar número aleatorio
const max = 100;

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}
const randomNumber = getRandomNumber(max);
console.log('El número aleatorio es:', randomNumber);

// Cuando hago click en el botón "Prueba" accedo al contenido del input
button.addEventListener('click', (event) => {
  event.preventDefault();
  const userNumber = parseFloat(input.value);
  console.log('El número introducido por la usuaria es:', userNumber);

  if(userNumber === randomNumber) {
    console.log('el número es el mismo')
  } else {
    console.log('El número es diferente')
  }
  
});

// Comparar el userNumber con el número aleatorio

