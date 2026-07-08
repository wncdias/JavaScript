/* Escreva uma função que recebe uma string e retorna cada palavra da string
invertida e em letra minusculas, porém com as palavras na mesma ordem.
Assuma que a string não possui nenhuma letra com ascento, número
ou caractere especial, apenas letras e espaços.*/

function inverterPalavras(str) {
    // Divide a string em um array de palavras, inverte cada palavra e converte para minúsculo
    const palavrasInvertidas = str.split(' ').map(palavra => palavra.split('').reverse().join('').toLowerCase());
    // Junta as palavras invertidas de volta em uma string com espaços
    return palavrasInvertidas.join(' ');
}

console.log(inverterPalavras("Hello World")); // Output: "olleh dlrow"
console.log(inverterPalavras("JavaScript is Fun")); // Output: "tpircSavaj si nuf"