import { PizzaBusiness } from "../../src/business/PizzaBusiness"
import { PizzaDatabaseMock } from "../mocks/PizzaDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { ICreatePizzaInputDTO } from "../../src/models/Pizza"

describe("Testando PizzaBusiness", () => {
    const pizzaBusiness = new PizzaBusiness(
        new PizzaDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("createPizza bem sucedido", async () => {
        const input: ICreatePizzaInputDTO = {
            token: "token-pizza",
            content: "Oi mundo!"
        }

        const response = await postBusiness.createPizza(input)

        expect(response.message).toEqual("Pizza feito com sucesso")
        expect(response.pizza.getId()).toEqual("id-mock")
        expect(response.pizza.getContent()).toEqual("Oi mundo!")
        expect(response.pizza.getUserId()).toEqual("101")
    })
})