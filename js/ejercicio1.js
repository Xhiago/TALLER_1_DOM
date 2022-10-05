function imprimir(){
let nombre = document.getElementById("nombre").value
alert("su nombre es "+nombre)
}
function longitud(){
    let nombre = document.getElementById("nombre").value
    alert("La longitd de su nombre es "+nombre.length)
}
function mayusculas(){
    let nombre = document.getElementById("nombre").value
    alert("Su nombre se ha convertido en mayúsculas "+nombre.toUpperCase())
}
function minusculas(){
    let nombre = document.getElementById("nombre").value
    alert("Su nombre se ha convertido en minusculas "+nombre.toLowerCase())
}
function primerc(){
    let nombre = document.getElementById("nombre").value
    let caracter = nombre.charAt(0);
    alert("Su primer caracter es: "+caracter)
}
    
