// O ES7 nos trouxe o tão esperado operador de exponencição!
// Veio de forma muito simples e intuitiva para facilitar o use desse cálculo
// matemático para nós, amantes do JavaScript.

// Para utilizar a exponencição da maneira antiga:
let exp = Math.pow(2, 3) // o primeiro parâmetro é a base e o segundo é o expoente
console.log(exp)

// Agora podemos utilizar o operador próprio
let newExp = 2 ** 3 // o primeiro valor representa a base e o segundo o expoente
console.log(exp)

// Atribuição exponencial
let base = 2
base **= 3 // eleva o valor armazenado na base à terceira potência
console.log(base)

// Expoente negativo

let expNeg = 2 ** -3
console.log(expNeg)