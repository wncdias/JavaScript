let meter = parseFloat(prompt("Digite o valor (metros) desejado para conversão"));
let measure = prompt("Digite a abreviação de qual unidade de medida converter: \nMilimetro (mm)\nCentimetro (cm)\nDecímetro (dm)\nDecâmetro(dam)\nHectômetro(hm)\nQuilômetro(km)")

let result = 0;
switch (measure) {
    case "mm":
        result = meter * 1000;
        alert("O valor convertido de metros para " + measure+" é " + result) ;
        break;
    case "cm":
        result = meter * 100;
        alert("O valor convertido de metros para " + measure+" é " + result) ;
        break;
    case "dm":
        result = meter * 10;
        alert("O valor convertido de metros para " + measure+" é " + result) ;
        break;
    case "dam":
        result = meter / 10;
        alert("O valor convertido de metros para " + measure+" é " + result) ;
        break;
    case "hm":
        result = meter / 100;
        alert("O valor convertido de metros para " + measure+" é " + result) ;
    break;
    case "km":
        result = meter /1000;
        alert("O valor convertido de metros para " + measure+" é " + result) ;
        break;
    default:
        if(result == 0){
            alert("O valor digitado para metros foi zero");
        }else
            alert("únidade de medida inválida");
}


