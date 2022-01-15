// Armazenando uma função dentro de uma variável
// Função anônima atribuída a uma variável
const imprimirSoma = function (a, b) {
	console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenando uma função arrow dentro de uma variável
const soma = (a, b) => {
	return a + b;
};

console.log(soma(7, 7));

// Arrow function retorno implícito, quando a função só ira ter uma única linha
const subtracao = (a, b) => a - b;
console.log(subtracao(10, 8));

// Se sua função tiver somente um parâmetro você pode diminuir ainda mais
// removendo os parenteses .
const imprimir2 = a => console.log(a);
imprimir2('Legal!!!');