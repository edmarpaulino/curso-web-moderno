const funcs = [];

for (var i = 0; i < 10; i++) {
	funcs.push(function () {
		console.log(i);
	});
}

// Como var não possuí escopo de bloco ela vai ignorar o valor de quando a
// função foi adicionada ao array de funções e vai imprimir o valor que fez o
// loop encerrar, que no caso é 10.
// Problema histórico do JS.
funcs[2]();
funcs[8]();