"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const BaseError_1 = require("../errors/BaseError");
class PostController {
    constructor(postBusiness) {
        this.postBusiness = postBusiness;
        this.createPost = async (req, res) => {
            try {
                const input = {
                    token: req.headers.authorization,
                    content: req.body.content
                };
                const response = await this.postBusiness.createPost(input);
                res.status(201).send(response);
            }
            catch (error) {
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado ao criar post" });
            }
        };
        this.getPosts = async (req, res) => {
            try {
                const input = {
                    token: req.headers.authorization
                };
                const response = await this.postBusiness.getPosts(input);
                res.status(200).send(response);
            }
            catch (error) {
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado ao buscar posts" });
            }
        };
        this.deletePost = async (req, res) => {
            try {
                const input = {
                    token: req.headers.authorization,
                    postId: req.params.id
                };
                const response = await this.postBusiness.deletePost(input);
                res.status(200).send(response);
            }
            catch (error) {
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado ao deletar post" });
            }
        };
        this.addLike = async (req, res) => {
            try {
                const input = {
                    token: req.headers.authorization,
                    postId: req.params.id
                };
                const response = await this.postBusiness.addLike(input);
                res.status(200).send(response);
            }
            catch (error) {
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado ao dar like em post" });
            }
        };
        this.removeLike = async (req, res) => {
            try {
                const input = {
                    token: req.headers.authorization,
                    postId: req.params.id
                };
                const response = await this.postBusiness.removeLike(input);
                res.status(200).send(response);
            }
            catch (error) {
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado ao remover like de post" });
            }
        };
    }
}
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map