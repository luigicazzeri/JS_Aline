function fahrenheitParaCelsius(fahrenheit) {
    const temperaturaF = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
    const temperaturaC = fahrenheitParaCelsius(temperaturaF);
    return (fahrenheit - 32) * 5 / 9;
}
console.log(`A temperatura em Celsius é: ${temperaturaC.toFixed(2)}°C`);
