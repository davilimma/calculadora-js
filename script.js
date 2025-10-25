/* === Reset Básico */

function insertToDisplay(data) {
  document.querySelector("#display").value += data;
}

function clean() {
  document.querySelector("#display").value = "";
}

/* === funções principais da calculadora ===*/ 

function backspace() {
  // Seleciona o campo de exibição (display)
  let display = document.querySelector("#display");

  // Remove o último caractere do texto atual
  display.value = display.value.slice(0, -1);
}


function calculate() {
  // Seleciona o campo de exibição (display)
  let display = document.querySelector("#display");

  try {
    // Usa eval() para avaliar a expressão matemática digitada (ex: 2+3*5)
    display.value = eval(display.value);
  } catch (error) {
    // Se houver erro (ex: expressão inválida), exibe "Erro"
    display.value = "Erro";
  }
}
