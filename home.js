let pilotName = prompt("Qual seu nome piloto?")

let velocity = 0

let newVelocity = prompt("A que velocidade você gostaria de acelerar?")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")

if (confirmVelocity) {
    velocity = newVelocity
}

if (velocity <= 0) {
    alert("Nave parada, favor aperte no acelerador para sair do lugar")
} else if (velocity < 40) {
    alert("Você está devagar, voce deve aumentar para ficar na rodovia")
} else if (velocity < 80) {
    alert("Parece uma velocidade ideal para se manter")
} else if (velocity < 100) {
    alert("Velocidade alta, considere diminuir")
} else {
    alert("Velocidade alta, controle automático entrando em ação")
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")