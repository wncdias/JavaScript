const arr= []
function menu(){
    return prompt("Escolha uma das opções a seguir\n\n"+
        "1 - Listar vagas disponíveis\n"+
        "2 - Criar uma nova vaga\n"+
        "3 - Visualizar uma vaga\n"+
        "4 - Inscrever um novo candidato em uma vaga\n"+
        "5 - Excluir uma vaga\n"+
        "0 - Sair\n"
    )
}


function listSlot(){
    const concatSlot = arr.reduce((finalText, vacancy, index)=>{
        // 1. nome, numero de candidatos
        finalText += index + ". "
        finalText += vacancy.names
        finalText += " ("+ vacancy.candidates.length +" candidatos)"
        return finalText
    }, "") 

    alert(concatSlot)
}

function newVacancy(){
    
    const names = prompt("Nome da nova vaga:")
    const describe = prompt("Descrição da vaga:")
    const date = prompt("Data limite para inscrição (dd/mm/aaaa):")

    //confirm
    const confirmV = confirm("Salvar vaga?\n"+
        "\nNome da vaga: "+names+
        "\nDescrição da vaga: "+describe+
        "\nData limite: "+date
    )
    if(confirmV){
        const newV = {names, describe, date, candidates: []}
        arr.push(newV)
    } 
}


function showVacancy(){
    const index = prompt("Indice da vaga:")
    if(index >= arr.length || index < 0 ){
        alert("Indice inválido")
        return
    }
    const vacancy = arr[index]

    const concatCandidate = vacancy.candidates.reduce((finalText, candidate)=>{
        return finalText + "\n - " + candidate
    }, "")

    alert("Vaga n° "+ index +
        "\nNome: " + vacancy.names+
        "\nDescrição: " + vacancy.describe+
        "\nData limite: " + vacancy.date+
        "\nQuantidade de candidatos: "+ vacancy.candidates.length +
        "\nCandidatos inscritos: " + concatCandidate
    )
}


function newCandidate(){
    
    const nameC = prompt("Nome do candidato:")
    const index = prompt("Indice da vaga:")
    const vacancy = arr[index]

    const confirmC = confirm("Salvar candidato?\n"+
        "\nNome do candidato: "+nameC+
        "\nIndice da vaga: "+index+
        "?\nNome:"+vacancy.names + "\nDescrição: "+vacancy.describe+"\nData Limite:"+vacancy.date
    )
    if(confirmC){
        vacancy.candidates.push(nameC)
    }

}

function excluirVacancy(){
    const index = prompt("Informe a vaga a ser excluida")
    const vacancy = arr[index]
    
    const confirmE = confirm("\nIndice da vaga: "+index+
        "?\nNome:"+vacancy.names + "\nDescrição: "+vacancy.describe+"\nData Limite:"+vacancy.date)
    
    if(confirmE){
        arr.splice(index, 1)
        alert("Vaga excluida")
    }
}

let option = ""
do{
    option = menu()
    switch(option){
        case "1":
            //Listar vagas disponiveis
            listSlot()
            break
        case "2":
            //Criar uma nova vaga
            newVacancy() 
            break
        case "3":
            //visualizar uma vaga
            showVacancy()
            break
        case "4":
            //Inscrever um candidadto em uma vaga
            newCandidate();
            break
        case "5":
            //excluir vaga
            excluirVacancy()
            break
        case "0":
            //Sair
            alert("Saindo do menu...")
            break
        default:
            alert("Opção invalida")
            break
    }
}while(option !== "0")