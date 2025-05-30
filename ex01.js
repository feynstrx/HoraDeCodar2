 function executarExercicio1() {
    alert("Escreva um programa em que o usuário informe dois números utilizando o prompt. Então escreva em tela o maior deles.")

    let numero1 = parseInt(prompt("Digite um número: "))
    let numero2 = parseInt(prompt("Agora digite outro número: "))

    if (numero1 > numero2) {
        alert("O número maior é: " + numero1)
    } else if (numero2 > numero1) {
        alert("O número maior é: " + numero2)
    } else {
        alert("Os dois números são iguais: " + numero1)
    }
}
