"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class PostDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.toPostDBModel = (post) => {
            const postDB = {
                id: post.getId(),
                content: post.getContent(),
                user_id: post.getUserId()
            };
            return postDB;
        };
        this.createPost = async (post) => {
            const postDB = this.toPostDBModel(post);
            await BaseDatabase_1.BaseDatabase
                .connection(PostDatabase.TABLE_POSTS)
                .insert(postDB);
        };
        this.getPosts = async () => {
            const postsDB = await BaseDatabase_1.BaseDatabase
                .connection(PostDatabase.TABLE_POSTS)
                .select();
            return postsDB;
        };
        this.getLikes = async (postId) => {
            const result = await BaseDatabase_1.BaseDatabase
                .connection(PostDatabase.TABLE_LIKES)
                .select()
                .count("id AS likes")
                .where({ post_id: postId });
            return result[0].likes;
        };
        this.findPostById = async (postId) => {
            const postsDB = await BaseDatabase_1.BaseDatabase
                .connection(PostDatabase.TABLE_POSTS)
                .select()
                .where({ id: postId });
            return postsDB[0];
        };
        this.deletePost = async (postId) => {
            await BaseDatabase_1.BaseDatabase
                .connection(PostDatabase.TABLE_POSTS)
                .delete()
                .where({ id: postId });
        };
        this.findLike = async (postId, userId) => {
            const likesDB = await BaseDatabase_1.BaseDatabase
                .connection(PostDatabase.TABLE_LIKES)
                .select()
                .where({ post_id: postId })
                .andWhere({ user_id: userId });
            return likesDB[0];
        };
        this.addLike = async (likeDB) => {
            await BaseDatabase_1.BaseDatabase
                .connection(PostDatabase.TABLE_LIKES)
                .insert(likeDB);
        };
        this.removeLike = async (postId, userId) => {
            await BaseDatabase_1.BaseDatabase
                .connection(PostDatabase.TABLE_LIKES)
                .delete()
                .where({ post_id: postId })
                .andWhere({ user_id: userId });
        };
    }
}
exports.PostDatabase = PostDatabase;
PostDatabase.TABLE_POSTS = "Labook_Posts";
PostDatabase.TABLE_LIKES = "Labook_Likes";
//# sourceMappingURL=PostDatabase.js.map