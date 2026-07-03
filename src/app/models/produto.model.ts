export interface Produto{
    produtoId?: number;
    produtoNome: string;
    produtoQuantidade: number;
    produtoPreco: number;
    produtoCodigo: number;
    produtoDataValidade: string;
    produtoStatus: number; //1 ativo, 0 inativo e -1 apagado
}