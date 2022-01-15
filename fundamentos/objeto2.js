// Uma função pode ser instanciada por meio da palavra reservada new, você pode
// criar instancias das funções da própria API do JS, de funções que você mesmo
// definiu e também de classes.
// Funções podem ter atributos e comportamentos e essas funções podem ser
// instanciadas.
console.log(typeof Object);
console.log(typeof new Object); // Instanciando uma função

const Cliente = function () {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

// Classe é um detalhe de sintaxe que internamente o JS cria uma função
class Produto {}; // Padrão ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto());

// Quando você define um objeto literal você possuí uma instância, diferente
// quando você define sua classe o seu molde e a partir dessa função você 
// instancia quantos objetos você quiser.