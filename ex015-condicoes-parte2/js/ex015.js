var idade = 18;
if (idade < 16) {
  console.log(`Não vota!`);
} else if (idade < 18) { /*Usando else if, para economizar um bloco de código, economizar escrita. E porque if e else é muito usado.*/ 
  console.log(`Voto opcional!`);
} else if (idade > 18) {
  console.log(`Voto Obrigatório!`);
}
