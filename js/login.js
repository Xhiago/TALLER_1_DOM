function validacion(){
const nom = document.getElementById("name").value
const con = document.getElementById("password").value
const formulario = document.getElementById("cform");

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let mensaje =""
    let entrar = false
    parrafo.innerHTML=""
    if(nom.value.length<6){
        mensaje += "El nombre es demasiado corto <br>"
        entrar = true
    }
    if(con.value.length<8){
        mensaje += "La contraseña es demasiado corta"
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = mensaje
    }else{
        parrafo.innerHTML = "Enviado"
    }

})
}