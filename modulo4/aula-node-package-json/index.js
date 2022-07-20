import { pessoas } from "./pessoas.js";

const nomeBusca = process.argv[2]

// const resultado = pessoas.find((nome) => nome.includes(nomeBusca))

const resultado = pessoas.filter((nome) => nome.includes(nomeBusca))

console.log(resultado)