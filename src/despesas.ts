import { Despesa } from "./tipos";

export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[]
{
    if (nova.valor <= 0) {
        throw new Error("Erro: O valor da despesa não pode ser negativo.");
    }

    if (nova.mesAno < 1 || nova.mesAno > 12) {
        throw new Error("Erro: Mês da despesa deve ser um valor entre 1 e 12.");
    }

    return [...despesas, nova];
}

export function removerDespesa(despesas: Despesa[], id: number): Despesa[]
{
    return despesas.filter(despesa => despesa.id !== id);
}

export function despesasDaCategoria(despesas: Despesa[], categoria: string): Despesa[]
{
    return despesas.filter(despesa => despesa.categoria === categoria);
}  

export function totalGasto(despesas: Despesa[]): number
{
    return despesas.reduce((total, despesa) => total + despesa.valor, 0);
}

export function maiorDespesa(despesas: Despesa[]): Despesa | undefined
{
    throw new Error("não implementado.");
}