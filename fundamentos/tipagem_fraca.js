/*
 O fato de uma linguagem ter uma tipagem fraca não significa que ela não tem
 tipos, ela tem sim, só que os tipos podem variar, são dinâmicos, ou seja, uma
 hora podem ser números, outra hora ser booleano, outra hora ser string.
*/

let qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

qualquer = false
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 'Legal'
console.log(qualquer)
console.log(typeof qualquer)

// Evitar nome genéricos e siglas
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... kkkkk
