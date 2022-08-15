import { Router } from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { UserBusiness } from '../business/UserBusiness'
import { PostController } from '../controller/PostController'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../database/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const postRouter = Router()

const userController = new UserController(
    new  UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

 
userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.get("/", userController.getUsers)
userRouter.delete("/:id", userController.deleteUser)
userRouter.put("/:id", userController.editUser)
