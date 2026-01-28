const personName = prompt("Qual o nome do seu personagem:")
const attack = parseFloat(prompt("Qual o poder de ataque?"))

const enemy = prompt("Digite o nome do oponente:")
let life = parseFloat(prompt("Qual a quantidade de vida:"))
const def = parseFloat(prompt("Qual a quatidade de defesa dele:"))
const shield = prompt("Possui algum escudo? (Sim/Não)")

let damage = 0

if (attack > def && shield === "Não"){
    damage = attack - def;
}else if (attack > def && shield === "Sim"){
    damage = (attack - def) / 2
}else {
    damage = 0
}
 life -= damage

alert("O atacante causou "+ damage +" ao jogador defensor\nPossui agora " +
     life + " de vida\n Os novos status são:\n\nJogador atacante:\n"+
     personName +"\n " + attack +" - ataque\n\n Jogador defensor:\n"+ enemy +" possui\n"+
     life+ " - vida\n" + def + " - defesa\n" + shield + " - escudo")