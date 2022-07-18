import express from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/produtos"), async (req: Request, res: Response) => {
  let errorCode = 400
  try{
    const busca = req.query.busca as string

    if (busca) {
      const [ resultado ] = await connection.raw(`
      SELECT * FROM Produtos
      WHERE LOWER(nome) like "%${busca.toLowerCase()}%";
      `)

      return res.status(200).send({produtos: resultado })
    }

    const [ resultado ] = await connection.raw(`
    SELECT * FROM Produtos;
    `)

    res.status(200).send({ produtos: resultado})
  } catch (error) {
    res.status(errorCode).send({ mensagem: error.message})
  }
})

app.post("/produtos", async (req: Request, res: Response) => {
  let errorCode = 400 
  try {
    const { nome, preco, categoria } = req.body

    if (!nome  || !preco || !categoria){
      errorCode = 400 
      throw new Error("Parâmetros faltando");
  }

  if (typeof preco !== "number") {
    errorCode = 422 
    throw new Error("Preço deve ser um number"); 
  }

  const novoProduto: Produto = {
    id Date.now(),
    nome:nome,
    preco: preco,
    categoria:categoria 
  }

  await connection.raw(`
  INSERT INTO Pordutos (id, nome, preco, categoria)
  VALUES (${novoProduto.id}, "${novoProduto.nome}", ${novoProduto.preco}, "${novoProduto.categoria}");
  `)

  res.status(201).send({mensagem: "Produto cadastrado com sucesso", produto: novoProduto})

  } catch (error) {
  res.status(errorCode).send({mensagem: error.message})
}
  })

  app.put("/produtos/:id", async (req: Request, res: Response) =>{
    let errorCode = 400
    try {
      const id = Number(req.params.id)
      const preco = req.body.preco

      if (preco <= 0) {
        errorCode = 422
        throw new Error("preço deve maior que zero")
      }

      await connection.raw(`
      UPDATE Produtos
      SET preco = ${preco}
      WHERE id = ${id};
    `) 

    res.status(200).send({mensagem: "Produto atualizado com sucesso"})

    } catch (error) {
      res.status(errorCode).send({mensagem:error.message})
    }
    })

    app.delete("/produtos/:id", async (req: Request, res:Response) =>{
      let errorCode = 400 
      tey { 
        const id = Number(req.params.id)

        const [ produtos ] = await connection.raw(`
        SELECT * FROM produtos
        WHERE id = ${id};
        `)

        const produtoEcontrado = produtos [0]

        if (!produtoEncntrado){
          errorCode = 404 
          throw new Error("Produto não econtrado")
        }
        await connection.raw(`
        DELETE FROM Produtos
        WHERE id = ${id};
        `) 

        res.status (200).send({mensagem: "Produto deletado com sucesso"})
      } catch (error) {
        res.status(errorCode).send({mensagem: error.message})
      }
    })

