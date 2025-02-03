window.onload = function () {
  const saudacao = document.getElementById("saudacao");
};
const hora = new Date().getHours();

if (hora >= 5 && hora < 12) {
  saudacao.textContent =
    "Bom dia gamer, seja bem-vindo a minha lista de jogos!";
} else if (hora >= 12 && hora < 18) {
  saudacao.textContent =
    "Boa tarde gamer, seja bem-vindo a minha lista de jogos!";
} else {
  saudacao.textContent =
    "Boa noite gamer, seja bem-vindo a minha lista de jogos!";
}
