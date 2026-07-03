//Escreva uma função que recebe um array e retorne um novo array com 
//todas as posições invertidas, do original sem alteralo. 
//Não utilize os métodos do objeto global. Array do javascript (reverse, map, forEach, etc).

function reverseArray(arr) {
    if (arr.length === 0) {
        return [];
    }
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray[i] = arr[arr.length - 1 - i];
    }
    return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Exemplo de uso da função reverseArray
console.log(reverseArray(['a', 'b', 'c'])); // Exemplo de uso da função reverseArray
