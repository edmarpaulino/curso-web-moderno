// Função em JavaScript é First-Class Object/Citizens
// Higher-order Function
// JS trata função como dado

// criar de forma literal
function fun1() {}

// armazenar em uma variável
const fun2 = function () {}

// armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// passar como paramentro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// uma funcao pode retornar/conter um função
function soma1(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma1(2, 3)(4)
const cincoMais = soma1(2, 3)
cincoMais(4)