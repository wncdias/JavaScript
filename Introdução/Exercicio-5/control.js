let count = parseFloat(prompt("Informe a quantidade de dinheiro disponível:"))
let option = 0
do{
    option = parseFloat(prompt("Escolha uma das opções\n1 - adicionar dinheiro\n2 - remover dinheiro\n3 - Encerrar"))
    switch(option){
        case 1 :
            count += parseFloat(prompt("Informe o valor a ser adicionado"));
            break
        case 2 :
            count -= parseFloat(prompt("Informe o valor a ser removido"));
            break
        case 3 :
            alert("Processo encerrado")
    }
    
}while(option !== 3)
    alert("O valor final disponível é: "+ count)