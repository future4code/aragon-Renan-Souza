"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const ConflictError_1 = require("../errors/ConflictError");
const NotFoundError_1 = require("../errors/NotFoundError");
const RequestError_1 = require("../errors/RequestError");
const UnauthorizedError_1 = require("../errors/UnauthorizedError");
const User_1 = require("../models/User");
class UserBusiness {
    constructor(userDatabase, idGenerator, hashManager, authenticator) {
        this.userDatabase = userDatabase;
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
        this.signup = async (input) => {
            const { name, email, password } = input;
            if (typeof name !== "string") {
                throw new RequestError_1.RequestError("Parâmetro 'name' inválido: deve ser uma string");
            }
            if (typeof email !== "string") {
                throw new RequestError_1.RequestError("Parâmetro 'email' inválido: deve ser uma string");
            }
            if (typeof password !== "string") {
                throw new RequestError_1.RequestError("Parâmetro 'password' inválido: deve ser uma string");
            }
            if (name.length < 3) {
                throw new RequestError_1.RequestError("Parâmetro 'name' inválido: mínimo de 3 caracteres");
            }
            if (password.length < 6) {
                throw new RequestError_1.RequestError("Parâmetro 'password' inválido: mínimo de 6 caracteres");
            }
            if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                throw new RequestError_1.RequestError("Parâmetro 'email' inválido");
            }
            const isEmailAlreadyExists = await this.userDatabase.findByEmail(email);
            if (isEmailAlreadyExists) {
                throw new ConflictError_1.ConflictError("Email já cadastrado");
            }
            const id = this.idGenerator.generate();
            const hashedPassword = await this.hashManager.hash(password);
            const user = new User_1.User(id, name, email, hashedPassword, User_1.USER_ROLES.NORMAL);
            await this.userDatabase.createUser(user);
            const payload = {
                id: user.getId(),
                role: user.getRole()
            };
            const token = this.authenticator.generateToken(payload);
            const response = {
                message: "Cadastro realizado com sucesso",
                token
            };
            return response;
        };
        this.login = async (input) => {
            const { email, password } = input;
            if (typeof email !== "string") {
                throw new RequestError_1.RequestError("Parâmetro 'email' inválido");
            }
            if (typeof password !== "string") {
                throw new RequestError_1.RequestError("Parâmetro 'password' inválido");
            }
            if (password.length < 6) {
                throw new RequestError_1.RequestError("Parâmetro 'password' inválido: mínimo de 6 caracteres");
            }
            if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                throw new RequestError_1.RequestError("Parâmetro 'email' inválido");
            }
            const userDB = await this.userDatabase.findByEmail(email);
            if (!userDB) {
                throw new NotFoundError_1.NotFoundError("Email não cadastrado");
            }
            const user = new User_1.User(userDB.id, userDB.name, userDB.email, userDB.password, userDB.role);
            const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword());
            if (!isPasswordCorrect) {
                throw new UnauthorizedError_1.UnauthorizedError("Password incorreto");
            }
            const payload = {
                id: user.getId(),
                role: user.getRole()
            };
            const token = this.authenticator.generateToken(payload);
            const response = {
                message: "Login realizado com sucesso",
                token
            };
            return response;
        };
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map