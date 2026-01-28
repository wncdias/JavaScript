const pile = ["As", "Dois"]


do{

    option = parseFloat(prompt("Atualmente o número de carta do baralho são:\n"+
        pile.length+"\n\n Escolha qual a opção a seguir:\n 1 - Adicionar Carta   2 - Puxar carta   0 - sair"));
    
    switch(option){
        case 1:
            card = prompt("Digite a carta a ser inserida:")
            pile.unshift(card)
            break;
        case 2:
            removeC = pile.shift()
            alert(removeC)
            break;
        case 0:
            alert("Encerrando acesso...")
            break;
        default:
            alert("Opção invalida..")
            break;
    }
}while( option != 0 )