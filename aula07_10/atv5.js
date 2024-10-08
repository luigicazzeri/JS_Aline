function calcularCirculo(raio) {
    const pi = Math.PI;
    const area = pi * Math.pow(raio, 2);
    const perimetro = 2 * pi * raio;
    let raio = parseFloat(prompt("Digite o raio do círculo:"));
    
    return { area, perimetro }; 
}
console.log(`Área do círculo: ${resultado.area.toFixed(2)} m²`);
console.log(`Perímetro do círculo: ${resultado.perimetro.toFixed(2)} m`);