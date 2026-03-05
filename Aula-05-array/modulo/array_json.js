/**********************************************************
 * Objetivo: manipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Marcel
 * Versão 1.0
 ***********************************************************/

/*
    [ ] -> representa um objeto do tipo ARRAY
    { } -> representa um objeto do tipo JSON

    Array -> é um objeto na memória que permite trabalhar com vários valores 
    em um único objeto

    let nome    = 'josé'
    let nome1   = 'Maria'
    let nome2   = 'João'
       indice:    0        1        2
    let nome = ['José', 'Maria', 'João']

    JSON -> É um objeto na memória que permite trabalhar com CHAVE e VALOR

        let nome        = 'José'
        let telefone    = '123456789'
        let email       = 'jose@gmail.com'

        let cliente = { "nome"      : "José", 
                        "telefone"  : "123456789", 
                        "email"     : jose@gmail.com
                        }
*/

//Formas de criar um ARRAY
const listaDeNomes      = ['José', 'Maria', 'Jõao', 'André', 'Alex']
const listaDeClientes   = []
const listaDeFornecedores = []

const exibirDados = function(){
    //Exibe o objeto array e seu conteúdo
    console.log(listaDeNomes)

    //Exibe o objeto array em formato de tabela com seus indices
    console.table(listaDeNomes)

    //Exibe o valor respectivo do tipo do array
    console.log([listaDeNomes[1]])
    //Retorna o tipo de dados de um indice de array
    console.log(typeof(listaDeNomes[4]))

    console.log('------------------ Nome -------------------')
    console.log(`O nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[4]}`)
    console.log('-------------------------------------------')

    //Estruturas de repetição
    //While
    let cont = 0 

    console.log('---------------- while --------------------')
    while (cont < listaDeNomes.length) {
        console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
        cont+=1
    }
    console.log('---------------------------------------------')

    console.log('')

    console.log('---------------- For --------------------')
    for(let contador = 0; contador < listaDeNomes.length; contador++){
        console.log(`O nome do cliente é: ${listaDeNomes[contador]}` )
    }
    console.log('---------------------------------------------')

    console.log('')

    //Retorna o conteudo de cada elemento através de CALL BACK
    console.log('------------------- For each ----------------')
    listaDeNomes.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}` )
    })
    console.log('---------------------------------------------')

    console.log('')

    //Retorna o indice do elemento, e será preciso colocar dentro do objeto array
    //Ex: listaDeNomes[item]
    //Praticamente igual ao FOR e WHILE 
    //EVITAR USAR
    console.log('------------------- For In ----------------')
    for(item in listaDeNomes){
        console.log(`O nome do cliente é: ${listaDeNomes[item]}` )
    }
    console.log('---------------------------------------------')

    console.log('')

    //percorre o array e retorna somente o conteúdo de cada indice, sendo muito parecido
    //Com o ForEach
    console.log('------------------- For of ----------------')
    for(cliente of listaDeNomes){
        console.log(`O nome do cliente é: ${cliente}`)
    }
    console.log('---------------------------------------------')


    console.log(listaDeNomes.length)
}

const manipularDados = function () {
    //Adicionando valores novos no array através de indices
    listaDeClientes [0] = 'José da Silva'
    listaDeClientes [1] = 'Maria da Silva'
    listaDeClientes [2] = 'João da Silva'

    console.log(listaDeClientes)

    //permite adicionar novos valores no array, sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')

    console.log(listaDeFornecedores)
}

// exibirDados()
manipularDados()