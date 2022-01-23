// Desvio de fluxo
// break -> while, for e switch
// continue -> while e for
// O uso desse recurso é desencorajado pois pode acabar
// aumentando mais a complexidade do código do que trazendo
// clareza, apesar de ter horas que você acaba tendo que usar.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// O break vai interromper o laço e ir para a próxima sentença
// de código após o laço.
// Desvio de fluxo para fora do laço mais próximo.
for (let x in nums) {
	if (x == 5) break
	console.log(`${x} = ${nums[x]}`);
}

// O continue vai fazer que o laço vá para a próxima repetição
// após a sua declaração, ele não sai do laço, ele simplesmente
// interrompe a repetição atual e pula para a próxima.
// Desvio de fluxo para a próxima repetição do laço mais próximo.
for (let y in nums) {
	if (y == 5) continue
	console.log(`${y} = ${nums[y]}`)
}

// Podemos também indicar em qual laço o break ou continue irá atuar
// usando um rótulo, primeiro atribuimos um rótulo a laço e então quando
// chamamos o break ou continue informamos qual laço queremos exercer
// a ação usando o rótulo na frente da palavra reservada.
// Podemos declarar o rótulo na mesma linha do laço ou na linha acima.
// NÃO USE ESSA FORMA, pois essa estrutura remete muito a época do goto onde o código
// era macarronico e de díficil entendimento e manutenção.
externo: for (let a in nums) {
	for (let b in nums) {
		if (a == 2 && b == 3) break externo
		console.log(`Par = ${a}, ${b}`)
	}
}

console.log('Fim!')
