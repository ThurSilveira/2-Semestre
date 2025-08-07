
// Exemplo de objeto em JS

function exe(){
    let jogos = [{
        titulo: "God of war Ragnarok",
        editora: "Santa Monica Studio",
        lancamento: 2022
        },
        {
        titulo: "God of war",
        editora: "Santa Monica Studio",
        ano: 2018
        },
        {
        titulo: "God of war III",
        editora: "Santa Monica Studio",
        ano: 2015
        },
        {
        titulo: "God of war II",
        editora: "Santa Monica Studio",
        ano: 2007
        },
        {
        titulo: "God of war I",
        editora: "Santa Monica Studio",
        ano: 2005
        }
    ];

console.log(jogos[4].ano); // para exibir  determinado objeto

for(let i=0; i<jogos.length;i++){
    console.log(jogos[i].ano) // para exibir todos anos
};

// Exemplo de criar objeto para vetores

let gamepass = [];

for (let i = 0; i < 3; i++) {
    let titulo = prompt(`Informe o título do jogo ${i + 1}:`);
    let autor = prompt(`Informe a editora do jogo ${i + 1}:`);
    let ano = Number(prompt(`Informe o ano de lançamento do jogo ${i + 1}:`));

    let games = {
        titulo: titulo,
        autor: autor,
        ano: ano
    };
    gamepass.push(games);
}

console.log(gamepass)

};




