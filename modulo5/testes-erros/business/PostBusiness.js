"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostBusiness = void 0;
const Post_1 = require("../models/Post");
const User_1 = require("../models/User");
class PostBusiness {
    constructor(postDatabase, idGenerator, hashManager, authenticator) {
        this.postDatabase = postDatabase;
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
        this.createPost = async (input) => {
            const { token, content } = input;
            const payload = this.authenticator.getTokenPayload(token);
            if (!payload) {
                throw new Error("Não autenticado");
            }
            if (typeof content !== "string") {
                throw new Error("Parâmetro 'content' inválido");
            }
            if (content.length < 1) {
                throw new Error("Parâmetro 'content' inválido: mínimo de 1 caracteres");
            }
            const id = this.idGenerator.generate();
            const post = new Post_1.Post(id, content, payload.id);
            await this.postDatabase.createPost(post);
            const response = {
                message: "Post criado com sucesso",
                post
            };
            return response;
        };
        this.getPosts = async (input) => {
            const { token } = input;
            const payload = this.authenticator.getTokenPayload(token);
            if (!payload) {
                throw new Error("Não autenticado");
            }
            const postsDB = await this.postDatabase.getPosts();
            const posts = postsDB.map(postDB => {
                return new Post_1.Post(postDB.id, postDB.content, postDB.user_id);
            });
            for (let post of posts) {
                const postId = post.getId();
                const likes = await this.postDatabase.getLikes(postId);
                post.setLikes(likes);
            }
            const response = {
                posts
            };
            return response;
        };
        this.deletePost = async (input) => {
            const { token, postId } = input;
            const payload = this.authenticator.getTokenPayload(token);
            if (!payload) {
                throw new Error("Não autenticado");
            }
            const postDB = await this.postDatabase.findPostById(postId);
            if (!postDB) {
                throw new Error("Post não encontrado");
            }
            if (payload.role === User_1.USER_ROLES.NORMAL) {
                if (postDB.user_id !== payload.id) {
                    throw new Error("Sem autorização");
                }
            }
            await this.postDatabase.deletePost(postId);
            const response = {
                message: "Post deletado com sucesso"
            };
            return response;
        };
        this.addLike = async (input) => {
            const { token, postId } = input;
            const payload = this.authenticator.getTokenPayload(token);
            if (!payload) {
                throw new Error("Não autenticado");
            }
            const postDB = await this.postDatabase.findPostById(postId);
            if (!postDB) {
                throw new Error("Post não encontrado");
            }
            const isAlreadyLiked = await this.postDatabase.findLike(postId, payload.id);
            if (isAlreadyLiked) {
                throw new Error("Já deu like");
            }
            const likeDB = {
                id: this.idGenerator.generate(),
                post_id: postId,
                user_id: payload.id
            };
            await this.postDatabase.addLike(likeDB);
            const response = {
                message: "Like realizado com sucesso"
            };
            return response;
        };
        this.removeLike = async (input) => {
            const { token, postId } = input;
            const payload = this.authenticator.getTokenPayload(token);
            if (!payload) {
                throw new Error("Não autenticado");
            }
            const postDB = await this.postDatabase.findPostById(postId);
            if (!postDB) {
                throw new Error("Post não encontrado");
            }
            const isAlreadyLiked = await this.postDatabase.findLike(postId, payload.id);
            if (!isAlreadyLiked) {
                throw new Error("Ainda não deu like");
            }
            await this.postDatabase.removeLike(postId, payload.id);
            const response = {
                message: "Like removido com sucesso"
            };
            return response;
        };
    }
}
exports.PostBusiness = PostBusiness;
//# sourceMappingURL=PostBusiness.js.map