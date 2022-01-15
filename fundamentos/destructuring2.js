const [a] = [10];
console.log(a);

// Uma forma de pegar múltiplos elementos de um array, inclusive pulando alguns
// e setando valor padrão caso undefined
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

// Extraindo o segundo elemento do segundo array
const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);