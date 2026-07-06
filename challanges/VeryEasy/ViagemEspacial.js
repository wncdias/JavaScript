//Escreva uma função que recebe um número intiro qualquer,
//eleve ao quadrado cada um de seus algarismos e depois concatene o resultado
//retonrnando um único número inteiro.

function squareDigits(num) {
/*
    //Metodo tradicional

    let numStr = num.toString();
    let resultStr = '';
    for (let i = 0; i < numStr.length; i++) {
        let digit = Number(numStr[i]);
        let squaredDigit = digit * digit;
        resultStr += squaredDigit.toString(); // resultStr = resultStr + ...
    }
    return Number(resultStr);

*/

   //Metodo com map
   const digitsArray = num.toString().split('');
   const squaredDigits = digitsArray.map(digit => (Number(digit) ** 2).toString());
   return Number(squaredDigits.join(''));
}

console.log(squareDigits(9119)); // Output: 811181
console.log(squareDigits(123));  // Output: 149