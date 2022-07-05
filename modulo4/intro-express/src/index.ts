import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express() 

app.use(cors())
app.use(express.json())


app.get( '/caminho ', (req: Request, res: Response) => {
    res.send("Servidor funcionando")
    app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))
})

app.get('/caminho', (req: Request, res: Response) => {
    res.send("Hello World")
 })


header (req.headers)
query params ?chave=valor (req.query.valorDaChave)
path params /:id (req.params)
body




app.get('/users', (req: Request, res: Response) => {
    const headers = req.headers.Lara
    res.status(200).send("Requisição recebida!")
})


app.get('/users/search', (req: Request, res: Response) => {
    const nome = req.query.chave
    console.log(nome)
    res.status(200).send("Query recebida!")
})

//pegar path params
app.get('/users/:id', (req: Request, res: Response) => {
    const id = req.params.id
    console.log(id)
    res.status(200).send("ID recebido!")
})

//pegar body
app.post('/users', (req: Request, res: Response) => {
    const body = req.body
    console.log(body)
    res.status(200).send("Body recebido!")
})




























