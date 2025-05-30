function executarExercicio2() {
    alert("Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.");

    let valor = parseInt(prompt("Digite um valor: "));

    if (valor > 0) {
        alert("O valor " + valor + " é positivo!");
    } else if (valor < 0) {
        alert("O valor " + valor + " é negativo!");
    } else {
        alert("O valor " + valor + " é neutro!");
    }
}
