
// Función de sumar
function sumar() {
    let inputOperando1 = parseFloat(document.getElementById('op1').value);
    let inputOperando2 = parseFloat(document.getElementById('op2').value);

    let resultado = inputOperando1 + inputOperando2;
        
    document.getElementById('resultado').innerHTML = resultado;
}

// Función de resta
function resta() {
    let inputOperando1 = parseFloat(document.getElementById('op1').value);
    let inputOperando2 = parseFloat(document.getElementById('op2').value);

    let resultado = inputOperando1 - inputOperando2;
    document.getElementById('resultado').innerHTML = resultado;
}

// Función de multiplicar
function multiplicar() {
    let inputOperando1 = parseFloat(document.getElementById('op1').value);
    let inputOperando2 = parseFloat(document.getElementById('op2').value);

    let resultado = inputOperando1 * inputOperando2;
    document.getElementById('resultado').innerHTML = resultado
}

// Función de dividir
function dividir() {
    let inputOperando1 = parseFloat(document.getElementById('op1').value);
    let inputOperando2 = parseFloat(document.getElementById('op2').value);

    let resultado = inputOperando1 / inputOperando2;
    document.getElementById('resultado').innerHTML = resultado
}