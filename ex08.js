function executarExercicio8() {
    alert("Escreva um programa que calcule a média de quatro números, mas somente se forem maiores que 0 e menores que 10.");

    let soma = 0;
    let quantidadeValidos = 0;

    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt(`Digite a ${i}ª nota:`));

        if (nota > 0 && nota < 10) {
            soma += nota;
            quantidadeValidos++; // Só conta notas válidas
        }
    }

    if (quantidadeValidos > 0) {
        let media = soma / quantidadeValidos;
        if (media >= 5) {
            alert("VOCÊ PASSOU NO TESTE.");
        } else {
            alert("TENTE NOVAMENTE.");
        }
    } else {
        alert("Nenhum número válido foi inserido!");
    }
}