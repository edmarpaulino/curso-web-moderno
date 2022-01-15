// A variável declarada com var sofre o efeito de hoisting no qual sua
// declaração é içada para o topo do arquivo ou da função a depender do seu
// escopo.
console.log('a =', a);
var a = 2;
console.log('a =', a);

// Seria a mesma coisa que:
var a;
console.log('a =', a);
a = 2;
console.log('a =', a);

// Com função.
function teste() {
	console.log('b =', b);
	var b = 2;
	console.log('b =', b);
}

teste();

// Com o let o efeito de hoisting não ocorre
console.log('c =', c); // Cannot access 'c' before initialization
let c = 2;
console.log('c =', c);