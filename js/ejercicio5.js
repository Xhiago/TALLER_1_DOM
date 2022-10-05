const abrir = document.querySelector('.carea')
const modal = document.querySelector('.modall')
const cModal = document.querySelector('.cerrarm')

abrir.addEventListener('click', ()=>{
    modal.classList.add('modal--show');
});

cModal.addEventListener('click', ()=>{
    modal.classList.remove('modal--show');
});
function carea(){
    const valor = document.getElementById("valorarea").value
    const operacion = valor*valor*3.14;
    alert("El área del circulo es = "+operacion)
}
/*MODAL PERIMTETRO CIRCULO*/
const abrirp = document.querySelector('.cperi')
const modalpc = document.querySelector('.modalpc')
const cModalpc = document.querySelector('.cerrarpc')

abrirp.addEventListener('click', ()=>{
    modalpc.classList.add('modal--show');
});

cModalpc.addEventListener('click', ()=>{
    modalpc.classList.remove('modal--show');
});
/* CALCULAR PERIMETRO CIRCULO */
function crperi(){
    const valorp = document.getElementById("valorperi").value
    const operacion = 2*3.14*valorp;
    alert("El perimetro del circulo es = "+operacion)
}
/*MODAL AREA CUADRADO*/
const abrircd = document.querySelector('.cdarea')
const modalcd = document.querySelector('.modalcd')
const cModalcd = document.querySelector('.cerrarcd')

abrircd.addEventListener('click', ()=>{
    modalcd.classList.add('modal--show');
});

cModalcd.addEventListener('click', ()=>{
    modalcd.classList.remove('modal--show');
});
/* CALCULAR AREA CUADRADO*/
function cdarea(){
    const valorcd = document.getElementById("valorareacd").value
    const operacion = valorcd*valorcd;
    alert("El área del cuadrado es = "+operacion)
}
/*MODAL PERIMETRO CUADRADO*/
const abrircdp = document.querySelector('.cdperi')
const modalcdp = document.querySelector('.modalcdp')
const cModalcdp = document.querySelector('.cerrarcdp')

abrircdp.addEventListener('click', ()=>{
    modalcdp.classList.add('modal--show');
});

cModalcdp.addEventListener('click', ()=>{
    modalcdp.classList.remove('modal--show');
});
/* CALCULAR PERIMETRO CUADRADO*/
function cdperi(){
    const valorcdp = document.getElementById("valorpericd").value
    const operacion = valorcdp*4;
    alert("El perimetro del cuadrado es = "+operacion)
}
/*MODAL AREA TRIANGULO*/
const abrirtr = document.querySelector('.areatr')
const modaltr = document.querySelector('.modaltr')
const cModaltr = document.querySelector('.cerrartr')

abrirtr.addEventListener('click', ()=>{
    modaltr.classList.add('modal--show');
});

cModaltr.addEventListener('click', ()=>{
    modaltr.classList.remove('modal--show');
});
/* CALCULAR AREA TRIANGULO*/
function areatr(){
    const base = document.getElementById("basetr").value
    const altura = document.getElementById("alttr").value
    const operacion = base*altura/2;
    alert("El área del triangulo es = "+operacion)
}
/*MODAL PERIEMTRO TRIANGULO*/
const abrirttr = document.querySelector('.peritr')
const modalttr = document.querySelector('.modalttr')
const cModalttr = document.querySelector('.cerrarttr')

abrirttr.addEventListener('click', ()=>{
    modalttr.classList.add('modal--show');
});

cModalttr.addEventListener('click', ()=>{
    modalttr.classList.remove('modal--show');
});
/* CALCULAR PERIMETRO TRIANGULO */
function peritr(){
    const lado1 = document.getElementById("1").value
    const lado2 = document.getElementById("2").value
    const lado3 = document.getElementById("3").value
    const operacion = lado1+lado2+lado3;
    alert("El perimetro del triangulo es = "+operacion)
}
/*MODAL AREA RECTNGULO*/
const abrirrec = document.querySelector('.crec')
const modalrec = document.querySelector('.modalrec')
const cModalrec = document.querySelector('.cerrarrec')

abrirrec.addEventListener('click', ()=>{
    modalrec.classList.add('modal--show');
});

cModalrec.addEventListener('click', ()=>{
    modalrec.classList.remove('modal--show');
});
/* CALCULAR AREA RECTANGULO*/
function arearec(){
    const largor = document.getElementById("largo").value
    const anchor = document.getElementById("ancho").value
    const operacion = largor*anchor;
    alert("El área del rectangulo es = "+operacion)
}
/*MODAL PERIMETRO RECTNGULO*/
const abrirrep = document.querySelector('.prec')
const modalrep = document.querySelector('.modalrep')
const cModalrep = document.querySelector('.cerrarrep')

abrirrep.addEventListener('click', ()=>{
    modalrep.classList.add('modal--show');
});

cModalrep.addEventListener('click', ()=>{
    modalrep.classList.remove('modal--show');
});
/* CALCULAR PERIMETRO */
function recperi(){
    const laado1 = document.getElementById("la1").value
    const laado2 = document.getElementById("la2").value
    const laado3 = document.getElementById("la3").value
    const laado4 = document.getElementById("la4").value
    const operacion = laado1+laado2+laado3+laado4;
    alert("El perimetro del rectangulo es = "+operacion)
}