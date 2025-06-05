
let resultado = document.getElementById('resultado');
let expresion = '';

// Agrega valor al resultado
function agregarValor(valor) {
  expresion += valor;
  resultado.innerText = expresion;
}

// Evaluar la expresión
function calcular() {
  try {
    const evalResult = eval(expresion);
    resultado.innerText = isNaN(evalResult) ? 'Error' : evalResult;
    expresion = evalResult.toString(); // guarda el resultado para seguir operando
  } catch {
    resultado.innerText = 'Error';
    expresion = '';
  }
}

// Función de resta


// Función de multiplicar


// Función de dividir

// Función para reiniciar
function reiniciar(){
  expresion = '';
  resultado.innerText = '';
}