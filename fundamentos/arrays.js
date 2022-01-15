/*
 Em JS um array é um objeto heterogêneo de tamanho dinâmico, embora misturar
 valores de tipos diferentes em um mesmo array não seja uma boa prática.
 */

const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);
console.log(valores[4]);

/*
 Conseguimos aumentar o tamanho de um vetor adicionando itens nos indices
*/
valores[4] = 10;
console.log(valores);
console.log(valores.length);

/*
 Caso adicionemos um item em um índice muito distante do tamanho anterior do
 array, a linguagem tratará de colocar de aumentar o array para aquele índice e
 os elementos a partir do último elemento do array anterior até o novo elemento
 serão vazios.
*/
// valores[10] = 100;
// console.log(valores);

/*
 Podemos também adicionar itens através do push.
*/
valores.push({id: 3}, false, null, 'texto');
console.log(valores);

/*
 Podemos remover itens através do pop que irá remover o último elemento do
 array.
*/
console.log(valores.pop());
/*
 Podemos também remover usando o delete, nesse caso podemos determinar qual
 item queremos remover do array, caso o item não seja o último do array, a
 posição em que ele estava ficará vazia.
*/
delete valores[0];
console.log(valores);

/*
 O array é um objeto em JS.
*/
console.log(typeof valores);