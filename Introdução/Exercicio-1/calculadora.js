const x = prompt("Insira o primeiro número: ");
const y = prompt("Insira o segundo número: ");

const n1 = parseFloat(x)
const n2 = parseFloat(y)
let soma = 0;

for(let i = 1; i < 5; i++){
    soma = soma + i;
}
alert(
    "Esses são os resultados:  \nSoma: " + (n1 + n2) + 
    "\nSubtração: " + (n1-n2) + 
    "\nMultiplicação: " + (n1*n2) + 
    "\nDivisão: " + (n1/n2) + 
    "\nsoma 2:"+soma
);