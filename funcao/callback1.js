// Função callback é uma função que é passada para outra função por paramêtro
// e que será disparada a depender de um determinado evento dentro da função que a recebeu
// de 1 a n vezes a depender do contexto
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// neste caso o evento é cada iteração do array
// ou seja, a cada iteração a função callback é disparada
// recebendo como parâmetro o item corrente (e mais n params)
fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
fabricantes.forEach(fabricante => console.log(fabricante))