/*************************************
* Objetivo: Calcular médias escolares
* Nome do aluno, 3 notas
* Data: 29/01/2026
* Autor: Matheus
* Versão 1.0
*************************************/

/*
    Existe 3 formas de criação de variáveis

    var -> Permite a criação de um estaço na memória do tipo variável. Foi utulizado muito em projetos antigos.
    Recomendação: Caso você queira utilizar recomenda-se na ultilização de váriaveis globais (inicio do codigo).

    let -> Permite a criação de um espaço na memória do tipo variável. A utilização desse padrão é para a criação dentro de blocos de programação local { }.
    Essa váriavel nasce e morre dentro desse bloco.
    Não é recomendavél sua utilização em escopo global.

    const -> Permite a criação de um espaço na memória onde não sofrerá alteração durante o código. A const pode ser utilizada dentro e fora de bloco { }. 
    Dica: Caso você queira diferenciar uma const, um var ou um let... a const você pode criar com letras maiusculas 
*/

//Importação da biblioteca
const readline = require ('readline')

//Cria objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do nome 
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Recebe o nome do aluno que foi digitado
    let nomeAluno = nome

    //Entrada da nota 1
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1

        //Entrada da nota 2
        entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2

            //Entrada da nota 3
            entradaDeDados.question('Digite a nota 3: ', function(valor3){
                let nota3 = valor3

                //Entrada da nota 4
                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                    let nota4 = valor4

                    /*
                        Operadores de comparação
                        ==  -> Permite comparar a igualdade de dois conteúdos
                        <   -> Permite comparar valores menores
                        >   -> Permite comparar valores maiores
                        >=  -> Permite comparar valores maiores ou iguais
                        <=  -> Permite comparar valores menores ou iguais
                        !=  -> Permite comparar a diferença entre conteúdos
                        === -> Permite comparar o a igualdade de conteúdo e a igualdade da tipagem de dados
                        !== -> Permite comparar a diferença de conteúdos e a igualdade de tipos de dados
                        ==! -> Permite comparar a igualdade de conteúdos e a diferença de tipos de dados
                        !=! -> Permite comparar a diferença de conteúdos e a diferença de tipos de dados 

                        Operadores lógicos 
                        E   -> AND  -> &&
                        OU  -> OR   -> ||
                        NÃO -> NOT  ->  ! 
                    */

                       //Validação de entrada vazia
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){
                        console.log('Erro: é obrigatório o prenchimento de todos os dados!')
                    }else if(nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 ){
                        console.log('Erro: digite maior que 0!')
                    }else if(nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100){
                        console.log('Erro: digite menos de 100!')
                        //Validação para entrada de letras nas notas
                        //isNaN() -> permite valodar se o conteúdo da váriavel tem algum caracter ao invés de número
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ){
                        console.log('Erro: é permitido somente números!')
                    }else if(!isNaN(nomeAluno)){
                        console.log('Erro: é permitido somente letras!')
                    }else{
                        /*
                        Conversões de tipos de dados
                            parseInt() -> Permite converter uma String para número INTEIRO
                            parseFloat() -> Permite converter uma String para número DECIMAL
                            Number() -> Permite converter uma String para número (INTEIRO OU DECIMAL)
                            String() -> Permite converter um conteúdo para STRING
                            Boolan() -> Permite converter um conteúdo para BOOLEANO
                            typeof() -> Permite verificar o tipo de dados de uma variável 
                        */
                        //Calculando a média com a função Number() que define um argumento como número
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                        let statusAluno = media
                        //Validando status do aluno de aprovado
                        if(media < 50 ){
                            statusAluno = 'Reprovado'
                        }else if(media >= 50 && media < 70){
                            statusAluno = 'Recuperação'
                        }else if(media >= 70){
                            statusAluno = 'Aprovado'
                        }
                        //Saida do boletim do aluno
                        console.log(`Aluno(a) ${nomeAluno} \nMédia final: ${media.toFixed(2)} \nstatus do aluno: ${statusAluno}`)
                    }
                })
            })
        })
    })
})