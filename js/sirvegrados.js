let convertir = document.getElementById("convertir")

function conversor(){
    let v = document.getElementById("valor").value
    v = parseInt(v)
    let s1 = document.getElementById("de").value
    s1 = parseInt(s1)
    let s2 = document.getElementById("a").value
    s2 = parseInt(s2)
    let total 

    if (s1==1 && s2==2) {
        total = ((v-32)/1.8)
        alert (total)
    }
    else if (s1==1 && s2==3){
        total = ((v-32)* 5/9 + 273.15)
        alert (total)
    }
    else if(s1==2 && s2==1){
        total = ((v * 9/5)+32)
        alert (total)
    }
    else if(s1==2 && s2==3){
        total = (v + 273.15)
        alert (total)
    }
    else if(s1==3 && s2==1){
        total = (( v - 273.15) * 9/5 + 32)
        alert (total)
    }
    else if(s1==3 && s2==2){
        total = (v - 273.15)
        alert (total)
    }

}


convertir.addEventListener('click', conversor)
