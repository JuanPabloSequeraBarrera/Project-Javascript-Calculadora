const pantalla = document.querySelector('.texto');
const botones = document.querySelectorAll('.boton');
let base = 0;
let exp =0;
let op = '**'
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
        base = 0;
        exp = 0;
    }else if (valor == 'Sen'){
        calcSen();
    }else if (valor == 'Cos'){
        calcCos();
    }else if (valor == 'Tan'){
        calcTan();
    }else if (valor == '√'){
        calcRaiz();
    }else if (valor == 'X^y'){
        CalcElevar()
    }
    else{
        pantalla.value += valor;
    }
}

function CalcElevar(){
    const pantalla = document.querySelector('.texto');
    try{
        if (base == 0){
            base = pantalla.value;
            pantalla.value = '';
        }else if (exp == 0){
            exp = pantalla.value;
        }
        if (base != 0 && exp >0){
            const resultado = Math.pow(base, exp);
            pantalla.value = resultado.toFixed(2);
            base = 0
            exp = 0
        }
    }catch(error){
        pantalla.value = 'Error'
    }
}

function calcular(){
    const pantalla = document.querySelector('.texto');
    try {
        if (pantalla.value.includes('sin')){
            pantalla.value = `Math.sin(${parseFloat((pantalla.value.substring(4,pantalla.value.length))* (Math.PI/180))})`;
        }
        const resultado = eval(pantalla.value);
        pantalla.value = resultado.toFixed(2);
    }catch (error){
        pantalla.value = 'Error';
    }
}

function calcSen(){
    const pantalla = document.querySelector('.texto');
    try {
        if (!pantalla.textContent.startsWith("sin"))
                pantalla.value = "sin(";
        // const grados = parseFloat(pantalla.value);
        // const rad = grados * (Math.PI/180);
        // console.log(eval(`Math.sin(${rad})`))
        // const resultado = eval(`Math.sin(${rad})`);
        // pantalla.value = resultado.toFixed(2);
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