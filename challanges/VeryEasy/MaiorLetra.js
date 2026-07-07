/* Escreva uma função que recebe uma string e retorna a maior letra segundo
    a ordem alabética em minúsculo.
    Assuma que a string não possui nenhuma letra com ascento, número
    ou caractere especial. */

function maiorLetra(str) {
    // Converte a string para minúsculo e divide em um array de caracteres e ordena o array em ordem alfabética 
    const letrasArray = str.toLowerCase().split('').sort();
    // Retorna a última letra do array ordenado
    return letrasArray[letrasArray.length - 1];
}

console.log(maiorLetra("abCdeF")); // Output: f
console.log(maiorLetra("xyzABC")); // Output: z