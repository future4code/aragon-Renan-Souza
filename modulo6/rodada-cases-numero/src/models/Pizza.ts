export interface Pizza {
    pizza_id: string,
    pizza_content: string,
    user_id: string
}

export interface pizza {
    id: string,
    pizza_id: string,
    user_id: string
}

export class Pizza {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
    ) {}

    public getPizzaId = () => {
        return this.id
    }

    public getPizzaContent = () => {
        return this.content
    }

    public getPizzarId = () => {
        return this.userId
    }

    public getPizzas = () => {
        return this.pizza_id
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setContent = (newContent: string) => {
        this.content = newContent
    }

    public setUserId = (newUserId: string) => {
        this.userId = newUserId
    }

}

export interface ICreatePizzaInputDTO {
    token: string,
    content: string
}

export interface ICreatePizzaOutputDTO {
    message: string,
    post: Pizza
}

export interface IGetPizzasInputDTO {
    token: string
}

export interface IGetPizzasOutputDTO {
    pizza: Pizza[]
}

export interface IDeletePizzaInputDTO {
    token: string,
    pizzaId: string
}

export interface IDeletePizzaOutputDTO {
    message: string
}

export interface IAddPizzaInputDTO {
    token: string,
    pizzaId: string
}

export interface IAddPizzaOutputDTO {
    message: string
}

export interface IRemovePizzaInputDTO {
    token: string,
    pizzaId: string
}

export interface IRemovePizzaOutputDTO {
    message: string
}