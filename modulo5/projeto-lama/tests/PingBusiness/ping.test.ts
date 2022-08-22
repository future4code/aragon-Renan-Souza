import { PingBusiness } from "../../src/business/PingBusiness"
import { ShowBusiness, showBusiness} from "../../src/business/ShowBusiness"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"


describe("Testando PostBusiness", () => {

describe("Testing PingBusiness", () => {
    const pingBusiness = new PingBusiness()
    
    test("deve retornar 'Pong!' em caso de sucesso", async () => {
        const response = await pingBusiness.ping()
        expect(response.message).toBe("Pong!")
    })

    const response = await ShowBusiness.createShow(input)

        expect(response.message).toEqual("Show criado com sucesso")
        expect(response.show.getId()).toEqual("id-mock")
        expect(response.show.getContent()).toEqual("Oi mundo!")
        expect(response.show.getUserId()).toEqual("101")
    })
})



