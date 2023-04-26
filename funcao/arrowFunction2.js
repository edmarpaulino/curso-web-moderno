function Pessoa() {
    this.idade = 0

    // o this da arrow function não muda
    // ela armazana o valor do objeto (contexto léxico) no qual foi decalarada
    // no caso a função Pessoa é o contexto léxico da arrow function
    // assim independente de onde for utilizada ela aponta para o objeto Pessoa
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa