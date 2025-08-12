// Atividade 2

function exe(){
    let empresa = []

    // Lendo nomes de funcionarios

    for(let i = 0; i<3; i++){
        let nome = prompt(`Informe o nome do ${i+1} funcionario:`)
        let cargo = prompt(`Informe o cargo de ${nome}:`).toLocaleLowerCase()
        let salario = Number(prompt(`Informe o salario de ${nome}:`))
        let tempoServico = Number(prompt(`Informe o tempo de servico em anos de ${nome}:`))

    // Adicionando objeto ao vetor

        let funcionario = {
            nome: nome,
            cargo: cargo,
            salario: salario,
            tempoServico: tempoServico
        }

        empresa.push(funcionario)
    }
    console.log(empresa)
    // Resultados do exercicio

    let somaSalarios = 0, med
    let maiorSalario = empresa[0]
    let contGerentes = 0


    for (let i = 0; i<empresa.length; i++){
        somaSalarios += empresa.salario[i]

        if (empresa.salario[i] > 5000 && empresa.tempoServico[i] > 5){
            console.log(`Funcionarios com salario superior a 5 mil e com mais de 5 anos de empresa: ${empresa.nome}`)
        }

        if (empresa.salario[i] > maiorSalario){
            maiorSalario = empresa[i]
        }

        if (empresa.cargo === "gerente" .toLocaleLowerCase()){
            contGerentes++
        }

    }
    med = somaSalarios / empresa.length

    // Exibindo Resultados
    console.log(maiorSalario)
    console.log(med)
    console.log(contGerentes)

}
