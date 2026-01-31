import leia = require("readline-sync");

const listaCores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
  listaCores.push(leia.question("Digite uma primeira cor: "));
}
console.table(listaCores.sort());
