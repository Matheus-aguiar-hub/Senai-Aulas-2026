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
const inserirNovoFilme = async function(filmes, contentType){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    
    try{
    //Validação para o tipo de dados da requisição (somente JSON)
    if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

    
    //Validação de dados para os atributos do filme (Status 400)
    let validar = await validarDados(filmes)

    //Se a função validar retornar um json de erro, iremos devolver ao APP o erro
    if(validar){
        return validar // 400
    }
    else{
        //Encaminha os dados do filme para o DAO
        let result = await filmeDAO.insertFilme(filmes)


        if(result){ // 201
            message.DEFAULT_MESSAGE.status      = message.SUCCESS_CREATED_ITEM.status
            message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
            message.DEFAULT_MESSAGE.message     = message.SUCCESS_CREATED_ITEM.message
        }else{ // 500
            return message.ERROR_INTERNAL_SERVER_MODEL // 500
        }

        return message.DEFAULT_MESSAGE
        }
    }else{
        return message.ERROR_CONTENT_TYPE // 415    
    }
    }catch (error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 (controller)
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

//Função para validar todos os dados de filme (obrigatórios, qtde de caracteres, etc)
const validarDados = async function(filmes){
    
    let message = JSON.parse(JSON.stringify(config_message))

    //Validação de dados para os atributos do filme (status 400)
    if(filmes.nome == '' || filmes.nome == null || filmes.nome == undefined || filmes.nome.length > 80){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
        
    }else if(filmes.data_lancamento == '' || filmes.data_lancamento == null || filmes.data_lancamento == undefined || filmes.data_lancamento.length != 10){
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

    }else if(filmes.duracao == '' || filmes.duracao == null || filmes.duracao == undefined || filmes.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

    }else if(filmes.sinopse == '' || filmes.sinopse == null || filmes.sinopse == undefined){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

    }else if(isNaN(filmes.avaliacao) || filmes.avaliacao.length > 3){
        message.ERROR_BAD_REQUEST.field = '[AVALIAÇÃO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

    }else if(filmes.valor == '' || filmes.valor == null || filmes.valor == undefined || filmes.valor.split('.')[0].length > 3 || isNaN(filmes.valor)){
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

    }else if(filmes.capa.length > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else{
        return false
    }
}
module.exports = {
    inserirNovoFilme
}