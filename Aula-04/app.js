/****************************************************************************
 * Objetivo: Arquivo responsável pelas entradas e saida de dados da aplicação
 * Data: 20/02/2026
 * Autor: Matheus Aguiar
 * Versão: 1.0
 ******************************************************************************/

//Import da biblioteca para calculos
const calculosMatematicos = require('./modulo/calcular.js')
let valor1 = calculosMatematicos.validarDados('10aa')
let valor2 = calculosMatematicos.validarDados(10)

let validar = (valor1 , valor2, 'somar')

if(validar){
    let resultado = calculosMatematicos.calcular(10,20,'somar')
    console.log(resultado)
}else{
    console.log('Erro ao calcular dados')
}