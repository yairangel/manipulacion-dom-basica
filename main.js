/*const name = "yair";
const lastname = "felix";
const nickName = "pul";

var cp = function(name, lastname, nickName){
    completeName = name + lastname;
    console.log("Mi nombre es", completeName, "pero prefiero que me digas", nickName, ".");
}*/

var art = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500 },
    {nombre: "Libro", costo: 320 },
    {nombre: "Celular", costo: 10000 },
    {nombre: "Laptop", costo: 20000 },
    {nombre: "Teclado", costo: 500 }
];

var encontrarArticulo = art.find(function(art){
    return art.nombre == "Laptop"
})

//art.forEach(function(art){
//    console.log(art.nombre);
//});

//var artBaratos = art.some(function(articulo){
//    console.log(articulo.costo <= 700);
//});

//var artFiltrados = art.filter(function(articulo){
//    return articulo.costo <= 500;
//});

