/*
 A palavra reservada var serve para declararmos uma variável, uma de suas
 estranhezas é que podemos redeclarar uma mesma variável var várias vezes
 dentro do mesmo escopo
*/
var a = 3;
/*
 A palavra reservada let também serve para declararmos uma variável, é uma
 maneira mais moderna de se fazer isso, e ao contrário do que acontece com a
 var, nós não podemos redeclarar uma variável let dentro do mesmo escopo, caso
 tentemos fazer isso ocorrerá um erro
*/
let b = 4;

var a = 30;
// let b = 40;

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);
/*
 A palavra reservada const serve para declararmos uma constante, o que
 significa que seu valor é imutável dentro do programa, caso tentemos alterar
 seu valor ocorrerá um erro
*/
const c = 5;

// c = 500;
console.log(c);
