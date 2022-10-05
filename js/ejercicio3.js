function triamgulos(){
    const lado1 = document.getElementById("1").value
    const lado2 = document.getElementById("2").value
    const lado3 = document.getElementById("3").value
    if(lado1==lado2 && lado1==lado3 && lado2==lado3){
        alert("Todos sus lados son iguales, por lo tanto su triángulo es de tipo equilatero")
    }else if(lado1==lado2 || lado1==lado3 || lado2==lado3){
        alert("Su triángulo es de tipo isóceles")
    }else{
        alert("Ninguno de sus lados coincide, por ende su triángulo es de tipo escaleno")
    }
    }
    