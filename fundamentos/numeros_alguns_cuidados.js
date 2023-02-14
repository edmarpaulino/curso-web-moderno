/*
 Em js se você tentar dividir um número por zero ele retornará Infinity.
*/
console.log(7 / 0)
/*
 Em js se você tentar realizar uma operação matemática com uma string a
 linguagem irá checar se o conteúdo daquela string pode ser convertido em
 número e então realizar a operação matemática, caso o sinal da operação não
 tenha sentido no uso de strings.
*/
console.log('10' / 2)
console.log('3' - 2)
/*
 Diferente do exemplo acima e abaixo o sinal de + tem significado no mundo das
 strings, então ao invés de a linguagem converter a string para número e então
 realizar a operação matemática, aqui ela irá concatenar o 3 com o 2, ou seja o
 dois é que será convertido em string
*/
console.log('3' + 2)
/*
 Diferente do exemplo acima aqui a linguagem vê que não tem como converter o
 conteúdo da string em um número, então ela retorna NaN (Not a Number).
*/
console.log('Show!' * 2)
/*
 Em operações com números de ponto flutuante o resultado não é preciso, isso se deve a uma convenção (IEEE) na qual a forma de calcular é mais rápida e não tem tanta perda de precisão, caso fosse realizar a operação com mais precisão a velocidade do cálculo seria muito custosa e demorada.
*/
console.log(0.1 + 0.7)
/*
 Ao tentar aplicar uma função/método em um número literal acontecerá um erro,
 mas se você colocar o valor literal entre parenteses e então chamar a
 função/método, a execução seguirá normalmente como se a função estivesse sendo
 aplicada na variável que contém o valor armazenado nela.
*/
// console.log(10.toString());
console.log((10).toString(2)) // toString(2) -> em binário
console.log(typeof toString)
console.log((10.345).toFixed(2)) // método
console.log(typeof toFixed)
