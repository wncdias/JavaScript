//Escreva uma função que recebe uma string, verifica se ela possui a mesma
// quantidade de cada letra que a compôe e retorna true caso possua 
//ou false caso não possua.


function verificarQuantidadeLetras(str) {
    // Cria um objeto para contar a quantidade de cada letra
    const contador = {};
    // Itera sobre cada letra da string
    for (let letra of str) {
        // Ignora espaços e caracteres não alfabéticos
        if (letra.match(/[a-zA-Z]/)) {
            // Converte a letra para minúscula para contar de forma case-insensitive
            letra = letra.toLowerCase();
            // Incrementa o contador da letra
            contador[letra] = (contador[letra] || 0) + 1;
        }
    }
    // Verifica se todas as letras têm a mesma quantidade
    const quantidades = Object.values(contador);
    for (let i = 1; i < quantidades.length; i++) {
        if (quantidades[i] !== quantidades[0]) {
            return false;
        }
    }
    return true;
}
/*
function compararContagem(count, index, array) {
    // Verifica se a contagem atual é igual à contagem da letra anterior
    return index !== 0 ? count === array[index - 1] : true;
}   

function verificarQuantidadeLetras(str) {
    const contador = {};
    // Itera sobre cada letra da string
    for (let i = 0; i < str.length; i++) {
        //Incrementa a contagem da letra no objeto contador
        contador[str[i]] = contador[str[i]] ? contador[str[i]] + 1 : 1;
    }
    //Retorna true se todas as contagens forem iguais, caso contrário retorna false
    return Object.values(contador).every(compararContagem);
}
*/
console.log(verificarQuantidadeLetras("Aabbcc")); // Output: true
console.log(verificarQuantidadeLetras("abcabc")); // Output: true
console.log(verificarQuantidadeLetras("aaabbccdd")); // Output: false