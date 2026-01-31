import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
  let numeroResposta = leia.questionFloat("Digite um Numero Inteiro (Por favor, nao repita o numero.");

  if (!numeros.has(numeroResposta)) {
    numeros.add(numeroResposta);
  } else {
    leia.questionFloat("Digite um numero diferente.");
  }
}

console.log("Listar dados do Set: ");
for (let numero of numeros) {
  console.log(numero);
}
