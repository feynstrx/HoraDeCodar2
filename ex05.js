function executarExercicio5() {
    alert("Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.");

    let soma = 0;
    let informados = [];

    for (let contadora = 1; contadora <= 6; contadora++) {
        let numero = parseFloat(prompt(`Informe o ${contadora}º número: `));
        informados.push(numero);
        soma += numero;
    }

    let media = soma / informados.length;

    let numerosInformados = "Números informados: " + informados.join(", ");
    
    alert(`${numerosInformados}.\nA média dos números informados é: ${media.toFixed(2)}`);
}