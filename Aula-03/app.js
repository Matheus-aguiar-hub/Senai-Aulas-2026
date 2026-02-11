/*************************************
* Objetivo: Criar um sistema que permite 
* o calculo de juros utilizando boas práticas 
* com funções
* Data: 11/02/2026
* Autor: Matheus Aguiar
* Versão 1.0
*************************************/

//Import da biblioteca "readline"
const readline = require('readline')

//cria o objeto de entrada de dados
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do nome do cliente
entradaDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = nome

    //Entrada do nome do produto
    entradaDados.question('Digite o nome do produto: ', function(produto){
        let nomeProduto = produto
        
        //Entrada do valor da compra
        entradaDados.question('Digite o valor da compra: ', function(capital){
            let capitalProduto = capital

            //Entrada da taxa de juros
            entradaDados.question('Digite a taxa de juros a ser aplicada na compra: ', function(taxa){
                let taxaCompra = taxa

                //Entrada do tempo de pagamento
                entradaDados.question('Digite o tempo para realizar o pagamento: ', function(tempo){
                    let tempoPagamento = tempo

                    //Import da biblioteca que realiza calculo financeiros
                    let calculos = require('./modulo/calculos.js')

                    let montante = calculos.calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)
                    if(montante){
                    console.log('O montante final é: ' + montante.toFixed(2))
                     }else{
                        console.log('Erro: Devido a problemas no calculo de juros o programa encerrou.')
                        entradaDados.close()
                     }
                })
            })
        })
    })
})