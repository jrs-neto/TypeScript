import stack = require("../stack");
import leia from "readline-sync";

const pilha = new stack<string>();
let opcoes: string;

do {
  console.log("************************************************************");
  console.log("1 - Adicionar Livro na pilha");
  console.log("2 - Listar todos os Livros");
  console.log("3 - Retirar Livro da pilha");
  console.log("0 - Sair");
  console.log("************************************************************");

  opcoes = leia.question("Digite a opcao desejada.");

  switch (opcoes) {
    case "1":
      pilha.push(leia.question("Digite o nome do Livro: "));
      pilha.printStack();
      console.log("Livro Adicionado!");
      break;

    case "2":
      if (pilha.isEmpty()) {
        console.log("A pilha está vazia.");
      } else {
        pilha.printStack();
      }
      break;

    case "3":
      if (pilha.isEmpty()) {
        console.log("A pilha está vazia.");
      } else {
        const livro = pilha.pop();
        console.log(`O Livro ${livro} foi retirado da pilha`);
        pilha.printStack();
      }
      break;

    case "0":
      console.log("Programa finalizado.");
      break;

    default:
      console.log("Opção Inválida.");
      break;
  }
} while (opcoes !== "0");
