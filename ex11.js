function executarExercicio11() {
    alert("Micro calculadora: Escolha uma operação para ser executada sobre dois valores inteiros informados pelo usuário.");

    let valor1 = parseInt(prompt("Digite o primeiro valor: "));
    let valor2 = parseInt(prompt("Digite o segundo valor: "));
    
    while (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira valores numéricos válidos.");
        valor1 = parseInt(prompt("Digite o primeiro valor: "));
        valor2 = parseInt(prompt("Digite o segundo valor: "));
    }

    let opcao = parseInt(prompt("Digite o número para realizar a operação:\n\n1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação"));

    while (![1, 2, 3, 4].includes(opcao)) {
        opcao = parseInt(prompt("Opção inválida! Digite um número válido:\n\n1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação"));
    }

    switch (opcao) {
        case 1:
            alert(`${valor1} + ${valor2} = ${valor1 + valor2}`);
            break;
        case 2:
            alert(`${valor1} - ${valor2} = ${valor1 - valor2}`);
            break;
        case 3:
            if (valor2 === 0) {
                alert("Erro! A divisão por zero não é permitida.");
            } else {
                alert(`${valor1} / ${valor2} = ${(valor1 / valor2).toFixed(2)}`);
            }
            break;
        case 4:
            alert(`${valor1} * ${valor2} = ${valor1 * valor2}`);
            break;
    }
}
