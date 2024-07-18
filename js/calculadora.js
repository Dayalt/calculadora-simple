
// Función de sumar
function sumar() {
    let inputOperando1 = parseFloat(document.getElementById('op1').value);
    let inputOperando2 = parseFloat(document.getElementById('op2').value);

    let resultado = inputOperando1 + inputOperando2;
        
    document.getElementById('resultado').innerHTML = isNaN(resultado) ? 'Error' : resultado;
}

// Función de resta
function restar() {
    let inputOperando1 = parseFloat(document.getElementById('op1').value);
    let inputOperando2 = parseFloat(document.getElementById('op2').value);

    let resultado = inputOperando1 - inputOperando2;
    document.getElementById('resultado').innerHTML = isNaN(resultado) ? 'Error' : resultado;
}

// Función de multiplicar
function multiplicar() {
    let inputOperando1 = parseFloat(document.getElementById('op1').value);
    let inputOperando2 = parseFloat(document.getElementById('op2').value);

    let resultado = inputOperando1 * inputOperando2;
    document.getElementById('resultado').innerHTML = isNaN(resultado) ? 'Error' : resultado;
}

// Función de dividir
function dividir() {
    let inputOperando1 = parseFloat(document.getElementById('op1').value);
    let inputOperando2 = parseFloat(document.getElementById('op2').value);

    let resultado = inputOperando1 / inputOperando2;
    document.getElementById('resultado').innerHTML = isNaN(resultado) ? 'Error' : resultado;
}

// Función para reiniciar
function reiniciar(){
    // eliminar el contenido del #op1, #op2 y #resultado 
    document.getElementById('op1').value = '';
    document.getElementById('op2').value = '';

    document.getElementById('resultado').innerHTML = '';
}