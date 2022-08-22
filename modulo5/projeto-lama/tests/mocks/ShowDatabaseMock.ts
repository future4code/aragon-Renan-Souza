import { showBusiness } from "../../src/business/ShowBusiness"
import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, Show } from "../../src/models/Show"


export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toShowDBModel = (show: Show) => {
        const postDB: IShowDB = {
            id: show.getId(),
            content: show.getContent(),
            user_id: show.getUserId()
        }

        return postDB
    }

    public createShow = async (show: Show) => {

    }

    public getPosts = async () => {
        const posts: IShowDB[] = [
            {
                id: "201",
                content: "Olá, sou novo por aqui!",
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

        return posts
    }

    public getLikes = async (showId: string) => {
        switch(showId) {
            case "201":
                return 3
            default:
                return 0
        }
    }

    public findPostById = async (showId: string) => {
        switch(showId) {
            case "201":
                return  {
                    id: "201",
                    content: "Olá, sou novo por aqui!",
                    user_id: "101"
                } as IShowDB
            default:
                return undefined
        }
    }
}