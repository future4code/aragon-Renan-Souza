const numero = process.argv[2]

const num1 =  Number (process.argv[3])
const num2 = number (process.argv[4])

const add = num1 + num2
const sub = num1 - num2
const multi = num1 * num2
const div = num1 / num2

/*console.log (`A adição dos valores é =${add}`)
console.log(`A subtração dos valores é =${sub}`)
console.log(`A multiplicação dos valores é =${mult}`)
console.log(`A divisão dos valores é ${div}`)
*/

switch(numero){
    case add:
        console.log(`A adição dos valores é =${add}`)
        break
        case sub: 
        console.log(`A subtração dos valores é =${sub}`)
        break
        case multi:
            console.log(`A multiplicação dos valores é =${mult}`)
            break
            case div:
                console.log(`A divisão dos valores é ${div}`)
                break
                default:
                
}