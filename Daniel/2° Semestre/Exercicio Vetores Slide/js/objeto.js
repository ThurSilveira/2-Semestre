// Exercicio Slide

function exe() {
    let livros = []

    // Adicionar livros

    for(let i = 0; i < 5; i++) {
        let titulo = prompt(`Insira o título do ${i + 1}° livro:`)
        let autor = prompt(`Insira o autor do livro "${titulo}":`)
        let ano = prompt(`Insira o ano de lançamento do livro "${titulo}":`)
        let pag = Number(prompt(`Insira quantas páginas tem o livro "${titulo}":`))

        let livro = {
            titulo: titulo,
            autor: autor,
            ano: ano,
            pag: pag
        }

        livros.push(livro)
    }

    console.log("Biblioteca completa:", livros)

    let soma = 0
    let maispag = livros[0].pag
    let livroMaisPaginas = livros[0]

    console.log("Livros com mais de 300 páginas:")

    for (let i = 0; i < livros.length; i++) {
        soma += livros[i].pag

        if (livros[i].pag > 300) {
            console.log(`- ${livros[i].titulo} com ${livros[i].pag} páginas`)
        }

        if (livros[i].pag > maispag) {
            maispag = livros[i].pag
            livroMaisPaginas = livros[i]
        }
    }

    let media = soma / livros.length
    console.log(`Média de páginas dos livros: ${media.toFixed(2)}`)

    console.log(`Livro com mais páginas: "${livroMaisPaginas.titulo}" com ${maispag} páginas`)
}
