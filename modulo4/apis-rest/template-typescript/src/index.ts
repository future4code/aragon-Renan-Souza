import express, { Request, Response } from 'express'
import cors from 'cors'
import { data, Datas } from './datas'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003,() => {
    console.log("Servido rodando na porta 3003")
})

app.get("/normal", (req: Request, res: Response) => {
    try {
        res.status(200).send({ mensagem: "normal!" })
    } catch (error) {
        res.status(400).send({ mensagem: error.message })
    }
})

pp.get("/data/:name", (req: Request, res: Response) => {
    try {
        const name = req.params.name
    
        const resultado = Datas.filter((data) => {
            return data.name === name
        })

        if (resultado.length === 0) {
            res.statusCode = 400
            throw new Error("Erro: usuário 'name' não existe.")
        }

        res.status(200).send({ mensagem: "ok", data: resultado })
    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

app.post("/datas", (req: Request, res: Response) => {
    try {
        const { name, titulo } = req.body

        if (typeof name !== "string") {
            res.statusCode = 400
            throw new Error("Erro: tipo inválido de 'name', deve ser uma string.");
        }

        if (typeof email !== "string") {
            res.statusCode = 400
            throw new Error("Erro: tipo inválido de 'email', deve ser uma string.");
        }