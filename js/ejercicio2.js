function imprimir(){
    let grado = document.getElementById("grados").value
    let grados = document.getElementById("grados2").value

    var opcion = document.getElementById("grados")
    var selected = opcion.options[opcion.selectedIndex].text
    var opcion2 = document.getElementById("grados2")
    var selected2 = opcion2.options[opcion2.selectedIndex].text
    alert("vas a convertir de "+selected+" para convertir a "+selected2)
}
function calcular(){

    let valor =document.getElementById("valor").value
    valor = parseInt(valor)
    let opcion = document.getElementById("grados").value
    opcion = parseInt(opcion)
    let opcion2 = document.getElementById("grados2").value
    opcion2 = parseInt(opcion2)

    if(opcion == 1 && opcion2 == 2){
        resultado = ((valor-32)/1.8).toFixed(2)
        alert(resultado)
    }else if(opcion==1 && opcion2==3){
        resultado = ((valor-32)* 5/9 + 273.15).toFixed(2)
        alert(resultado)
    }else if(opcion==2 && v==1){
        resultado = ((valor * 9/5)+32).toFixed(2)
        alert(resultado)
    }else if(opcion==2 && opcion2==3){
        resultado = (valor + 273.15).toFixed(2)
        alert(resultado)
    }else if(opcion==3 && opcion2==1){
        resultado = (( valor - 273.15) * 9/5 + 32).toFixed(2)
        alert(resultado)
    }else if(opcion==3 && opcion2==2){
        resultado = (valor - 273.15).toFixed(2)
        alert(resultado)
    }
}
