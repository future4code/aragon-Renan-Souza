// // //Exercício 1 

// const filme = {
//     direcao: "Robert Zemeckis",
//     nome: "De volta para o futuro",
//     lancamento: "25/12/1985",
//     elenco: ["Marc McClure", "Wendie Jo Spebern", "George DiCenzo"],
//     assistido: true
// }
// // //notação de ponto
// // console.log('Direção:', filme.direcao)
// // console.log('Nome:', filme.nome)

// // //notação de colchetes
// // console.log('Lançamento:', filme['lancamento'])
// // console.log('Elenco:', filme['elenco'])
// // console.log('O filme foi assistido?', filme['assistido'])

// // //Exercício 2

// // const pessoa = {
// //     nome: "Fernando",
// //     idade: 28,
// //     generoMusical: 'Pop Rock'
// // }

// // const frase = `O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos, e seu gênero musical favorito é ${pessoa.generoMusical}`
// // console.log(frase)

// //Exercício 3
// //Adicionar propriedade personagens no objeto filmes

// filme.personagens = ["Dave McFly", "Linda McFly", "Sam Baines"]
// console.log(filme.personagens)

// const pessoa1 = `${filme.elenco[0]} atuando como ${filme.personagens[0]}`
// console.log('Personagem 1:', pessoa1)

// const pessoa2 = `${filme.elenco[1]} atuando como ${filme.personagens[1]}`
// console.log(pessoa2)

// const pessoa3 = `${filme.elenco[2]} atuando como ${filme.personagens[2]}`
// console.log(pessoa3)

// filme.elenco[0] = "Xuxa"
// console.log(filme)

// console.log(filme.direcao, filme.nome, filme.elenco, filme.lancamento, filme.assistido)

//Exercício 4
const pessoa = {
    nome: "Fernando",
    idade: 28,
    generoMusical: 'Pop Rock'
}

function editarPessoa(objetoPessoa) {
    const novaPessoa = {
        ...objetoPessoa,
        comidasFavoritas: ["Pizza", 'Brócolis', "Hamburguer"],
        melhorAmigue: {
            nomeDoAmigue: "Lua",
            idadeDoAmigue: 27
        }  
    }
    const frase = `O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasFavoritas[0]}, ${novaPessoa.comidasFavoritas[1]} e ${novaPessoa.comidasFavoritas[2]}. 
    Seu melhor amigo se chama ${novaPessoa.melhorAmigue.nomeDoAmigue} e tem ${novaPessoa.melhorAmigue.idadeDoAmigue} anos`
    console.log(frase)
}

editarPessoa(pessoa)