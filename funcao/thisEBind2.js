function Pessoa() {
    this.idade = 0
    // armazenando o this em uma constante para não perder a sua referência
    // e driblar o this que varia
    const self = this
    
    setInterval(function () {
        // o this muda pois quem está invocando a função anônima a função setInterval
        // acessando o this armazenado com a referência que desejavamos
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa