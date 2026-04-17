/****************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *          Manipulação de dados para o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Matheus Aguiar
 * Versão: 1.0
****************************************************************/

//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js') 

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const filmeDAO = require('../../model/DAO/filme/filmes.js')

//Função para inserir um novo filme
const inserirNovoFilme = async function(filmes){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    //Validação de dados para os atributos do filme (status 400)
    if(filmes.nome == '' || filmes.nome == null || filmes.nome == undefined || filmes.nome.length > 80){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        // return message.ERROR_BAD_REQUEST //400
        
    }else if(filmes.data_lancamento == '' || filmes.data_lancamento == null || filmes.data_lancamento == undefined || filmes.data_lancamento.length != 10){
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'

    }else if(filmes.duracao == '' || filmes.duracao == null || filmes.duracao == undefined || filmes.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'

    }else if(filmes.sinopse == '' || filmes.sinopse == null || filmes.sinopse == undefined){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'

    }else if(isNaN(filmes.avaliacao) || filmes.avaliacao.length > 3){
        message.ERROR_BAD_REQUEST.field = '[AVALIAÇÃO] INVÁLIDO'

    }else if(filmes.valor == '' || filmes.valor == null || filmes.valor == undefined || filmes.valor.length > 5 || isNaN(filmes.valor)){
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'

    }else if(filmes.capa.length > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'

    }else{
        let result = await filmeDAO.insertFilme(filmes)

        if(result){ // 201
            message.DEFAULT_MESSAGE.status      = message.SUCCESS_CREATED_ITEM.status
            message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
            message.DEFAULT_MESSAGE.message     = message.SUCCESS_CREATED_ITEM.message
        }else{ // 400
            message.DEFAULT_MESSAGE.status      = message.ERROR_BAD_REQUEST.status
            message.DEFAULT_MESSAGE.status_code = message.ERROR_BAD_REQUEST.status_code
            message.DEFAULT_MESSAGE.message     = message.ERROR_BAD_REQUEST.message
            message.DEFAULT_MESSAGE.field       = message.ERROR_BAD_REQUEST.field
        }

        return message.DEFAULT_MESSAGE
    }
}

//Função para atualizar um filme
const atualizarFilme = async function(){
}

//Função para retornar todos os filmes
const listarFilme = async function(){
}

//Função para buscar um filme pelo id
const buscarFilme = async function(){
}

//Função para excluir um filme 
const excluirFilme = async function(){
}

module.exports = {
    inserirNovoFilme
}