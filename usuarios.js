const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', submitEx);

function submitEx(event){
    event.preventDefault();
    respuesta = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = respuesta;
};

