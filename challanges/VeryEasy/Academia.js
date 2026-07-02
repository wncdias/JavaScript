function media(soma, quantidade) {
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
