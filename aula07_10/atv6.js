function inverterNumero(numero) {
    let numeroInvertido = numero.toString().split('').reverse().join('');
    let numero = prompt("Digite um número:");

    return numeroInvertido;
}
console.log(`O número invertido é: ${resultado}`);