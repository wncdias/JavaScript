//Escreva uma função que recebe um número e retonar uma quantidade 
//equivalente de *chunks* separados por traços sem utilizar nenhuma 
//estrutura de repetição

function count(num) {
  
    if (num === 0) {
        return '';
    }
    if (num === 1) {
        return 'chunk';
    }else {
        return 'chunk-' + count(num - 1);
    }
}

console.log(count(5)); // Exemplo de uso da função count