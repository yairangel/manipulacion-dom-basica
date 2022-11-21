const h1 = document.querySelector('h1');
const parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
//const pid = document.getElementById('pid');
const input = document.querySelector('input')

console.log({
    h1,
    parrafo,
    pid,
    input,
});

// agregar propiedades al DOM
/* h1.innerHTML = 'comentario <br> html';
h1.innerText = 'comentario <br> text'; */

//SET(cambia) & GET(toma) *Attribute
/* console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo'); */

//agregar clase con .add de *classList y quita con .remove
h1.classList.add('rojo');
h1.classList.remove('verde');

//toggle agrega y quita dependiente el estado
/*h1.classList.toggle('verde');*/
//contains devuelve true o false
/*h1.classList.toggle('verde');*/

input.value = 'por defecto';

/* document.createElement('img'); */
const img = document.createElement('img');
img.setAttribute('src', 'https://startupxplore.com/uploads/ff8080815235115101523595712a00de-large.png');

pid.innerText = "";
pid.append(img);