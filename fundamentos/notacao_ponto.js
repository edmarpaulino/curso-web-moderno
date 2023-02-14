console.log(typeof console)

// ceil é uma função definida dentro do objeto Math
console.log(Math.ceil(6.1))
console.log(typeof Math.ceil)

const obj1 = {}
obj1.nome = 'Bola'

// alternativa a notação ponto, mais flexível pois permite que você acesse um
// atributo do objeto por meio de uma string.
obj1['nome'] = 'Bola2'

console.log(obj1.nome)

function Obj(nome) {
    // Conseguimos a partir do this com uma notação ponto criar tanto atributos
    // quanto funções que serão expostas para fora dessa função quando ela for
    // instanciada .
    this.nome = nome
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
// Usamos a notação ponto para acessar atributos que estão visíveis dentro de
// determinado objeto.
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
