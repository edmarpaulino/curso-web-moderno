function compras(trabalho1, trabalho2) {
	// Operadores curto circuito, no qual se a partir da primeira opção eles
	// podem determinar o resultado.
	const comprarSorvete = trabalho1 || trabalho2;
	const comprarTv50 = trabalho1 && trabalho2;
	// const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
	const comprarTv32 = trabalho1 != trabalho2;
	const manterSaudavel = !comprarSorvete;
	
	// Retornando um objeto contendo todas as variáveis
	// Nove recurso do ES2015 no qual não precisa declara chave e valor
	// Atribuição inteligente na qual o nome da const vai ser a chave e o valor
	// da const o valor.
	return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(true, true, compras(true, true));
console.log(true, false, compras(true, false));
console.log(false, true, compras(false, true));
console.log(false, false, compras(false, false));