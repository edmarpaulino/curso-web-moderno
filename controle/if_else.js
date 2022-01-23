const imprimirResultado = function(nota) {
	if (nota >= 7) {
		console.log('Aprovado!');
	} else {
		console.log('Reprovado!');
	}
}

imprimirResultado(10);
imprimirResultado(4);
// Tomar cuidado ao programar com linguagens fracamente tipadas.
// A senteça de código abaixo geraria um erro em uma liguagem fortemente
// tipada, só que no JS ele vai aceitar o valor e tentará comparar uma
// string com o valor 7, que no caso resultará em falso.
imprimirResultado('Epa!');
