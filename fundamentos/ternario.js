// Operador unário = 1 operando
// Operador binário = 2 operandos
// Operador ternário = 3 operandos

// valor a ser comparado ? retorno se true : retorno se false
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
console.log(resultado(7.0));
console.log(resultado(6.9));