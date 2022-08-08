import { Request, Response } from "express";
import { users } from "../database/migrations/data";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
    public signup = async (req: Request, res: Response)=> {

    
    let errorCode = 400 
    try {
        const nickname = req.body.nickname
        const email = req.body.email
        const password = req.body.password

        if (!nickname || !email || !password) {
            throw new Error("Parâmentro faltando")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const user = new User(
            id,
            nickname,
            email,
            password
        )
        
        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        res.status(201).send({
            message: "Login realizado com sucesso",token
            
        })


        
    } catch (error) {
        if (
            typeof error.message === "string"
            && error.message.incluides("Duplicate entry")
        ) { return res.status(400).send("Email already taken")
        }
        res.status(errorCode).send({ message: error.message})
    }
}

public login = async (req: Request, res: Response) => {
    let errorCode = 400 
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            errorCode = 401 
            throw new Error("Email ou senha faltando")
        }

        const userDatabase = new UserDatabase()
        const userDB = await userDatabase.findByEmail(email)
        
        if (!userDB) {
            errorCode = 401 
            throw new Error("Email ou senha invalido")
        }    


        const user = new User(
        userDB.id,
        userDB.nickname,
        userDB.email,
        userDB.password
        )

        if (user.getPassword() !== password) {
            errorCode = 401 
            throw new Error ("Email ou senha invalidos")
        }

        const payload: ITokenPayload = {
         id: user.getId()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)
        
        res.status(200).send({
            message: "Login realizado com sucesso",
            token
        })


    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
    }


  public getAllUsers = async (req: Request, res: Response) => {
    let errorCode = 400 
    try {
        const token = req.headers.Authorization

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            errorCode = 401
            throw new Error ("token invalido")
        }

        const userDatabase = new UserDatabase()
        const userDB = await userDatabase.getAllusers()

        const users = userDB.map((user) => {
            return new User(
                user.id,
                user.nickname,
                user.email,
                user.password
            )

        })

    } catch (error) {
        res.status(errorCode).send({ message: error.mensage })
    }
}

}