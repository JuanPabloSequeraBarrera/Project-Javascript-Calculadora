const pantalla = document.querySelector('.texto');
const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        manejoClick(boton.textContent);
    });
});

function manejoClick(valor){
    const pantalla = document.querySelector('.texto');
    if (valor == '='){
        calcular();
    }else if (valor == 'C'){
        pantalla.value = '';
    }else if (valor == 'Sen'){
        calcSen();
    }else if (valor == 'Cos'){
        calcCos();
    }else if (valor == 'Tan'){
        calcTan();
    }else if (valor == '√'){
        calcRaiz();
    }
    else{
        pantalla.value += valor;
    }
}

function calcular(){
    const pantalla = document.querySelector('.texto');
    try {
        const resultado = eval(pantalla.value);
        pantalla.value = resultado.toFixed(2);
    }catch (error){
        pantalla.value = 'Error';
    }
}

function calcSen(){
    const pantalla = document.querySelector('.texto');
    try {
        const grados = parseFloat(pantalla.value);
        const rad = grados * (Math.PI/180);
        const resultado = Math.sin(rad);
        pantalla.value = resultado.toFixed(2);
    }catch (error){
        pantalla.value = 'Error'
    }
}

function calcCos(){
    const pantalla = document.querySelector('.texto');
    try {
        const grados = parseFloat(pantalla.value);
        const rad = grados * (Math.PI/180);
        const resultado = Math.cos(rad);
        pantalla.value = resultado.toFixed(2);
    }catch (error){
        pantalla.value = 'Error'
    }
}

function calcTan(){
    const pantalla = document.querySelector('.texto');
    try {
        const grados = parseFloat(pantalla.value);
        const rad = grados * (Math.PI/180);
        const resultado = Math.tan(rad);
        pantalla.value = resultado.toFixed(2);
    }catch (error){
        pantalla.value = 'Error'
    }
}

function calcRaiz(){
    const pantalla = document.querySelector('.texto');
    try {
        const resultado = Math.sqrt(pantalla.value);
        pantalla.value = resultado;
    }catch (error){
        pantalla.value = 'Error'
    }
}