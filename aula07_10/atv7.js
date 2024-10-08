function contarVogais(string) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    let texto = prompt("Digite uma palavra ou frase:");

    for (let char of string) {
        if (vogais.includes(char)) {
            contador++;
        }
    }

    return contador;
}
console.log(`O número de vogais na string é: ${totalVogais}`);