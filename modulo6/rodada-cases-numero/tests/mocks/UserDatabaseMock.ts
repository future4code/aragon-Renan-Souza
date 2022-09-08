import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IuserDB, User, USER_ROLES } from "../../src/models/User"


export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "Pizza_Users"

    public toUserDBModel = (user: User): IuserDB => {
        const userDB: IuserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public findByEmail = async (email: string) => {
        switch(email) {
            case "Pizzav@gmail.com":
                return  {
                    id: "101",
                    name: "Pizza",
                    email: "Pizza@gmail.com",
                    password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", 
                    role: USER_ROLES.ADMIN
                } as IuserDB
            default:
                return undefined
        }
    }

    public createUser = async (user: User) => {

    }
}