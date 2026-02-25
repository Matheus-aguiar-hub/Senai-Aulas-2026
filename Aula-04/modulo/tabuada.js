/***********************************************************************
 * Objetivo: Arquivo responsável por gerar a tabuada de um número
 * Data: 25/02/2026
 * Autor: Marcel
 * Versão: 1.0
***********************************************************************/

//Import da biblioteca de calculosMatematicos
const calculosMatematicos = require('./calcular.js')

//Função para imprimir tabuada usando o while
const gerarTabuada = function(tabuada){
    //Recebe a tabuada a ser gerada
    //Converte para número
    let tab = Number(tabuada)
    //recebe o contador
    let cont = 0
    let resultado 

    //Repetição para gerar a tabuada até 10
    while(cont <= 10){
        //Chama a função multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
    
        //cont = cont + 1
        //cont++
        cont +=1
    }
}


const gerarTabuadaFor = function(tabuada){
    //Recebe a tabuada a ser gerada
    //Converte para número
    let tab = Number(tabuada)
    let resultado 

    //Repetição para gerar a tabuada até 10
    for(let cont = 0; cont <= 10; cont++ ){
        //Chama a função multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
    
        //cont = cont + 1
        //cont++
        //cont +=1
    }
}

gerarTabuada(5)