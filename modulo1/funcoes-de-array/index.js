//Exercicio 1 
//Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:


// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const nomeCachorrinhos = pets.filter((pets, indice, array) => {
//      return pets.raca === "Salsicha"
//  })

//  console.log(pets)
//  console.log(nomeCachorrinhos)

//  const nomeDoguinhoSalsicha = petsSalsicha.map((pets) => {
//      return pets.nome
//  })

//  console.log(nomeDoguinhoSalsicha)

//  const clientesPets clientes.map((texto, imprimeMensagem) => {

//     obs: esse eu não conseguir fazer fiquei na para impimer a mensagem para o cliente
  imprimeMensagem ("Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!")

//  })

//  //console.log(clientesPets)
//  console.log(texto)


 //Exercico 2

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  const produtosNome = produtos.filter((produto) => {
//      return produto.categoria === "nome"
//  })

//  console.log(produtos)

//  const produtosPreco = produtosPreco.map((produto) => {
//      produto.preco = produto % 5
//      return produto
//  })
 
//  console.log(produtosPreco)


// const produtosBebidas = produtos.filter((produto) => {
//     return produto.categoria === "Bebidas"

// })

const nomeProdutoLimpeza = produtos.filter((produto) => {
    return produto.categoria === "Limpeza"
})

console.log(nomeProdutoLimpeza)