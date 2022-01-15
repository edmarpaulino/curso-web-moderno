// Aqui está preocupado com o valor e não o tipo
console.log('01)', '1' == 1);
// Aqui tanto valor quanto tipo devem ser estritamente iguais
console.log('02)', '1' === 1);
console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

// O 0 (zero) significa a data de referência no JS que é 01/01/1970.
// Dependendo do fuso horário pode dar um pouquinho antes mas o zero seria o
// marco zero que é essa data que muitas linguagens acabam usando essa mesma
// data.
const d1 = new Date(0); // Variável de referência de memória.
const d2 = new Date(0);
// Vai dar false por que está sendo comparado dois endereços de referência de
// memória.
console.log('09)', d1 === d2);
console.log('10)', d1 == d2);
// Como aqui são numbers, eles são estritamente iguais.
console.log('11)', d1.getTime === d2.getTime);

// Considerando só os valores eles são iguais.
console.log('12)', undefined == null);
// considerando os tipos eles são diferentes.
console.log('13)', undefined === null);