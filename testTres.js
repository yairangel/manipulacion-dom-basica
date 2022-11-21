var tipoDeSuscripcion = [
    {nombre: "Free", descripcion: "Solo puedes tomar los cursos gratis"},
    {nombre: "Basic", descripcion: "puedes tomar casi todos los cursos de platzi durante un mes"},
    {nombre: "Expert", descripcion: "puedes tomar casi todos los cursos de platzi durante un año"},
    {nombre: "ExpertPlus", descripcion: "Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un año"},
]

const miSubscripcion = "Basic";

var mensaje = tipoDeSuscripcion.find(function(subscripcion){
    return subscripcion.nombre == miSubscripcion
})