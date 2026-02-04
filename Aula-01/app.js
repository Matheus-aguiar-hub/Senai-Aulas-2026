//Comentário em linha
/*
Comentário 
    em 
bloco
*/

//Permite criar uma váriavel
var nome = 'Matheus'

//Imprime no terminal o conteúdo
console.log('Testando o print do console')
console.log(nome)
//Formas de concatenar variaveis e texto
console.log('O nome do usuário é: ' + nome)
console.log(`O nome do usuário é: ${nome}`)

//Criação de objeto para entrada no terminal

//Import da biblioteca para captar entrada de dados via terminal
var readline = require('readline')

//Cria uma interface para entrada e saida de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Função para retornar o nome digitado no terminal
    //O método question após a digitação chama a sua função "Call Back"
    //Para entregar o que foi digitado no terminal, através do argumento 
    //nomeUsuario
entradaDeDados.question('Por favor digitar seu nome: ', function(nomeUsuario){
    //Entrada de dados para o Email
    entradaDeDados.question('Favor digitar seu email: ', function(emailUsuario){
        console.log('O nome do usuario é: ' + nomeUsuario)
        console.log(`O email informado é: ${emailUsuario}`)
    })
})
/*
Nome do usuario 
3 valores

soma dos 3 valores
*/