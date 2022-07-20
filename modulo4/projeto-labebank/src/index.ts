import express, { Request, Response } from 'express'
import cors from 'cors'
import { Data, datas } from './datas'

const app = express()
app.use(express.json())

app.listen 3003, () => {
    console.log("servidor rodando na porta 3003.")
}

app.get"/banco", (req: Request, RES: Response) => {
    RES.send({ mensagem: "Saldo atualizado!"})
}