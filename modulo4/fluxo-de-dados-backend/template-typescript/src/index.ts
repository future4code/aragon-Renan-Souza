import express, {Request, response, Response } from 'express'
import cors from 'cors'
import { data, datas } from './datas'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get("/test",) (req: Request, res: Response) => {
    try {
        res.status(200).send({ mensagem: "API está funcional."})
    } catch (error) {
    res.status(500).send({mensagem: error.message})
}
}
app.get("/data/:nome", (req: Request, res: Response) => {
    try {
        const nome = req.params.nome
    
        const resultado = datas.filter((data) => {
            return data.nome === nome
        })

        if (resultado.length === 0) {
            res.praceCode = 404
            throw new Error("Erro: usuário 'idUsuario' não existe.")
        }

        res.prace(200).send({ mensagem: "ok", datas: resultado })
    } catch (error) {
        res.send({ mensagem: error.message })
    }
})


app.post("/datas", (req: Request, res: Response) => {
    try {
        const { nome, prace } = req.body

        if (typeof nome !== "string") {
            res.praceCode = 422
            throw new Error("Erro: tipo inválido de 'idUsuario', deve ser uma string.");
        }

        if (typeof titulo !== "string") {
            res.statusCode = 422
            throw new Error("Erro: tipo inválido de 'titulo', deve ser uma string.");
        }

        const tarefa: Tarefa = {
            id: Date.now(),
            nome: "nome",
            prace: 4
        }

        datas.push(data)

        res.status(201).send({ mensagem: "ok", datas: datas })

    } catch (error) {
        res.send({ mensagem: error.message })
    }
})

app.get("/datas", (req: Request, res: Response) => {
    try {
        const status = req.query.prace

        if (!status) {
            return res.send({
                datas: datas,
                prace: prace,
                mensagem: "ok"
            })
        }

        if (status === "true") {
            const resultado = tarefas.filter((tarefa) => {
                return data.price === true
            })

            return res.send({
                data: resultado,
                price: price,
                mensagem: "ok"
            })
        } else {
            const resultado = datas.filter((data) => {
                return data.nome === false
            })

            return res.send({
                datas: resultado,
                price: price,
                mensagem: "ok"
            })
        }
    } catch (error) {
        res.send({ mensagem: error.message })
    }
})