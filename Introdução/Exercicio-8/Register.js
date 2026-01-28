const list = [];

do{
    option = parseFloat(prompt("Número de imóveis cadastrados: "+list.length+
        "\nEscolha a opção desejada"+
        " \n1- Salvar novo ímovel\n2- Mostrar ímoveis disponíveis \n0- Sair"))
    
    switch(option){
        
        case 1:
            const property = {}
            property.nameP = prompt("Nome do proprietário:")
            property.bedroom = prompt("Quantidade de quartos: ")
            property.toilet = prompt("Quantidade de banheiros: ")
            property.garage = prompt("Possuí garagem?")

            list.push(property)
            break
        case 2:
            for(let i=0;i<list.length;i++){
            
                alert("Nome: "+list[i].nameP+("\n")+
                    "Número de quartos: "+list[i].bedroom+("\n")+
                    "Número de banheiros: "+list[i].toilet+("\n")+
                    "Possui garagem?: "+list[i].garage+("\n"))
            }
            break
        case 0:
            alert("Saindo do programa...")
            break
        default:
            alert("opção inválida")
            break
    }
}while(option != 0)