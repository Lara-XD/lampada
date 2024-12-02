// Seleciona os elementos
const lampada = document.getElementById("lampada");
const botao = document.getElementById("botao");
let lampadaAcesa = false; // Estado inicial da lâmpada

// Função para alternar o estado da lâmpada
botao.addEventListener("click", () => {
    lampadaAcesa = !lampadaAcesa; // Inverte o estado

    if (lampadaAcesa) {
        lampada.src = "bulb-on.png"; // Muda a imagem para acesa
        botao.textContent = "Apagar"; // Atualiza o texto do botão
        document.body.style.backgroundColor = "#fffacd"; // Cor de fundo clara
    } else {
        lampada.src = "bulb-off.png"; // Muda a imagem para apagada
        botao.textContent = "Acender"; // Atualiza o texto do botão
        document.body.style.backgroundColor = "#f0f0f0"; // Cor de fundo original
    }
});
