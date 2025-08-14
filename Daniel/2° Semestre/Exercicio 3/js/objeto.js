// Atividade 3

function exe() {
    let projetos = []

    for (let i = 0; i < 7; i++) {
        const nomeProjeto = prompt(`Digite o nome do projeto ${i + 1}:`)
        const empresa = prompt(`Digite o nome da empresa do projeto ${i + 1}:`)
        const duracaoMeses = parseInt(prompt(`Digite a duração em meses do projeto ${i + 1}:`))
        const orcamento = parseFloat(prompt(`Digite o orçamento (em R$) do projeto ${i + 1}:`))

        projetos.push({
            nomeProjeto,
            empresa,
            duracaoMeses,
            orcamento
        })
    }

    console.log("Projetos com duração > 12 meses e orçamento > R$ 1.000.000,00")
    for (let i = 0; i < projetos.length; i++) {
        const projeto = projetos[i]
        if (projeto.duracaoMeses > 12 && projeto.orcamento > 1000000) {
            console.log(projeto)
        }
    }

    let maiorOrcamento = projetos[0]
    for (let i = 1; i < projetos.length; i++) {
        if (projetos[i].orcamento > maiorOrcamento.orcamento) {
            maiorOrcamento = projetos[i]
        }
    }
    console.log("\nProjeto com o maior orçamento")
    console.log(`Nome: ${maiorOrcamento.nomeProjeto}, Orçamento: R$ ${maiorOrcamento.orcamento.toFixed(2)}`)

    let somaDuracoes = 0
    for (let i = 0; i < projetos.length; i++) {
        somaDuracoes += projetos[i].duracaoMeses
    }
    let mediaDuracao = somaDuracoes / projetos.length
    console.log(`\nMédia de duração dos projetos: ${mediaDuracao.toFixed(2)} meses`)

    let countInovaTech = 0
    for (let i = 0; i < projetos.length; i++) {
        if (projetos[i].empresa.toLowerCase() === "innovatech".toLowerCase()) {
            countInovaTech++
        }
    }
    console.log(`\nProjetos da empresa InovaTech: ${countInovaTech}`)

    // Somar orçamento dos projetos com menos de 6 meses de duração
    let totalOrcamentoCurtoPrazo = 0
    for (let i = 0; i < projetos.length; i++) {
        if (projetos[i].duracaoMeses < 6) {
            totalOrcamentoCurtoPrazo += projetos[i].orcamento
        }
    }
    console.log(`\nTotal gasto com projetos de menos de 6 meses: R$ ${totalOrcamentoCurtoPrazo.toFixed(2)}`)
}
