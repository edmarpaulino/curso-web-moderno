/**
 * Em JS um objeto é uma coleção de chave e valor.
 * Podemos criar um objeto vazio e definir como o objeto é, os atributos dele,
 * os comportamentos dele e suas funções dinamicamente.
 */
const prod1 = {};
// Atribuindo atributos dinamicamente
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Evitar atributos com espaço

console.log(typeof prod1);
console.log(prod1);

/*
 Um objeto pode conter outros objetos aninhados, dentro de um objeto não podem
 haver atributos com o mesmo nome, mas um atributo pode ter o mesmo nome do
 objeto.
 */
const prod2 = {
	nome: 'Camisa Polo',
	preco: 79.90,
	obj: {
		blabla: 1,
		obj: {
			blabla: 2
		}
	}
};

console.log(typeof prod2);
console.log(prod2);