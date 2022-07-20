export enum CATEGORIAS {
    ACESSORIOS = "acessorios",
    CALCADOS = "calcados",
    ROUPAS = "roupas"
}

export type Produto = {
    id: number
    nome: string,
    preco: number,
    categoria: CATEGORIAS
}