// No switch do JS não precisamos usar chaves para definir um bloco de
// sentenças, o próprio JS vai identificar que tudo que está entre um
// case e outro é referente ao case acima do primeira sentença.
// Também podemos fazer com que dois cases usem o mesmo bloco como na
// exemplo abaixo em que caso a nota for 10 ele vai ir para o case 9 e
// executar o bloco de sentenças dentro do case, isso na verdade se dá
// porque no JS ele vai executando todos os cases em sequência (false true)
// a partir do primeiro case que ele entrar.
// Para contornar isso podemos usar a palavra reservada 'break' para que ele
// pare as comparações.
// O switch não é uma condicional que retorna verdadeiro ou falso, e sim de
// comparação de valores.
// O switch do JS também não suporta intervalos entre valores no case e multiplas
// possibilidades no case, exemplo: 'case 1-5:' ou 'case 1, 2, 3, 4, 5:'
const imprimirResultado = function (nota) {
	switch (Math.floor(nota)) {
		case 10:
		case 9: { // você pode usar bloco de código com chaves, mas não é algo comum
			console.log('Quadro de honra!');
			// break;
		}
		case 8: case 7:
			console.log('Aprovado!');
			// break;
		case 6: case 5: case 4:
			console.log('Recuperação!');
			// break;
		case 3: case 2: case 1: case 0:
			console.log('Reprovado!');
			// break;
		default: // se você não usar o default no final você deve ter o cuidade de usar o break
			console.log('Nota inválida!');
	}
}

// imprimirResultado(10);
imprimirResultado(8.9);
// imprimirResultado(6.55);
// imprimirResultado(2.3);
// imprimirResultado(-1);
// imprimirResultado(11);
