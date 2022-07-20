import { nome } from "./nome.js";

const nomeBusca = process.argv[2]


const resultado = nome.filter((nome) => nome.includes(nomeBusca))

console.log(resultado)