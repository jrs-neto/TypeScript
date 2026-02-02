import leia from "readline-sync";

const numeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
  let numeroResposta = leia.questionFloat("Digite um Numero Inteiro (Por favor, nao repita o numero.");
  numeros.add(numeroResposta);
}

console.log("Listar dados do Set: ");
for (let numero of numeros) {
  console.log(numero);
}
