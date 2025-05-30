 function executarExercicio3() {
    alert("Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.");

    let numero1 = parseInt(prompt("Digite um número: "));
    let numero2 = parseInt(prompt("Digite um número diferente do primeiro: "));
    let numero3 = parseInt(prompt("Por fim, digite outro número: "));

    let maior = numero1;

    if (numero2 > maior) {
        maior = numero2;
    }
    if (numero3 > maior) {
        maior = numero3;
    }

    alert("O número maior é: " + maior);
}
