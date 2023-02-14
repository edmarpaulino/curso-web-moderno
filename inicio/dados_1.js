var nomeProduto = 'Caneta' // declaração de variável
var quantidade = 10
var preco = 6.4
let imposto = 1.5 // declaração de variável
let precoFinal = preco + imposto

// console.log("Caneta"); // valor literal
console.log(nomeProduto)
//console.log(10); // valor literal
console.log(quantidade)
// console.log(6.4); // valor literal
console.log(preco)
// console.log(1.5); // valor literal
console.log(imposto)
// console.log(7.9); // valor literal
console.log(precoFinal)

nomeProduto = 'Caneta BIC'
console.log(nomeProduto)

// variável sem declaração é adicionada ao objeto window (browser) ou global (node) e fica global
// para evitar pode usar o modo strict colocando 'use strict' no início do arquivo
teste = 123 // variável sem declaração - funciona mas possui efeitos colaterais
console.log(teste)
