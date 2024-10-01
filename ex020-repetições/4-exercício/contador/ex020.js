function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert("[ERRO] Faltam Dados!");
  } else {
    res.inneHTML = "Contando : <br>";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0) {
      alert("Passo inválido! Considerando o PASSO 1");
      p = i;
    }

    /*Aqui poderiamos usar fácil, o while, do while ou o for.*/
    if (i < f) {
      /*Contagem crescente*/
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      /*Contagem regressiva*/
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
