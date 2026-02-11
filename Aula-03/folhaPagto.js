let valorPercentual = 5

//Import da biblioteca de calculos financeiro
let calculos = require('./modulo/calculos')

let percentual = calculos.calcularJurosCompostos(valorPercentual)

console.log(percentual)