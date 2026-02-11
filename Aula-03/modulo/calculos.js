/************************************************
* Objetivo: Arquivo responsável pelas funções
* de calculos para este projeto
* Autor: Matheus Aguiar
* Versão: 1.0
************************************************/

//Criando uma função para calcular o valor da compra parcelada
//Método tradicional de criar uma função
function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto){
    //Recebe os argumentos da função em variáveis locais
    //As variáveis (valor, taxa e tampo são númericas por conta da conversão)
    //Mas os argumentos(valorCompra, taxaJuros e tempoPagto ainda são Strings)
    let valor   = Number(valorCompra)
    let taxa    = Number(taxaJuros)
    let tempo   = Number(tempoPagto)

    //Validação para entrada vazia ou de carácteres inválidos 
    if(valorCompra == "" || isNaN(valorCompra) || tempoPagto == "" || isNaN(tempoPagto)){
        console.log('Erro: Valores de compra ou tempo de pagamento estão incorretos!') // Futuramente não obrigatório
        return false
    }else{
        //Chama a função para converter o número em percentual
        let percentual = calcularPercentual(taxa)

        //Validação para o erro do percentual na função calcularPercentual()
        if(percentual){
            let montante = valor * ((1 + Number(percentual)) ** tempo) 
            return Number(montante.toFixed(2))
        } else{
            return false
        }
    }
}

//Calcula o percentual de um número
function calcularPercentual(numero){
    let numeroPercentual = Number (numero)
    //Validação para verificar se é um número valido 
    if(numero == '' || numero <= 0 || isNaN(numero)){
        console.log('Erro: Valor da taxa está incorreto!') // Futuramente não obrigatório
        return false // Não pode processar
    }else{
        //Processamento do calculo do percentual
        let percentual = numeroPercentual / 100
        return percentual.toFixed(2)
    }

} 

//Tornando as duas funções públicas para este projeto
module.exports = {
    calcularJurosCompostos,
    calcularPercentual
}