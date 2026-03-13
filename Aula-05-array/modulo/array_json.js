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
const listaDeNomes      = ['José', 'Maria', 'Jõao', 'André', 'Alex', 'Carlos', 'Ana', 'Bruna', 'Jake', 'José', 'José da Silva' ]
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

    //permite adicionar novos valores no array, sempre no final da lista (seguindo a ordem do indice 0,1,2,3...)
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')

    console.table(listaDeFornecedores)

    //Permite adicionar novos elementos no array sempre no INICIO da lista
    listaDeFornecedores.unshift('Ana Carolina')
    console.table(listaDeFornecedores)

    //Permite remover elementos do final da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //Permite remover elementos do inicio da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    //splice
    //Permite remover um elemento baseado no indice
                        //splice(indice, qtde de elementos)
    listaDeFornecedores.splice(2,1)
    console.table(listaDeFornecedores)

    //Permite adicionar um novo elemento em um determinado lugar do array (indice)
                        //indice, 0 -> significa que não será removido ninguém, Novo conteúdo
    listaDeFornecedores.splice(2,0,'Carlos da Silva')
    console.table(listaDeFornecedores)
}

const removerItem = function (nome) {
    
    //Retorna o inidice de um elemento fazendo a busca pelo valor
    //Se o indexof não encontrar o conteúdo ele devolve -1
    let indice = listaDeNomes.indexOf(nome)
    if(indice != -1){
        listaDeNomes.splice(indice, 1)
        return true
    }else{
        return false
    }

    // for(indice in listaDeNomes){

    //     if(listaDeNomes[indice] == nome){
    //         listaDeNomes.splice(indice,1)
    //     }
    // }
}

const verificarItem = function (nome) {
    //Verifica a existencia de um conteúdo dentro de uma lista (true) ou (false)
    return listaDeNomes.includes(nome)

}

const quantidadeItens = function(nome){
    let cont =  0
    listaDeNomes.forEach(function(item){

        if(String(item).toUpperCase() === String(nome).toUpperCase())
            cont+=1
    })
    return cont

}

const criandoDadosJSON = function(){
    let aluno = {   "nome": "José",
                    "ra": 123456, 
                    "telefone": "973211234",
                    "email": "jose@gmail.com"
                }

    //Exibindo o objeto JSON completo
    console.log(aluno)

    //Exibindo apenas um atributo do JSON
    console.log(aluno.nome)
    console.log(aluno.email)

    //Adiciona um novo atributo no JSON
    aluno.sexo = "Masculino"
    console.log(aluno)

    //Remove um atributo do JSON
    delete aluno.telefone
    console.log(aluno)

}

const cadastroDeProdutos = function(){
    let cores = [
        {"id": 1, "cor": "Branco"}, //Indice 0
        {"id": 2, "cor": "Preto"}, //Indice 01
        {"id": 3, "cor": "Azul"}, //Indice 02
        {"id": 4, "cor": "Rosa"}, //Indice 03
        {"id": 5, "cor": "Cinza"} //Indice 04
    ]

    let marcas = [
        {"id": 1, "marca": "LG",      "telefone": "132132132",    "email": "lg@gmail.com"},
        {"id": 2, "marca": "Razer",   "telefone": "119464656",    "email": "razer@gmail.com"},
        {"id": 3, "marca": "Apple",   "telefone": "119478996",    "email": "apple@gmail.com"},
        {"id": 4, "marca": "Samsung", "telefone": "119654566",    "email": "samsung@gmail.com"},
        {"id": 5, "marca": "Dell",    "telefone": "119644456",    "email": "dell@gmail.com"}
    ]

    let produtos = [
        {"id": 1,
        "nome": "Monitor",
        "descricao": "27 polegadas",
        "marca": [
            marcas[1].marca
    ],
        "quantidade": 20, 
        "cor": [
            cores[4],
            cores[1]
        ],
        "valor": 800.50
    },

    {"id": 2,
    "nome": "Teclado",
    "descricao": "Teclado mêcanico rgb",
    "marca": [
        marcas[4].marca
    ],
    "quantidade": 200,
    "cor": cores,
    "valor": 150
    },

    {"id": 3,
    "nome": "Mouse",
    "descricao": "Mouse sem fio",
    "marca": [
        marcas[0].marca,
        marcas[1].marca,
        marcas[4].marca
    ],
    "quantidade": 500,
    "cor": [
        cores[0],
        cores[1],
        cores[4]
    ],
    "valor": 80
    }

    ]

    console.table(produtos)

    let exibirProdutos = [
        produtos.forEach(function(itemProduto){
      
            console.log('A cor do produto é:' + itemProduto[0].cor)
            console.log('A marca do produto é:' + itemProduto[0].marca)
        })  
    ]

    // console.log(produtos[0].cor)
    // console.log(produtos[0].cor[1].cor)


    //Percorre o array e mostra todos os dados que estão dentro dela
//     produtos[0].cor.forEach(function(nomeCor){
//         console.log('A cor do produto é:' + nomeCor.cor)
//     })  
// }

// exibirDados()
// manipularDados()
// console.table(listaDeNomes)
// let resposta = removerItem('dsadsa')
// removerItem('Bruna')
// console.table(listaDeNomes)
// verificarItem('Maria')

// console.log(quantidadeItens('josé'))

// criandoDadosJSON()


}

cadastroDeProdutos()