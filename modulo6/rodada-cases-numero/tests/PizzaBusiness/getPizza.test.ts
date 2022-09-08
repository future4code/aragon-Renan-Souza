import { PizzaBusiness } from "../../src/business/PizzaBusiness"
import { PizzaDatabaseMock } from "../mocks/PizzaDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { IGetPizzasInputDTO } from "../../src/models/Pizza"

describe("Testando PostBusiness", () => {
    const postBusiness = new PizzaBusiness(
        new PizzaDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("getPosts bem sucedido", async () => {
        const input: IGetPizzasInputDTO = {
            token: "token-pizza"
        }

        const response = await postBusiness.getPizzas(input)

        expect(response.posts.length).toEqual(3)
        expect(response.posts[0].getId()).toEqual("201")
        expect(response.posts[0].getContent()).toEqual("Olá, sou novo por aqui!")
        expect(response.posts[0].getUserId()).toEqual("101")
    })
})