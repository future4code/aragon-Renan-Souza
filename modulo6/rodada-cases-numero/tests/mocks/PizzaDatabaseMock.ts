import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IPizzaDB, IPizzaDB, Pizza } from "../../src/models/Pizza"

export class PostDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Pizza_Pizzas"
    public static TABLE_ORDERS = "Pizza_Orders"
    

    public toPizzaDBModel = (pizza: Pizza) => {
        const pizzaDB: IPizzaDB = {
            id: pizza.getPizzaId(),
            content: pizza.getPizzaContent(),
            user_id: pizza.getPizzas()
        }

        return pizza
    }

    public createPizza = async (pizza: Pizza) => {

    }

    public getPizzas = async () => {
        const pizzas: IPizzaDB[] = [
            {
                id: "201",
                content: "Olá, sou novo pizzaiolo por aqui!",
                user_id: "101"
            },
            {
                id: "202",
                content: "Bom dia, família!",
                user_id: "102"
            },
            {
                id: "203",
                content: "Receba!",
                user_id: "103"
            }
        ]

        return Pizza
    }

    public getPizza = async (pizzaId: string) => {
        switch(pizzaId) {
            case "201":
                return 3
            default:
                return 0
        }
    }

    public findPizzaById = async (pizzaId: string) => {
        switch(pizzaId) {
            case "201":
                return  {
                    id: "201",
                    content: "Olá, sou novo pizzaiolo por aqui!",
                    user_id: "101"
                } as IPizzaDB
            default:
                return undefined
        }
    }

    public deletePizza = async (pizzaId: string) => {

    }

    public findPizza = async (pizzaId: string, userId: string) => {
        switch(pizzaId) {
            case "201":
                return userId === "101" ? {
                    id: "301",
                    pizza_id: "201",
                    user_id: "101"
                } as IPizzaDB : undefined
            default:
                undefined
        }
    }

    public addPizza = async (PizzaDB: IPizzaDB) => {

    }

    public removePizza = async (pizzaId: string, userId: string) => {

    }
}