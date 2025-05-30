function executarExercicio7() {
    alert("Faça um programa que leia 6 números informados pelo usuário. Todos os números inferiores a 72 devem ser somados. Exiba a soma e os números informados.");

    let soma = 0;
    let informados = [];

    for (let i = 1; i <= 6; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número: `));
        informados.push(num);

        if (num < 72) {  // Corrigido para verificar apenas números inferiores a 72
            soma += num;
        }
    }

    let numerosInformados = "Números informados: " + informados.join(", ");
    alert(`${numerosInformados}.\nA soma dos valores inferiores a 72 é: ${soma}.`);
}
