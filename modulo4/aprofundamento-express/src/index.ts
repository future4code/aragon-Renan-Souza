import express, { Request, Response } from 'express'
import cors from 'cors'
import { Usuario, usuario } from './usuario'

const app = express()

app.use(cors())
app.use(express.json())


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})

app.get("/poing", (req: Request, res: Response) => {
    res.send({ mensagem: "API funcionando!" })
})

app.get("/usuario", (req: Request, res: Response) => {
    const busca = req.query.busca

    if (busca !== "true" && busca !== "false") {
        return res.send({
            busca: busca,
            usuario: usuario
        })
    }

    if (busca === "true") {
        const resultado = usuario.filter((usuario) => {
            return produto.isAtivo === true
        })

        return res.send({
            produtos: resultado,
            busca: busca
        })
    } else {
        const resultado = produtos.filter((produto) => {
            return produto.isAtivo === false
        })

        return res.send({
            produtos: resultado,
            busca: busca
        })
    }
})


app.get("/usuario/:iduser", (req: Request, res: Response) => {
    const userId = req.params.userId

    const resultado = usuario.filter((usuario) => {
        return produto.userId === userIde
    })

    res.send({
        usuario: resultado
    })
})

app.post("/produtos", (req: Request, res: Response) => {
    const { idVendedor, preco } = req.body

    const ultimoProduto = produtos[produtos.length - 1]

    const novoProduto: Produto = {
        userId: ultimoUsuario.id +1
        id: preco
        title: true
    usuario.push(novoUsuario)

    res.send({ 
        mensagem: "Usuario criado com sucesso",
        produto: novoUsuario
     })
})

// Endpoint de deletar produto por id
app.delete("/usuario/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const index = usuario.findIndex((usuario) => {
        return usuario.id === id
    })

    if (index === -1) {
        return res.send({
            mensagem: "Usuario não encontrado",
            id: id
        })
    }

    usuario.splice(index, 1)

    res.send({
        mensagem: "Usuario deletado com sucesso",
        produtos: usuario
    })
})