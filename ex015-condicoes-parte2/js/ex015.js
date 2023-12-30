var idade = 68;
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
  console.log(`Não vota!`);
} else if (idade < 18 || idade > 65){ /*Usando else if, para economizar um bloco de código, economizar escrita. E porque if e else é muito usado.*/ 
  console.log(`Voto opcional!`);
} else {
  console.log(`Voto Obrigatório!`);
}
