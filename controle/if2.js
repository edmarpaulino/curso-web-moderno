// Neste caso o uso de um bloco dentro da condicional if é opcional,
// só que sem o bloco a única sentença de código a ser executada é a próxima
// na sequência imediata.
function teste1(num) {
	if (num >= 7)
		console.log(num);
		console.log('Final');
}

teste1(6);
teste1(8);

// Neste caso a próxima sentença está fora do bloco do if, por que o
// ponto e virgula está indicando o final da próxima sentença imediata
// após o if que no caso é uma sentença vazia.
function teste2(num) {
	if (num >= 7); { // cuidado com o ';'
		console.log(num);
	}
}

teste2(6);
teste2(8);
