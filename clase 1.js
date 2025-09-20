javascript>
// Inicio

// Función para determinar la naturaleza de un número
function determinarNaturaleza(numero) {
  // Verificar si el número es inválido (negativo)
  if (numero < 0) {
    // Número inválido
    return "Inválido";
  } else if (numero === 0) {
    // Número neutro
    return "Neutro";
  } else {
    // El número es positivo
    if (numero % 7 === 0) {
      // Número mágico (múltiplo de 7)
      return "¡Número mágico!";
    } else if (numero % 2 === 0) {
      // Número par
      let resultado = "Par\n";
      resultado += `Raíz cuadrada: ${Math.sqrt(numero)}`;
      return resultado;
    } else {
      // Número impar
      let resultado = "Impar\n";
      resultado += `Valor al cuadrado: ${numero * numero}`;
      return resultado;
    }
  }
}

// Función para probar diferentes números
function probarNumeros() {
  // Definir números a probar
  let numeros = [-5, 0, 7, 10, 23, 49];

  // Iterar sobre números y mostrar resultados
  for (let numero of numeros) {
    let resultado = determinarNaturaleza(numero);
    console.log(`Número: ${numero}\n${resultado}\n`);
  }
}

// Llamar a la función para probar números
probarNumeros();

// Fin