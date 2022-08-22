import { ShowDatabase } from "../database/ShowDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { USER_ROLES } from "../models/User"
import { ICreateShowInput, ICreateShowInput, IDeleShowInputDTO, IDeleShowInputDTO, IGetShowInputDTO, IGetShowInputDTO, ILikeDB, IRemoveLikeInputDTO, IRemoveLikeOutputDTO, Post } from "../models/Show" 
import { Show } from "../models/Show"
import { shows } from "../database/migrations/data"
export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    export class showBusiness {
        constructor (
        private showDatabase: ShowDatabase,
        private idGenator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
        ) {}

        public createShow = async (input:ICreateShowInput ) => {
            const { token, content } = input

            const payload =  this.authenticator.generateToken(token)

            if (!payload) {
                throw new Error("Não autenticado")
                
            }

            if (typeof content !== "string") {
                throw new Error("Paramêntro 'content' inválido")
                
            }

            if (content.length < 1) {
                throw new Error("Parâmentro 'content' inválido: mínimo de 1 cacacteres")
            }

            const id = this.idGenator.generate()

            const show = new Show(
                id,
                content,
                payload.id
            )

            await this.showDatabase.createShow(show)

            const response: ICreateShowInput = {
                mesage: "Show criado com sucesso",
                show 
            }

            return response 
 
        }

        public getShow = async (input: IGetShowInputDTO) => {
            const { token } = input
            
            const payload = this.authenticator.getTokenPayload(token)

            if (!payload) {
                throw new Error("Não autenticado")
                
            }

            const showsDB = await this.showDatabase.getEmail()

            const shows = showsDB.map(showsDB) => {
                return new Show(
                    showsDB.id,
                    showsDB.content,
                    showsDB.user_id
                )
            }


            for (let show of shows) {
                const showId = show.getId()
                const email = await this.showDatabase.getEmail(showId)
                show.setEmails(email)
            }

            const response: IGetShowInputDTO = {
                shows 

                {

                return response
            }

            public deleteShow = async (input: IDeleShowInputDTO) => {
                const { token, showId} = input 

                const payload = this.authenticator.getTokenPayload(token)

                if (!payload) {
                    throw new Error("Não autenticado")
                    
                }

                const showDB = await this.showDatabase.findShowById(showId)

                if (!showDB) {
                    throw new Error("Show não encontrado")
                    
                }

                if (payload.role === USER_ROLES.NORMAL) {
                    if (showDB.user_id !== payload.id) {
                        throw new Error("Sem autorização ")
                        
                    }
                }

                await this.showDatabase.deleteShow(showId)

                const response: IDeleShowInputDTO=> {
                    message: "Show deletado com sucesso"
                }
                return response
            }

            public addEmail = async (input: IAddLikeInputDTO) => {
                const {token , showId} = input

                const payload = this.authenticator.getTokenPayload(token)

                if (!payload) {
                    throw new Error("Não autenticado")

                    
                }

                const showDB = await this.showDatabase.findShowById(showId)

                if (!showDB)
                throw new Error("Show não encontrado")
                
            }

            const isAlreadyEmail = await this.showDatabase.findEmail(
                showId,
                payload.id
            )
        }

    }
}

}