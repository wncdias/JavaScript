
function media(numeros) {
    const quantidade = numeros.length;
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    return soma / quantidade;
}

console.log(media([10, 8, 9, 7, 6])); // Exemplo de uso da função media
console.log(media([10, 8, 9])); // Exemplo de uso da função media
console.log(media([10, 10, 9, 10, 10])); // Exemplo de uso da função media


/*function media(soma, quantidade) {
    return soma / quantidade;
}
const numeros = [];
let numero;

while (true) {
    
    numero = parseFloat(prompt("Insira a nota: "));
    
    if (numero !== -1){
        numeros.push(numero);
    } else {
        break;
    }
}
const quantidade = numeros.length;
const soma = numeros.reduce((acc, curr) => acc + curr, 0);

console.log("A média é: " + media(soma, quantidade));
*/