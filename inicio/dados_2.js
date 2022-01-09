console.log(19.90 * 0.6);

let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nomeDoProduto = "Caderno";
let categoriaProduto = "Papelaria";
console.log("Produto: " + nomeDoProduto
		+ ", Categoria: " + categoriaProduto
		+ ", Preço: " + preco
		+ ", Desconto: " + desconto
		+ ", Preço com desconto: " + precoComDesconto);