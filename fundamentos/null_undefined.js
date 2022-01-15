let valor; // declarado mas não inicializado

console.log(valor);
// console.log(valor2); // undefined é diferente de is not defined

valor = null; // ausência de valor, não aponta para nenhum endereço
console.log(valor);

const produto = {};
console.log(produto.preco);

produto.preco = 3.50;
console.log(produto.preco);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco; // forma correta de deletar um atributo
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);