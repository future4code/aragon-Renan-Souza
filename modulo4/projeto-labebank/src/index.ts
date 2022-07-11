import express, { Request, Response } from 'express'
import cors from 'cors'
import  { usuario, usuarios  } from './usuarios'
import { request } from 'http'
import { Usuario } from './usuario'

const app = express()

app.use(cors())

app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor está rodando na porta 3003.")
})

app.get ("/banco"), (req: Request, res: Response) => 
res.send({ mensagem: "API funcionado!"})

app.get ("/usuario", (req: request, res: Response)
const busca = req. query.busca


if (busca !== "true" && busca !== "false") {
    return res.send({
        busca: busca,
        usuario: usuarios
    })
}

if (busca === "true") {
    const resultado = usuario.filter((usuario) => {
        return usuario.dataDePagamento === true
    })

    return res.send({
        usuario: resultado,
        busca: busca
    })
} else {
    const resultado = usuarios.filter((usuario) => {
        return usuario.dataDePagamento === false
    })
}
    return res.send({
        usuarios : resultado,
        busca: busca
    })

app.get("/produtos/:idVendedor", (req: Request, res: Response) => {
const idVendedor = req.params.idVendedor

const resultado = produtos.filter((produto) => {
    return produto.idVendedor === idVendedor
})
})
res.send({
    usuario: usuario
})

app.post("/usuario", (req: Request, res: Response) => {
const { descrição, dataDePagamento } = req.body

const ultimoUsuario = usuarios[usuarios.length - 1]

const novoUsuario: Usuario = {
    id: ultimoUsuario.id + 1,
    descrição: descrição,
    dataDePagamento: dataDePagamento,

}

usuarios .push(novoUsuario)

res.send({ 
    mensagem: "Usuario criado com sucesso",
    usuario: novoUsuario
 })
})

app.delete("/usuario/:id", (req: Request, res: Response) => {
const id = Number(req.params.id)

const index = usuarios.findIndex((usuario) => {
    return usuario.id === id
})

if (index === -1) {
    return res.send({
        mensagem: "usuario não encontrado",
        id: id
    })
}

usuarios .splice(index, 1)

res.send({
    mensagem: "usuario deletado com sucesso",
    usuarios: usuarios 
})
})