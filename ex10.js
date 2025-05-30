function executarExercicio10() {
    alert("Informe sua altura e seu sexo para calcular seu peso ideal.");

    let altura = parseFloat(prompt("Qual a sua altura em metros?"));
    let sexo = prompt("Você se identifica como Masculino (M) ou Feminino (F)?").toLowerCase().trim();

    let ideal;
    
    if (sexo === "masculino" || sexo === "m") {
        ideal = (72.7 * altura) - 58;
    } else if (sexo === "feminino" || sexo === "f") {
        ideal = (62.1 * altura) - 44.7;
    } else {
        alert("Entrada inválida. Informe 'M' para masculino ou 'F' para feminino.");
        return;
    }

    alert(`Seu peso ideal é ${ideal.toFixed(2)} kg.`);
}
