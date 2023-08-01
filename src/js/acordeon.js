const itensPerguntaEResposta = document.querySelectorAll(".item");

itensPerguntaEResposta.forEach((item) => {
  item.addEventListener("click", () => {
    const itemAtivoAtual = document.querySelector(".ativo");

    if (itemAtivoAtual === item) {
      item.classList.remove("ativo");
    } else {
      if (itemAtivoAtual) {
        itemAtivoAtual.classList.remove("ativo");
      }

    item.classList.add("ativo");
    }
  });
});
