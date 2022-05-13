let n1 = prompt("Por favor, digite um número: ")
let n2 = prompt("Digite outro: ")

let sum = Number(n1) + Number(n2)
let sub = Number(n1) - Number(n2)
let mult = Number(n1) * Number(n2)
let div = Number(n1) / Number(n2)
let restDiv = Number(n1) % Number(n2)

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + mult)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + restDiv)

if (sum%2 == 0) {
  alert("A soma dos dois números é par!")
} else {
  alert("A soma dos dois números é impar!")
}







