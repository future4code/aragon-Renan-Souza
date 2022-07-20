//Exercicio 1 
//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// - 💡 Dica
    
//     <aside>
//     ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
    
//     </aside>

// const bichinhos = [2, 5, 8, 6]
// function MaiorDeBichichos(array) {
//     let quantidadeMaiorDeBichichos = 0

//     for (let i = 0; i <array.length; i++) {
//         let posicaoAtualArray = array[i]

//         if(posicaoAtualArray >= quantidadeMaiorDeBichichos) {
//             quantidadeMaiorDeBichichos = posicaoAtualArray
//         }
//     }
// const bichichos = prompt("Nina, Lilica, Pipoca, Cristal,")
//     console.log(`O maior número de bichichos é ${quantidadeMaiorDeBichichos}`)
// }



//Exercicio 2 

const lista = [12, 11, 13, 16, 18, 20, 22, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}


const numero = [2, 4 , 8, 10]
for (let par of numero) {
    console.log(numero)

}


