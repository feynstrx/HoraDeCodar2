function executarExercicio6() {
    alert("Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles.");

    let primeiro = parseInt(prompt("Digite o 1º número: "));
    let maior = primeiro;
    let ultimo;

    for (let contadora = 2; contadora <= 4; contadora++) {
        let numero = parseInt(prompt(`Digite o ${contadora}º número: `));
        if (numero > maior) {
            maior = numero;
        }
        ultimo = numero; // Sempre atualiza para o último número digitado
    }

    alert(`O primeiro número é: ${primeiro}. O último número é ${ultimo}. O maior número é: ${maior}.`);
}
