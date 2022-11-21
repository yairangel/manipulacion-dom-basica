//recibir un array, imprimir el primer elemento
var arreglo = ["primero", "segundo", "tercero"];
function recorrer(arr){
    console.log(arr[0]);
};
recorrer(arreglo);

//recibir un array, imprimir todos sus elementos uno por uno
var arregloDos = ["primero", "segundo", "tercero"];
function rec(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    };
}
rec(arregloDos);

//recibir objeto e imprimir todos sus elementos uno por uno
var obj1 = {nombre: "a", apellido: "b"};
function recorrerObj(obj){
    for(let key in obj){
        console.log(obj[key]);
    };
};
recorrerObj(obj1);