/****************************************************************************
 * Objetivo: Arquivo responsável pelas funções de calcular (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 20/02/2026
 * Autor: Matheus Aguiar
 * Versão: 1.0
 ********************************************************************************/

//toLowerCase() -> Retorna a string em minusculo
//toLowerCase() -> Retorna a string em MAIUSCULO

//Modelo de função anônima
//Calcular as 4 operações matemáticas
//Entrada
const calcular = function(numero1, numero2, operador) {
    let valor1              = Number(numero1)
    let valor2              = Number(numero2)
    let resultado           = false      
    let operadormatematico  = String(operador).toUpperCase()

    //Condicionais para validar qual o tipo de operação matématica
    //A ausencia de {} na condicional é porque qualquer condicional que tenha apenas uma linha 
    //De processamento a {} torna opcional
    //Processamento
    // if(operadormatematico == 'SOMAR')
    //     resultado = valor1 + valor2
    // else if(operadormatematico == 'SUBTRAIR')
    //     resultado = valor1 - valor2
    // else if(operadormatematico == 'MULTIPLICAR')
    //     resultado = valor1 * valor2
    // else if(operadormatematico == 'DIVIDIR')
    //     resultado = valor1 / valor2

    switch (operadormatematico) {
        case 'SOMAR': //if
            resultado = somar(valor1, valor2)
            break;
        case 'SUBTRAIR': //else if
            resultado = subtrair(valor1, valor2)
            break;
        case 'MULTIPLICAR': //else if
            resultado = multiplicar(valor1, valor2)
            break;
        case 'DIVIDIR': //else if
            resultado = dividir(valor1, valor2)
            break;
        // default: //else 
        //     break;
    }
    
    //Saida

    //if(resultado != undefined)
        //return Number(resultado).toFixed(2)
    //else
    //return false

    //OU

    return resultado

}

const validarDados = function(valor1, valor2, operador) {
    if(valor1 == '' || isNaN(valor1) || valor2 == '' || isNaN(valor2) ){
        return false
    }else{
        return true
    }
}

//Exemplo de funções baseada em SETA conhecida também como (arrow function)
//Funções para realizar as operações matemáticas
const somar          = (numero1, numero2) => Number(numero1) + Number(numero2)  
const subtrair       = (numero1, numero2) => Number(numero1) - Number(numero2)  
const multiplicar    = (numero1, numero2) => Number(numero1) * Number(numero2)  
const dividir        = (numero1, numero2) => Number(numero1) / Number(numero2)  

module.exports = {
    calcular,
    validarDados,
    somar,
    subtrair,
    multiplicar,
    dividir
}