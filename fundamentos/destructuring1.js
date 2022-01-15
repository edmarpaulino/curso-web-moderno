// Novo recurso ES2015

const pessoa = {
	nome: 'Ana',
	idade: 5,
	endereco: {
		logradouro: 'Rua ABC',
		numero: 1000
	}
};
// Com destructuring podemos extrair vários atributos de um objeto ou elementos
// de um array em uma única linha.
// A partir deste pondo teremos duas novas variáveis, a nome e a idade, nas
// quais foi seus valores foram retirados do objeto pessoa por meio do operador
// de destructuring.
const { nome, idade } = pessoa;
console.log(nome, idade);

// Aqui estamos extraindo os valores nome e idade e atribuindo as variáveis n e
// i respectivamente
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// Extraindo atributos inexistentes de um objeto.
// Com a variável bemHumorada estamos declarando um valor padrão que caso o
// valor extraído do objeto seja undefined o valor considerado será o padrão.
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

// Nesse caso irá ser criado as variáveis logradouro, numero e cep, pois não
// estamos fazendo destructuring no endereço e sim nos elementos desse objeto
// que está contido dentro do objeto pessoa.
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

// Nesse caso estamos tentando desestruturar um objeto que não existe dentro do
// objeto pessoa, e isso causará um erro, tentar acessar um atributo que não
// existe somente retornará undefined.
// Quando vamos alterar algo aninhado devemos tomar cuidado, devemos ter
// certeza que o caminho para o dado está setado, somente podendo o ultimo dado
// estar nulo ou undefined.
const { conta: { ag, num } } = pessoa;
console.log(ag, num);