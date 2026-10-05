import { CATEGORIAS, type categoriaDespesa, type Despesa } from "./tipos";
import { despesasDaCategoria, totalGasto } from "./despesas";

export function descricaoCategoria(categoria: categoriaDespesa): string
{
    switch (categoria) {
        case "alimentação":
            return "Alimentação";
        case "transporte":
            return "Transporte";
        case "lazer":
            return "Lazer";
        case "moradia":
            return "Moradia";
    }
}

export function matrizCategoriaMes (despesas: Despesa[]): number[][]
{
    const matriz: number[][] = [];

    for (let i = 0; i < CATEGORIAS.length; i++) {
        const categoria = CATEGORIAS[i];
        if (categoria === undefined) {
            continue;
        }

        const despesasDaCategoriaAtual = despesasDaCategoria(despesas, categoria);
        const linha: number[] = [];

        for (let mes = 1; mes <= 12; mes++) {
            const despesasDoMes: Despesa[] = [];
            for (let i = 0; i < despesasDaCategoriaAtual.length; i++) {
                const despesa = despesasDaCategoriaAtual[i];
                if (despesa !== undefined && despesa.mesAno === mes) {
                    despesasDoMes.push(despesa);
                }
            }

            linha.push(totalGasto(despesasDoMes));
        }

        matriz.push(linha);
    }

    return matriz;
}


