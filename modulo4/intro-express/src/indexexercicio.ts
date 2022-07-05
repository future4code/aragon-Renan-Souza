import express, {Request, Response } from 'express'
import cors from 'cors'

const usuario = [
    {
        id: 1,
        nome: "Lara"
    },
    {
        phone: 21994546087,
        email: "laura@gmail.com"
    }
]

const app = express()

app.use(cors())
app.use(express.json())

app.get('/usuario', (req: Request, res: Response) => {
    res.status(200).send("usuario")
})

app.get('/usuario/search', (req: Request, res: Response) => {
    const {nome} = req.query

    const filteresUsuario = usuario.filter(usuario => usuario.nome === nome) 

res.status(200).send(filteresUsuario)

})

app.get('/usuario/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const usuario = usuario.filter(usuario => usuario.id === id)

    res.status(200).send(usuario)
})


app.post('/usuario', (req: Request, res: Response) => {
    const{id, nome} = req.body

    const novoUsuario = {id, nome}
    usuario.push(novoUsuario)
    res.status(201).send(usuario)
})

app.delete('/usuario/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)

    
    const index = usuario.findIndex(usuario => playlist.id === id)
    usuario.splice(index, 1)

    res.status(200).send(usuario)
} )