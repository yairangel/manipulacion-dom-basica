// if(suma == 4){
//     document.write('Felicidades');
// }else{
//     do {
//         prompt('¿cuanto es 2 + 2?');
//     }while (i == 4);
// };

let y = 0;

/* do {
    suma = prompt('¿cuanto es 2 + 2?');
    console.log("volvemos a intentarlo");
    y++;
}while (suma != 4){
    console.log("felicidades");
}; */

numero = 4;
while (respuesta != numero) {
    respuesta = prompt('¿cuanto es 2 + 2?');
    console.log("volvemos a intentarlo");
    numero = respuesta;
};

if (repuesta == numero){
    console.log("felicidades");
}