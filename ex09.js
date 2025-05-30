function executarExercicio9() {
    alert("Escreva um programa para ler o ano de nascimento de uma pessoa e dizer se ela pode votar este ano.");

    let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu: "));
    let anoAtual = new Date().getFullYear();  // Obtém o ano atual dinamicamente

    if (anoAtual - anoNascimento >= 18) {
        alert("Pode votar.");
    } else {
        alert("Não pode votar.");
    }
}
