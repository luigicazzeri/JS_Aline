function areaTriangulo(base, altura){
    let base = parseFloat(prompt("Digite a base:"));
    let altura = parseFloat(prompt("Digite a altura:"));
    let area = areaTriangulo(base, altura);
    return base*altura/2
}
console.log(`A area do triangulo é: ${area.toFixed(2)}`);

