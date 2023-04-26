const valor = 'Global'

// uma função carrega consigo as informações do local em que ela foi definida
// o contexto lexico
// então nesse caso essa função sempre vai imprimir o valor da variável Global
// deste arquivo
// mesmo que haja outra variável com o mesmo nome em um contexto mais próximo
// da chamada da função
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()