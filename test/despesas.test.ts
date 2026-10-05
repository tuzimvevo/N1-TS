import { describe, expect, it } from "vitest";
import { Despesa, categoriaDespesa, mesAno } from "../src/tipos";
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto, maiorDespesa } from "../src/despesas"; 

describe("adicionarDespesa", () => {
  it("retorna um novo array com a despesa adicionada,", () => {
    expect(adicionarDespesa([{ id: 1, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 }], { id: 2, descricao: "Filme", valor: 50, categoria: "lazer", mesAno: 4 })).toEqual([
      { id: 1, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 },
      { id: 2, descricao: "Filme", valor: 50, categoria: "lazer", mesAno: 4 }
    ]);
  })
  it("lança erro se valor for negativo", () => {
    expect(() => adicionarDespesa([], { id: 4, descricao: "Festa", valor: -20, categoria: "lazer", mesAno: 2 })).toThrow("Erro: O valor da despesa não pode ser negativo.");
  })
  it("lança erro se mes nao estiver entre 0 e 12", () => {
    expect(() => adicionarDespesa([], { id: 6, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 13 })).toThrow("Erro: Mês da despesa deve ser um valor entre 1 e 12.");
  });
});