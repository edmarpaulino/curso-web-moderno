// A variável i só estará disponível/visível dentro do bloco do for
for (let i = 0; i < 10; i++) {
	console.log(i);
}

// Erro = i is not defined
console.log(`i = ${i}`);