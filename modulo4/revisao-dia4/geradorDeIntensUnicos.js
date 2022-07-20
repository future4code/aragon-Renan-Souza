// const primeiraLista = [
// 	{
// 		nome: "Banana"
// 	},
// 	{
// 		nome: "Laranja"
// 	}
// ]

// const segundaLista= [
// 	{
// 		nome: "Laranja"
// 	},
// 	{
// 		nome: "Cebola"
// 	}
// ]

// const lista = (num1, num2) => {
//     if (Banana.tolist())
//      (Laranja.lengt>0) {
//          for (let i=0; i <= lista.length; i++) {
//              const primeiraLista = 
//              lista [i].Banana === Banana
//              const primeiraLista =
//              lista [i].Laranja === Laranja
//              const lista = primeiraListaBanana &&
//              primeiraListaLaranja 
//              if(receba) {
//                  return "primeiraLista, segundaLista "
//              }
//          }
//      }
// }

// console.log(lista(Banana, Laranja))



const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

// 1. unir as duas listas e guardá-la e um variável 
// 2. criar a lista de resultado começando vazia 
// 3. itera a lista unida 
// 3.1 a cada interação, procurar na lista de resultado pelo item iterado 
// 3.2 o item já existe?
// 3.2.1 se sim, não faça nada
// 3.2.2 se n]ao, adicione-o na lista de resultado 
// 4. restorne o resultado 


const geraItensUnicos = (arr1, arr2) => {
    const arrConcat = arr1.concat(arra2)
    const resultado = []

    for (let itemConcat of arrConcat){
        const itemResultado = resultado.find((item) => item.nome === itemConcat.nome)

        if (!itemResultado) {
            resultado.push(itemConcat)
        }

        
    } 

    return resultado


}

console.log(geraItensUnicos(primeiraLista, segundaLista))