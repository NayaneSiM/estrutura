function calcularMedia() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const media = (num1 + num2 + num3) / 3;
    document.getElementById("resultado1").textContent = `A média é: ${media.toFixed(2)}`;
}

function verificarMaioridade() {
    const idade = parseInt(document.getElementById("idade").value);
    if (idade >= 18) {
        alert("Você é maior de idade.");
    } else {
        alert("Você é menor de idade.");
    }
}

function exibirMes() {
    const mes = parseInt(document.getElementById("mes").value);
    const meses = ["Inválido", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    if (mes >= 1 && mes <= 12) {
        document.getElementById("resultado3").textContent = `O mês é: ${meses[mes]}`;
    } else {
        document.getElementById("resultado3").textContent = "Número inválido. Digite um número entre 1 e 12.";
    }
}
