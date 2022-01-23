function getInteiroAleatorioEntre(min, max) {
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

let opcao

// Com o do while o bloco de sentenças será executado pelo menos uma vez,
// essa é a única estrutura de controle onde a codição está após o bloco
// de sentenças.
// também não precisamos iniciar a variável antes da estrutura começar,
// podemos então somente declarar a variável e atribuir valor a ela dentro
// do bloco de sentenças.
do {
	opcao = getInteiroAleatorioEntre(-1, 10)
	console.log(opcao)
} while (opcao != -1)

console.log('Até a próxima!')
