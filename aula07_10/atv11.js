function verificarPrimo(numero) {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}
if (!isNaN(numero)) {
    if (verificarPrimo(numero)) {
        console.log(`${numero} é um número primo.`);
    } else {
        console.log(`${numero} não é um número primo.`);
    }
}