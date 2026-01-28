let options = ""

do{
    options = parseFloat(prompt("escolha uma das opções:\n1 - a\n2 - b\n3 - c\n4 - d\n 5 - sair")) 

    switch(options){
        case 1:
            alert("Você escolheu a opção 1");
            break
        case 2:
            alert("Você escolheu a opção 2");
        break
        case 3:
            alert("Você escolheu a opção 3");
        break
        case 4:
            alert("Você escolheu a opção 4");
        break
        case 5:
            alert("Encerrar programa");
        break
        default:
            alert("Entrada invalida")
    }
}while(options !== 5)