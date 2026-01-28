let listname = ["Almir", "Berto", "Carlos"]

let option = 0
let pacient = ""

do{
    let lName="";     
    for (let i = 0; i < listname.length; i++) {
        let position = listname[i]
        lName += ((i+1) + "° " +position+"\n")
    }
    option = parseFloat(prompt(lName + 
        "\n\n Escolha qual opção a seguir:\n "+
        "1 - Novo paciente   2 - Consultar paciente   0 - sair"));
    
    switch(option){
        case 1:
            pacient = prompt("Digite o nome do paciente a ser incerido")
            listname.push(pacient)
            break;
        case 2:
            listname.shift()
            break;
        case 0:
            alert("Encerrando acesso...")
            break;
        default:
            alert("Opção invalida..")
            break;
    }
}while( option != 0 )