function executarExercicio4() {
    alert("Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.");

    let maior1 = parseInt(prompt(`Informe o 1º número: `));
    let maior2 = parseInt(prompt(`Informe o 2º número: `));
    
    if (maior2 > maior1) {
        [maior1, maior2] = [maior2, maior1];  // Troca os valores se necessário
    }
    
    let valor = parseInt(prompt(`Informe o 3º número: `));

    if (valor > maior1) {
        maior2 = maior1;
        maior1 = valor;
    } else if (valor > maior2) {
        maior2 = valor;
    }

    let soma = maior1 + maior2;
    alert(`A soma dos dois maiores valores é: ${soma}. E eles são: ${maior1} e ${maior2}.`);
}
