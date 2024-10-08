function contarCaracter(string, caractere) {
    let contador = 0;

    for (let char of string) {
        if (char === caractere) {
            contador++; 
        }
    }

    let texto = prompt("Digite uma string:");
    let caractere = prompt("Digite um caractere para contar:");

    return contador;
}
console.log(`O caractere '${caractere}' aparece ${total} vez(es) na string.`);