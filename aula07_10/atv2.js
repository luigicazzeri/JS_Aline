function numeroCubo(numero){
    let numeroUsuario = prompt("Digite um número: ");
    let numero = Number(numeroUsuario);
    let cubo = numeroCubo(numero);
    return numero*numero*numero;
}
console.log("O número ao cubo é: " + cubo);