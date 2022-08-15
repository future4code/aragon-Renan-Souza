import { BaseDatabase } from "./BaseDatabase"
import { IPostDB, Post } from "../models/Post"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

}

export class postDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (post: Post) => {
        const result: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }

        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .insert(result)
    }
}