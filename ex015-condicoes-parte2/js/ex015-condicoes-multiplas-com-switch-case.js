var agora = new Date();
var diaSem = agora.getDay(); /*Pega o dia da semana. */
/*0 = Domingo, 1 = Segunda, 2 = Terça, 3 = Quarta, 4 = Quinta, 5 = Sexta, 6 = Sábado */

/*console.log(diaSem);
Vai o número da posição do dia e não o nome do dia.
Para resolver isso, fazemos isso ....
 */

switch (diaSem) {
  case 0:
    console, log("Domingo");
    break;
  case 1:
    console.log("Segunda - Feira");
    break;
  case 2:
    console.log("Terça - Feira");
    break;
  case 3:
    console.log("Quarta - Feira");
    break;
  case 4:
    console.log("Quinta - Feira");
    break;
  case 5:
    console.log("Sexta - Feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  default: /*Nesse caso é opcional. */
    console.log("[ERRO] Dia inválido!");
} /*Usamos a estrutura do Switch para poder mostrar os dias da semana, de acordo com posição de cada dia. De 0 a 6. */
