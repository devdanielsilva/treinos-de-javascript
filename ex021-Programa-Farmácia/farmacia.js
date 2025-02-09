/*const prompt = require("prompt-sync")(); //adiciona pacote prompt-sync
const valor = Number(prompt("Valor da Compra R$: ")); //lê o valor da compra
const aux = Math.floor(valor / 20); //aux = n° de parcelas sem condições

let parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux; //operador ternário
const valorParcela = valor / parcelas; //cálculo do valor da parcela
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`);
*/

/* Não precisa desse bloco, o bloco if-else no final do código é desnecessário, pois a lógica já foi aplicada na definição inicial da variável parcelas. O código pode ser simplificado removendo esse bloco.

if (aux == 0) {
  parcelas = 1;
} else if (aux > 6) {
  parcelas = 6;
} else {
  parcelas = aux;
}*/

const prompt = require("prompt-sync")(); // Adiciona pacote prompt-sync

let valor;
do {
  valor = Number(prompt("Valor da Compra R$: "));
  if (isNaN(valor) || valor <= 0) {
    console.log("Por favor, insira um valor válido maior que zero.");
  }
} while (isNaN(valor) || valor <= 0);

const aux = Math.floor(valor / 20); // Calcula número de parcelas sem condições

let parcelas = aux === 0 ? 1 : aux > 6 ? 6 : aux; // Define número de parcelas
const valorParcela = valor / parcelas; // Calcula o valor de cada parcela

console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`);
