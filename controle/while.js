function getInteiroAleatorioEntre(min, max) {
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

let opcao = 0

// Usamos a estrutura while quando queremos repetir algo no qual
// não sabemos a quantidade de repetições que vamos ter.
while (opcao != -1) {
	opcao = getInteiroAleatorioEntre(-1, 10)
	console.log(opcao)
}

console.log('Até a próxima!')
