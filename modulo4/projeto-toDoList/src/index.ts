import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/createTables", async(req: Request, res: Response) => {
  let errorCode = 400
  try {
    const busca = req.query.busca as string 

    if (busca) {
      const [ resultado ] = await connection.raw(`
      SELECT *FROM createTables
      WHERE LOWER(nome) LIKE "%${busca.toLocaleLowerCase()}%";
      `)
      return res.status(200).send({createTables: resultado})
    }

  
    const [ resultado ] = await connection.raw(`
    SELECT # FROM createTables;
    `)
    
    res.status(200).send({createTables: resultado})
  } catch (error) {
    res.status(errorCode).send({mensagem:message})
  }
})

app.post("/creaTables", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { id, nome, nickname, email } = req.body

    if (id || !nome || !nickname || !email) {
      errorCode = 400
      throw new Error("Parâmetros faltando");
    }

    if (typeof nome !== "number") {
      errorCode = 422
      throw new Error("Preço deve ser um number");
    }

    const creaTables: createTables = {
      id: Date.now(),
      nome: nome,
      nickname: nickname,
      email: email
    }

    await connection.raw(`
    INSERT INTO createTables (id, name, nickname, email)
    VALUES (${novoCreateTables.id}, "${novoCreateTables.nome}", ${novoCreateTables.nickname}, "${novoCreateTables.email}");
    `)

    res.status(201).send({ mensagem: "createtables cadastrado com sucesso", produto: novoProduto })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})


app.put("/createTables/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const preco = req.body.preco

    if (typeof nome !== "string") {
      errorCode = 422
      throw new Error("nome deve ser um número")
    }

    if (nome<= 0) {
      errorCode = 422
      throw new Error("nome pode ser alterado")
    }

    await connection.raw(`
    UPDATE createTables
    SET nome = ${nome}
    WHERE id = ${id};
    `)

    res.status(200).send({ mensagem: "Produto atualizado com sucesso" })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})

// DELETE Produtos por id
app.delete("/createTables/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const [ creaTables ] = await connection.raw(`
    SELECT * FROM creaTables
    WHERE id = ${id};
    `)

    const createTables = createTables[0]

    if (!createTablesEncontrado) {
      errorCode = 404
      throw new Error("createTables não encontrado")
    }

    await connection.raw(`
    DELETE FROM createTables
    WHERE id = ${id};
    `)

    res.status(200).send({ mensagem: "Create deletado com sucesso" })

  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message })
  }
})