function tratarErroELancar(erro) {
	// lança o erro
	// throw new Error('...');
	// throw 10;
	// throw true;
	// throw 'mensagem';
	throw {
		nome: erro.name,
		msg: erro.message,
		data: new Date
	}
}

// O try é um bloco que potencialmente pode gerar algum tipo de erro e caso tenha algum erro ter o fluxo do seu código jogado para o catch, aonde você pode tratar, lançar o erro.
// O finally sempre será executado mesmo que dê tudo certo com o try ou que caia no catch.
function imprimirNomeGritado(obj) {
	try { // caso aconteça um erro com o bloco ele chama o catch.
		console.log(obj.name.toUpperCase() + '!!!');
	} catch (e) { // caso o código do try sofra um erro esse bloco é executado.
		tratarErroELancar(e);
	} finally { // independente de erro ou não esse bloco é executado.
		console.log('final');
	}
}

const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);