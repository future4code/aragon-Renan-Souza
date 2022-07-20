export type Usuario = {
    saldo: number,
    descrição: string,
    dataDePagamento: string
} 

export type UsuarioList = {
    id: number, 
    nome: string,
    cpf: string,
    dataDeNascimento: string,
    ListaDeContasPagas: Usuario[]

}

export const Usuario: UsuarioList[] = [
    id: 1,
    nome: "Renan Eduardo",
    cpf: "111.111.111-11",
    dataDeNacimento: "25/05/1990",
    listaDeContaPagas:[
        {
            saldo: 70,
            descrição: "KFC",
            dataDePagamento: "04/05/2002"
        }
    ]
]