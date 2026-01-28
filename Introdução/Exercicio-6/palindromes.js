let letter = prompt("Digite a palavra a ser testada:")

let word = ""

for(indice = letter.length - 1 ; indice>=0; indice--){
    word += letter[indice]; 
}
if(word === letter){
    alert( letter +" Este é um palindromo " + word)
}else{
    alert("Este n é um palindromo")
}