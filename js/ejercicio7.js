 function jue(){
     let cara = document.getElementById(1).value
     let sello = document.getElementById(2).value
     var caraMoneda = Math.floor(Math.random() * 2);
        if(caraMoneda == cara){
        alert("Felicidades ganaste el juego")
    }else{
        alert("Lo siento has tenido mala suerte")
    }
}
