let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(isAtivo);
console.log(!isAtivo); // negação
console.log(!!isAtivo); // negação da negação

console.log('\nOs verdadeiros');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = Infinity));

console.log('\nOs falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('\nPara finalizar...');
console.log('' || null || 0 || 'epa');

let nome = '';
console.log(nome || 'Desconhecido');