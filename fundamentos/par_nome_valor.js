// Par nome/valor (chave/valor) (identificador/valor)
// Contexto léxico/Escopo
const saudacao = 'Opa'; // Contexto léxico 1
// Contexto é o local onde sua variável foi definida fisicamente no código.

// Função é um contexto léxico mais restrito
function exec() {
	// Variável com o mesmo nome, mas como estão em contextos diferentes não
	// gera conflito.
	// Primeiro o JS busca a variável nesse contexto, mas imaginemos que nesse
	// contexto não tivesse a declaração da variável saudacao, ele então iria
	// subir para o próximo contexto e ir subindo até encontrar ela, ou caso
	// não encontre em nenhum contexto acima ele diz que a variável não está
	// definida.
	const saudacao = 'Falaaa'; // Contexto léxico 2
	return saudacao;
};

// Objetos são grupos aninhados de pares nome/valor
const cliente = { // Contexto do objeto cliente
	nome: 'Pedro',
	idade: 32,
	peso: 90,
	endereco: { // Contexto do objeto endereco
		logradouro: 'Rua Muito Legal',
		numero: 123
	}
}

console.log(saudacao);
console.log(exec());
console.log(cliente);