const person1 = prompt("Informe seu veículo:")
const car1 = parseFloat(prompt("Informe a velocidade do primeiro veículo:"));
const person2 = prompt("Informe seu veículo:")
const car2 = parseFloat(prompt("Informe a velocidade do segundo veículo:"));

if(car1 > car2 ){
    alert(person1 + " é mais rápido do que " + person2)
}else if(car1 < car2){
    alert(person2 + " é mais rápido do que " + person1)
}else{
    alert(person1 + " e " + person2 + " possuem velocidades iguais.")
}
