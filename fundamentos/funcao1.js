// Função sem retorno
function imprimirSoma(a, b) {
	console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7, 8);
imprimirSoma();

// Função com retorno
/*
 Tratando o segundo parâmetro, caso nada seja passado como segundo parâmetro
 ele vai assumir o valor que foi atribuído na tratativa.
*/
function soma(a, b = 1) {
	return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());