import {  orders, pizzas, users } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_PIZZAS = "Pizza_Pizzas"
    public static TABLE_ORDERS = "Pizza_Orders"
    public static TABLE_USERS = "Pizza_Urses"

    public toPostDBModel = (pizza: pizzas) => {
        const postDB:pizzas = {
            id: pizza.getId(),
            content: pizza.getContent(),
            user_id: pizza.getUserId()
        }

        return pizza
    }

    public createPizza = async (pizza: pizzas) => {
        const Pizza = this.ToPizzaModel(pizza)

        await BaseDatabase
            .connection(PostDatabase.TABLE_PIZZAS)
            .insert(pizza)
    }

    public getPizza = async () => {
        const postsDB: pizzas[] = await BaseDatabase
            .connection(PostDatabase.TABLE_ORDERS)
            .select()

        return postsDB
    }

    public getLike = async (pizzaId: string) => {
        const result: any = await BaseDatabase
            .connection(PostDatabase.TABLE_USERS)
            .select()
            .count("id AS Like")
            .where({ pizza_id: pizzaId })

        return result[0].likes as number
    }

    public findPizzaById = async (pizzaId: string): Promise<pizzas | undefined> => {
        const postsDB: pizzas[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where({ id: pizzaId })

        return postsDB[0]
    }

    public deletePizza = async (pizzaId: string) => {
        await BaseDatabase
            .connection(PostDatabase.TABLE_PIZZAS)
            .delete()
            .where({ id: pizzaId })
    }

    public findPizza = async (postId: string, userId: string): Promise<pizzas | undefined> => {
        const likesDB: pizzas[] = await BaseDatabase
            .connection(PizzaDatabse.TABLE_ORDERS)
            .select()
            .where({ pizza_id: pizzaId })
            .andWhere({ user_id: userId })

        return likesDB[0]
    }

    public addPizza = async (Pizza: pizzas) => {
        await BaseDatabase
            .connection(PostDatabase.TABLE_PIZZAS)
            .insert(pizzas)
    }

    public removePizza = async (pizzaId: string, userId: string) => {
        await BaseDatabase
            .connection(PostDatabase.TABLE_PIZZAS)
            .delete()
            .where({ pizza_id: pizzatId })
            .andWhere({ user_id: userId })
    }
}