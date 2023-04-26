let comparaComThis = function (param) {
    console.log(this === param)
}

// contexto de uma função normal
// como estamos utilizando o Node.js o objeto global chamasse global
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

comparaComThis(this)

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
// O contexto léxico da arrow function no caso em Node.js onde cada arquivo é um módulo
// é o módulo no qual ela foi escrita caso não esteja aninhada dentro de outra função ou objeto
comparaComThisArrow(module.exports)
// podemos referenciar o módulo atual através do this
comparaComThisArrow(this) // this deste módulo é o modulo atual

// mesmo utilizando o bind o this da arrow function não muda
// o this de uma arrow function é imutável
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)