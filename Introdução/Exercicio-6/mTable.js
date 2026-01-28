let number = parseFloat(prompt("Informe o número base para o calculo matemático"))

let result  = 0
let number2 = 0
for(count = 1; count <= 20; count++){
    number2 = number * count;
    result += number2 + ", ";
}
alert(result)