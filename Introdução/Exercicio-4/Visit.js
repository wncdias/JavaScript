const Visitor = prompt("Digite seu nome:")
let cityConfirm = prompt("Você já visitou alguma cidade?")

let city = "";
let count = 0;
while(cityConfirm == "sim"){
    let city = prompt("Digite o nome da cidade:");
    city += city + "\n";
    count++
    cityConfirm = prompt("Você já visitou alguma cidade?")
}

alert(Visitor + " você visitou "+ count +" cidades e elas são:\n"+ allCity)