function conc(){
    let nombre = document.getElementById("nombre").value
    nombre = parseInt(nombre)
    let ape = document.getElementById("apellido").value
    ape = parseInt(ape)
    let mate = document.getElementById("materia").value
    mate = parseInt(mate)

    if(nombre==1 && ape==1 && mate==1){
        alert("La respuesta es correcta")
    }else{
        alert("Su respuesta es incorrecta")
    }
    if(nombre==1 && ape==1 && mate==2){
        alert("La respuesta es correcta")
    }else{
        alert("Su respuesta es incorrecta")
    }
    if(nombre==2 && ape==2 && mate==2){
        alert("La respuesta es correcta")
    }else{
        alert("Su respuesta es incorrecta")
    }
    if(nombre==3 && ape==3 && mate==3){
        alert("La respuesta es correcta")
    }else{
        alert("Su respuesta es incorrecta")
    }
    if(nombre==4 && ape==4 && mate==4){
        alert("La respuesta es correcta")
    }else{
        alert("Su respuesta es incorrecta")
    } 
    if(nombre==5 && ape==5 && mate==5){
        alert("La respuesta es correcta")
    }else{
        alert("Su respuesta es incorrecta")
    }
    if(nombre==6 && ape==6 && mate==6){
        alert("La respuesta es correcta")
    }else{
        alert("Su respuesta es incorrecta")
    }
}