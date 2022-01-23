let contador = 1
while (contador <= 10) {
	console.log(`contador = ${contador}`)
	contador++
}

// A estrutura for é própria para repetições nas quais nós já sabemos
// a quantidade de repetições que queremos ou iremos ter.
for (let i = 1; i <= 10; i++) {
	console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// Usando o let a variável i só pertence ao bloco do for
for (let i = 0; i < notas.length; i++) {
	console.log(`nota = ${notas[i]}`)
}
