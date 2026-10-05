import { CATEGORIAS, type categoriaDespesa, type Despesa } from "./tipos";
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto, maiorDespesa } from "./despesas";
import { descricaoCategoria, matrizCategoriaMes, formatarRelatorio } from "./relatorio";

const despesas_exemplo: Despesa[] = [
    { id: 1, descricao: "Almoço de domingo", valor: 120, categoria: "alimentação", mesAno: 1 },
    { id: 2, descricao: "Viagem de ônibus", valor: 20, categoria: "transporte", mesAno: 2 },
    { id: 3, descricao: "Filme da Marvel", valor: 35, categoria: "lazer", mesAno: 3 },
    { id: 4, descricao: "Aluguel", valor: 1400, categoria: "moradia", mesAno: 1 },
    { id: 5, descricao: "Jantar chique", valor: 749, categoria: "alimentação", mesAno: 2 },
    { id: 6, descricao: "Uber para festa", valor: 37, categoria: "transporte", mesAno: 3 },
    { id: 7, descricao: "Show", valor: 500, categoria: "lazer", mesAno: 4 },
    { id: 8, descricao: "Gasolina", valor: 250, categoria: "lazer", mesAno: 4 },
    { id: 9, descricao: "Condomínio", valor: 200, categoria: "moradia", mesAno: 2 },
];

console.log(formatarRelatorio(despesas_exemplo));