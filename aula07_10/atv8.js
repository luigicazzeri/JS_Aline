function calcularMontante(capital, taxa, tempo) {
    const i = taxa / 100;
    const montante = capital * Math.pow((1 + i), tempo); 
    let capital = parseFloat(prompt("Digite o capital inicial investido:"));
    let taxa = parseFloat(prompt("Digite a taxa de juros mensal (em %):"));
    let tempo = parseInt(prompt("Digite o tempo de investimento (em meses):"));
    return montante;
}
console.log(`O montante após ${tempo} meses é: R$ ${montanteFinal.toFixed(2)}`);

