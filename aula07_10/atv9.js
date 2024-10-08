function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i; 
    }

    let numero = parseInt(prompt("Digite um número inteiro:"));
    
    return fatorial;
}
console.log(`O fatorial de ${numero} é: ${resultado}`);