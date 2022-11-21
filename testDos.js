const tipoSuscripcion = "Basic";

if (tipoSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoSuscripcion == "Basic"){
    console.log("puedes tomar casi todos los cursos de platzi durante un mes");
}else if(tipoSuscripcion == "Expert"){
    console.log("puedes tomar casi todos los cursos de platzi durante un año");
}else if(tipoSuscripcion == "ExpertPlus"){
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un año");
}else{
    console.log("intente con otro");
}
