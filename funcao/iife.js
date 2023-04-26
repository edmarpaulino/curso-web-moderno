// IIFE -> Immediately Invoked Function Expression

// Uma maneira de fugir do escopo global em browsers
// Tudo que for criado aqui dentro será de escopo local
// Essa função é autoinvocável e será executado imediatamente na execução do código
// É como se estivessemos colocando o código diretamente no arquivo sem correr o risco
// de acessar o escopo global
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()