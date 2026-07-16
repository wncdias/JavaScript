/*Escreva uma função que recebbe um array bidimensional de inteiros e
retorna um único array contendo todos os números em ordem ascendente.
*/

function achatarEOrdenar(arrayBidimensional) {
    /*
    const numeros = [];

    // Utiliza o método forEach para percorrer cada sub-array e adicionar seus elementos ao array numeros
    arrayBidimensional.forEach(list => {
        numeros.push(...list);
    });
    */
    // Achata o array bidimensional em um único array
    const arrayUnidimensional = arrayBidimensional.flat();
    // Ordena o array em ordem ascendente
    return arrayUnidimensional.sort((a, b) => a - b);
    
}

console.log(achatarEOrdenar([[3, 2, 1], [6, 5, 4]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(achatarEOrdenar([[10, 20], [5, 15], [30]])); // Output: [5, 10, 15, 20, 30]