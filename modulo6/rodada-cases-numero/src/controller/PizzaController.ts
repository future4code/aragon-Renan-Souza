import { Request, Response } from "express";
import {PizzaBusiness } from "../business/PizzaBusiness";
import { BaseError } from "../errors/BaseError";
import { IAddPizzaInputDTO, ICreatePizzaInputDTO, IDeletePizzaInputDTO, IGetPizzasInputDTO, IRemovePizzaInputDTO } from "../models/Pizza";

export class PizzaController {
    constructor(
        private pizzaBusiness: PizzaBusiness
    ) {}

    public createPizza = async (req: Request, res: Response) => {
        try {
            const input: ICreatePizzaInputDTO = {
                token: req.headers.authorization,
                content: req.body.content
            }

            const response = await this.pizzaBusiness.createPizza(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao criar post" })
        }
    }

    public getPizzas = async (req: Request, res: Response) => {
        try {
            const input: IGetPizzasInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.pizzaBusiness.getPizzas(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar posts" })
        }
    }

    public deletePizza = async (req: Request, res: Response) => {
        try {
            const input: IDeletePizzaInputDTO = {
                token: req.headers.authorization,
                postId: req.params.id
            }

            const response = await this.pizzaBusiness.deletePizza(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao deletar a pizza" })
        }
    }

    public addPizza = async (req: Request, res: Response) => {
        try {
            const input: IAddPizzaInputDTO = {
                token: req.headers.authorization,
                postId: req.params.id
            }

            const response = await this.pizzaBusiness.addPizza(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao dar like em post" })
        }
    }

    public removePizza = async (req: Request, res: Response) => {
        try {
            const input: IRemovePizzaInputDTO = {
                token: req.headers.authorization,
                postId: req.params.id
            }

            const response = await this.pizzaBusiness.removePizza(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao remover like de post" })
        }
    }
}