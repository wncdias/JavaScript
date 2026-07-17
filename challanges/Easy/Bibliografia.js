//Escreva uma função que recebe uma string contendo um nome completo e
//retorna uma string com todos os nomes, exceto o último, abrevidados e o
//último nome em letras maísculas antes das abreviações separado por vírgula.

function abreviarNomeCompleto(nomeCompleto) {
    // Divide o nome completo em um array de palavras
    const palavras = nomeCompleto.split(' ');
    // Remove o último nome do array
    const ultimoNome = palavras.pop();
    // Abrevia os nomes restantes e os junta em uma string
    const nomesAbreviados = palavras.map(nome => nome.charAt(0).toUpperCase() + '.').join(' ');
    // Retorna a string final com o último nome em maiúsculas
    // ` => serve para interpolar variáveis dentro de uma string
    return `${ultimoNome.toUpperCase()}, ${nomesAbreviados}`;
}

console.log(abreviarNomeCompleto("joão da silva")); // Output: "J. D. SILVA"
console.log(abreviarNomeCompleto("Maria Clara de Souza")); // Output: "M. C. DE SOUZA"