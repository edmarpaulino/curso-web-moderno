// A função desestrutura um array e gera duas variáveis e não um outro array.
function rand([min = 0, max = 1000]) {
	// Usando destructuring para inverter os valores.
	if (min > max) [min, max] = [max, min];
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

console.log(rand([50, 40]));
console.log(rand([992]));
// Passando somente o segundo elemento do array.
console.log(rand([, 10]));
// Passando um array vazio a função vai assumir os valores padrões.
console.log(rand([]));
// Não passando nada vai dar erro pois a função tentará desestruturar elementos
// de um array nulo ou undefined.
console.log(rand());