import { UserBusiness } from "../../src/business/UserBusiness"
import { BaseDatabase } from "../../src/database/BaseDatabase"
import { BaseError } from "../../src/errors/BaseError"
import { ISignupInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("signup bem sucedido", async () => {
        expect.assertions(1)

        try{
        const input: ISignupInputDTO = {
            name: "alice",
            email: "alice@gmail.com",
            password: "alice99"
        } as unknown as ISignupInputDTO

        await userBusiness.signup(input)
    } catch (error: unknown) {
        if (error instanceof BaseError) {
        expect (error.statusCode).toEqual(400)
        expect (error.message).toEqual("Cadastro realizado com sucesso")

        }

    }

})

})

        //const response = await userBusiness.signup(input)

        //expect(response.message).toEqual("Cadastro realizado com sucesso")
       // expect(response.token).toEqual("token-mock")
    //})
//})