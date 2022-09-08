import { PizzaDatabase } from "../database/PizzaDatabase"
import { IAddPizzaInputDTO, IAddPizzaOutputDTO, ICreatePizzaInputDTO, ICreatePizzaOutputDTO, IDeletePizzaInputDTO, IDeletePizzaOutputDTO, IGetPizzasInputDTO, IGetPizzasOutputDTO, pizza, IRemovePizzaInputDTO, IRemovePizzaOutputDTO, Pizza } from "../models/Pizza"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class PizzaBusiness {
    constructor(
        private pizzatDatabase: PizzaDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createPizza = async (input: ICreatePizzaInputDTO) => {
        const { token, content } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Não autenticado")
        }

        if (typeof content !== "string") {
            throw new Error("Parâmetro 'content' inválido")
        }

        if (content.length < 1) {
            throw new Error("Parâmetro 'content' inválido: mínimo de 1 caracteres")
        }

        const id = this.idGenerator.generate()

        const post = new Pizza(
            id,
            content,
            payload.id
        )

        await this.pizzatDatabase.createPizza(Pizza)

        const response: ICreatePizzaOutputDTO = {
            message: "Pizza foi feito com sucesso",

            pizza
        
        }

        return response
    }

    public getPizzas = async (input: IGetPizzasInputDTO) => {
        const { token } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Não autenticado")
        }

        const postsDB = await this.pizzatDatabase.getPizzas()

        const pizza = Pizza.map(this.getPizzas => {
            return new Pizza(
                pizza.id,
                pizza.content,
                pizza.user_id
            )
        })

        for (let pizza of Pizza) {
            const postId = pizza.getId()
            const Pizza = await this.pizzatDatabase.getPizza(pizzaId)
            pizza.setPizza(pizza)
        }

        const response: IGetPizzasOutputDTO = {
            pizza
        }

        return response
    }

    public deletePizza = async (input: IDeletePizzaInputDTO) => {
        const { token, pizzaId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Não autenticado")
        }

        const pizza = await this.pizzatDatabase.findPostById(pizzaId)

        if (!pizza) {
            throw new Error("Pizza não encontrado")
        }

        if (payload.role === USER_ROLES.NORMAL) {
            if (pizza.user_id !== payload.id) {
                throw new Error("Sem autorização")
            }
        }

        await this.pizzatDatabase.deletePizza(pizzaId)

        const response: IDeletePizzaOutputDTO = {
            message: "Pizza deletado com sucesso"
        }

        return response
    }

    public addPizza = async (input: IAddPizzaInputDTO) => {
        const { token, pizzaId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Não autenticado")
        }

        const Pizza = await this.pizzatDatabase.findPostById(pizzaId)

        if (!Pizza) {
            throw new Error("Pizza não encontrado")
        }

        const isAlreadyLiked = await this.pizzatDatabase.findPizza(
            pizzaId,
            payload.id
        )

        if (isAlreadyLiked) {
            throw new Error("Já saiu uma pizza")
        }

        const pizza: Pizza = {
            id: this.idGenerator.generate(),
            pizza_id: pizzaId,
            user_id: payload.id
        }

        await this.pizzatDatabase.addPizza(pizza)

        const response: IAddPizzaOutputDTO = {
            message: "Pizza realizado com sucesso"
        }

        return response
    }

    public removePizza = async (input: IRemovePizzaInputDTO) => {
        const { token, pizzaId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Não autenticado")
        }

        const pizza = await this.pizzatDatabase.findPostById(pizzaId)

        if (!Pizza) {
            throw new Error("Pizza não encontrado")
        }

        const isAlreadyPizza = await this.pizzatDatabase.findPizza(
            pizzaId,
            payload.id
        )

        if (!isAlreadyPizza) {
            throw new Error("Ainda não encontrou Pizza")
        }

        await this.pizzatDatabase.removeLike(pizzaId, payload.id)

        const response: IRemovePizzaOutputDTO = {
            message: "Pizza removido com sucesso"
        }

        return response
    }
}