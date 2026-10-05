import { describe, expect, it } from "vitest";
import { Despesa, categoriaDespesa, mesAno } from "../src/tipos";
import { adicionarDespesa, removerDespesa, despesasDaCategoria, totalGasto, maiorDespesa } from "../src/despesas"; 

describe("adicionarDespesa", () => {
  it("retorna um novo array com a despesa adicionada,", () => {
    expect(adicionarDespesa([{ id: 1, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 }], { id: 2, descricao: "Filme", valor: 50, categoria: "lazer", mesAno: 4 })).toEqual([
      { id: 1, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 },
      { id: 2, descricao: "Filme", valor: 50, categoria: "lazer", mesAno: 4 }
    ]);
  });
  it("lança erro se valor for negativo", () => {
    expect(() => adicionarDespesa([], { id: 4, descricao: "Festa", valor: -20, categoria: "lazer", mesAno: 2 })).toThrow("Erro: O valor da despesa não pode ser negativo.");
  });
  it("lança erro se mes nao estiver entre 0 e 12", () => {
    expect(() => adicionarDespesa([], { id: 6, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 13 })).toThrow("Erro: Mês da despesa deve ser um valor entre 1 e 12.");
  })
});

describe("removerDespesa", () => {
  it("retorna um novo array sem a despesa com o id informado", () => {
    expect(removerDespesa([{ id: 1, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 }, { id: 2, descricao: "Filme", valor: 50, categoria: "lazer", mesAno: 4 }], 2)).toEqual([
      { id: 1, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 }
    ]);
  });
  it("se o id não existir, retorna cópia original", () => {
    expect(removerDespesa([{ id: 3, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 }], 2)).toEqual([
      { id: 3, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 }
    ]);
    expect(removerDespesa([{ id: 3, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 }, { id: 2, descricao: "Filme", valor: 50, categoria: "lazer", mesAno: 4 }], 2)).toEqual([
      { id: 3, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 }
    ]);
  })
});

describe("despesasDaCategoria", () => {
  it("retorna somente despesas da categoria especificada", () => {
    expect(despesasDaCategoria([
      { id: 3, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 },
      { id: 1, descricao: "Lanche", valor: 30, categoria: "alimentação", mesAno: 3 },
      { id: 2, descricao: "Filme", valor: 50, categoria: "lazer", mesAno: 4 }
    ], "alimentação")).toEqual([
      { id: 3, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 },
      { id: 1, descricao: "Lanche", valor: 30, categoria: "alimentação", mesAno: 3 }
    ]);
  });
});

describe("totalGasto", () => {
  it("retorna a soma dos valores das despesas", () => {
    expect(totalGasto([
      { id: 3, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 },
      { id: 1, descricao: "Lanche", valor: 30, categoria: "alimentação", mesAno: 3 },
      { id: 2, descricao: "Filme", valor: 50, categoria: "lazer", mesAno: 4 }
    ])).toBe(100);
  });
  it("retorna 0 se a lista estiver vazia", () => {
    expect(totalGasto([])).toBe(0);
  });
});

describe("maiorDespesa", () => {
  it("retorna a despesa com o maior valor", () => {
    expect(maiorDespesa([
      { id: 3, descricao: "Almoço", valor: 20, categoria: "alimentação", mesAno: 2 },
      { id: 1, descricao: "Lanche", valor: 30, categoria: "alimentação", mesAno: 3 },
      { id: 2, descricao: "Filme", valor: 50, categoria: "lazer", mesAno: 4 }
    ])).toEqual({ id: 2, descricao: "Filme", valor: 50, categoria: "lazer", mesAno: 4 });
  });
  it("retorna undefined se a lista estiver vazia", () => {
    expect(maiorDespesa([])).toBeUndefined();
  });
});