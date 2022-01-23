const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

// Podemos usar outra forma de for para percorrer elementos
// de uma lista ou atributos de um objeto, embora tenha opções
// mais interessantes para percorrer elementos de um array.
for (let i in notas) {
	console.log(`${i} = ${notas[i]}`)
}

const pessoa = {
	nome: 'Ana',
	sobrenome: 'Silva',
	idade: 29,
	peso: 64
}

for (let atributo in pessoa) {
	console.log(`${atributo} = ${pessoa[atributo]}`)
}
