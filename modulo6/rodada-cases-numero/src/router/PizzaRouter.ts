import { Router } from 'express'
import { PizzaBusiness } from '../business/PizzaBusiness'
import { PizzaController } from '../controller/PizzaController'
import { PizzaDatabase } from '../database/PizzaDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const pizzaRouter = Router()

const pizzaController = new PizzaController(
    new PizzaBusiness(
        new PizzaDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

pizzaRouter.post("/", pizzaController.createPizza)
pizzaRouter.get("/", pizzaController.getPizzas)
pizzaRouter.delete("/:id", pizzaController.deletePizza)
pizzaRouter.post("/pizza/:id", pizzaController.addPizza)
pizzaRouter.delete("/pizza/:id", pizzaController.removePizza)