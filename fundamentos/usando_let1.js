// variável do tipo let possuí escopo de bloco

let numero = 1;
{
	let numero2 = 2;
	// caso não tenha a variável declarada no escopo do bloco, ele vai buscar a
	// variável de mesmo nome só que em um escopo mais abrangente, caso tenha
	// declarada no bloco ele considerará essa do bloco.
	console.log(`Dentro = ${numero}`);
}
console.log(`Fora = ${numero}`);