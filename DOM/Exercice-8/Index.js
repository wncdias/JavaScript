function addPlayer() {
    const playerSection = document.getElementById('player-list')
  
    const h3 = document.createElement('h3')
    h3.innerText = ""
  
    const ul = document.createElement('ul')
  
    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))
  
    const positionLi = document.createElement('li')
    positionLi.innerText = "Posição: "
    const positionInput = document.createElement('input')
    positionInput.type = 'text'
    positionInput.name = 'Position'
    positionLi.appendChild(positionInput)
    ul.appendChild(positionLi)
    ul.appendChild(document.createElement('br'))
  
    const shirtLi = document.createElement('li')
    shirtLi.innerText = "Camiseta: "
    const shirtInput = document.createElement('input')
    shirtInput.type = 'text'
    shirtInput.name = 'shirt'
    shirtLi.appendChild(shirtInput)
    ul.appendChild(shirtLi)
    ul.appendChild(document.createElement('br'))

    playerSection.append(h3, ul)
  }
  
  function removePlayer() {
    const playerSection = document.getElementById('player-list')
    
    const shirtLi = document.createElement('li')
    shirtLi.innerText = "Camiseta: "
    const shirtInput = document.createElement('input')
    shirtInput.type = 'text'
    shirtInput.name = 'shirt'
    shirtLi.appendChild(shirtInput)
    ul.appendChild(shirtLi)
    ul.appendChild(document.createElement('br'))
    //faltando adicionar o botão de remover e receber o número da camisa para passar de parametro
    const titles = document.getElementsByTagName('input')
    const player = document.getElementsByTagName('li')
  
    playerSection.removeChild(titles[titles.length - 1])
    playerSection.removeChild(player[player.length - 1])
  }