// Atividade 2
function exe() {
    let empresa = []

    // Lendo nomes de funcionários
    for (let i=0; i<3; i++) {
        let nome = prompt(`Informe o nome do ${i+1}º funcionário:`)
        let cargo = prompt(`Informe o cargo de ${nome}:`).toUpperCase()
        let salario = Number(prompt(`Informe o salário de ${nome}:`))
        let tempoServico = Number(prompt(`Informe o tempo de serviço (anos) de ${nome}:`))

        // Adicionando objeto ao vetor
        let funcionario = {
            nome: nome,
            cargo: cargo,
            salario: salario,
            tempoServico: tempoServico
        }

        empresa.push(funcionario)
    }

    console.log("Lista de funcionários:", empresa)

    // Resultados do exercício
    let somaSalarios = 0
    let maiorSalario = empresa[0]
    let contGerentes = 0

    for (let i =0; i<empresa.length; i++) {
        let func = empresa[i]
        if (func.salario > 5000 && func.tempoServico > 5) {
            console.log(`Funcionário com salário > 5 mil e mais de 5 anos: ${func.nome}`)
        }

        if (func.salario > maiorSalario.salario) {
            maiorSalario = func
        }

        if (func.cargo === "GERENTE") {
            contGerentes++
        }

        somaSalarios += func.salario
    }

    let media = somaSalarios / empresa.length

    // Exibindo Resultados
    console.log("Funcionário com maior salário:", maiorSalario.nome, "-", maiorSalario.salario)
    console.log("Média dos salários:", media)
    console.log("Quantidade de gerentes:", contGerentes)
}
