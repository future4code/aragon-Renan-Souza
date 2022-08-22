import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ICreateShowInput, ICreateShowInput, IDeleShowInputDTO, IDeleShowInputDTO, IGetShowInputDTO, IGetShowInputDTO, ILikeDB, IRemoveLikeInputDTO, IRemoveLikeOutputDTO, Post } from "../models/Show" 

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req: Request, res: Response) => {
        try {
            const input: ICreateShowInput= {
                token: req.headers.authorization,
                content: req.body.content
            }

            const response = await this.showBusiness.createShow(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao criar post" })
        }
    }

    public getShow = async (req: Request, res: Response) => {
        try {
            const input: IGetShowInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.showBusiness.getShow(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar posts" })
        }
    }

    public deleteShow = async (req: Request, res: Response) => {
        try {
            const input: IDeleShowInputDTO = {
                token: req.headers.authorization,
                postId: req.params.id
            }

            const response = await this.showBusiness.deleteShow(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao deletar post" })
        }
    }

}

    