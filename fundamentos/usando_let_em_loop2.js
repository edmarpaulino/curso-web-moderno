const funcs = [];

for (let i = 0; i < 10; i++) {
	funcs.push(function () {
		console.log(i);
	});
}

// Pelo fato de let ter escopo de bloco a função irá lembrar do valor de i no
// momento em que ela foi definida assim imprimindo o valor referente o momento
// da definição.
// Uma função de consciência do local em que ela foi definida.
funcs[2]();
funcs[8]();