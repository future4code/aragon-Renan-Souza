const Cliente Cliente = [
   
nomeCliente({ id: 1, nome: “Fulano” }),
nomeCliente ({ id: 2, nome: “Ciclano” }),
nomeCliente ({ id: 3, nome: “Beltrano” }),
nomeCliente ({ id: 4, nome: “Fulana” })
]
function nomeCliente(cliente ) {
    let index = cliente.findIndex(val => val.id === cliente.id );
    if(index < 0) {
        const novaLista = [ ....clientes, cliente]
        return novaLista
    }else {
        return `Erro, Parâmetro inválido: id ${cliente.id} já existe.`
    }
    
}

console.log(nomeCliente({id:5, nome: Michele},))
