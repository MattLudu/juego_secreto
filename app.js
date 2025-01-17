//variables
let nuemeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteado = [];
let numeroMaximo = 10;

//funciones

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === nuemeroSecreto){
        asignarTextoElemento ('p',`Acertaste el número en ${intentos} 
            ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        // El usuario no acerto 
        if( numeroDeUsuario > nuemeroSecreto ){
            asignarTextoElemento ('p','El número secreto es menor');
    } else {
        asignarTextoElemento ('p','El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteado.length == numeroMaximo){
        asignarTextoElemento ('p' , 'Ya se sortearon todos los números posibles');
    }

    //si el numero Generado esta en la lista
    if(listaNumerosSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`Indica un número entre 1 y ${numeroMaximo}`);
    nuemeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de numero
    //generar el numero alatorio
    //desabilitar el boton de nuevo juego 
    condicionesIniciales();
    //inizialiar el numero de intentos
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();