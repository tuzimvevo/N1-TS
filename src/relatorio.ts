import { CATEGORIAS, type categoriaDespesa, type Despesa } from "./tipos";
import { despesasDaCategoria, totalGasto, maiorDespesa } from "./despesas";

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

export function formatarRelatorio(despesas: Despesa[]): string
{
    let larguraValor = Math.max(11, `R$ ${totalGasto(despesas).toFixed(2)}`.length);

    for (let i = 0; i < CATEGORIAS.length; i++) {
        const categoria = CATEGORIAS[i] as categoriaDespesa | undefined;
        if (categoria === undefined) {
            continue;
        }

        larguraValor = Math.max(
            larguraValor,
            `R$ ${totalGasto(despesasDaCategoria(despesas, categoria)).toFixed(2)}`.length
        );
    }

    let relatorio = "RELATÓRIO DE DESPESAS".toUpperCase() + "\n\n";
    relatorio += `${"CATEGORIA".padEnd(11)}  ${"TOTAL ANUAL".padStart(larguraValor)}\n`;

    for (let i = 0; i < CATEGORIAS.length; i++) {
        const categoria = CATEGORIAS[i] as categoriaDespesa | undefined;
        if (categoria === undefined) {
            continue;
        }

        relatorio += `${descricaoCategoria(categoria).padEnd(11)}  ${`R$ ${totalGasto(despesasDaCategoria(despesas, categoria)).toFixed(2)}`.padStart(larguraValor)}\n`;
    }

    relatorio += `${"TOTAL GERAL".padEnd(11)}  ${`R$ ${totalGasto(despesas).toFixed(2)}`.padStart(larguraValor)}\n`;

    let maior = maiorDespesa(despesas);
    if (maior !== undefined) {
        relatorio += `MAIOR DESPESA: ${maior.descricao} — R$ ${maior.valor.toFixed(2)}`;
    } else {
        relatorio += "MAIOR DESPESA: nenhuma";
    }

    return relatorio;
}
