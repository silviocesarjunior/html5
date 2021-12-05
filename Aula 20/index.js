let WarpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Deseja entrar em órbita espacial?\n1- Sim\n2- Não")

while(chosenOption == "1"){
    WarpCount += 1
    chosenOption = prompt("Deseja realizar a próxima órbita?\n1- Sim\n2- Não")
}

alert("Nave: " + spaceship + "\nQuantidade de órbitas: " + WarpCount)