export type categoriaDespesa = 'alimentação' | 'transporte' | 'lazer' | 'moradia'; // Feito em forma de union type, assim restringindo os valores possíveis de fornecimento de categoriaDespesa.

export type mesAno = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // Também feito em forma de union type, para que seja possível fornecer somente meses de janeiro a dezembro.

export interface Despesa {
  readonly id: number; // Identificador da despesa, não será alterado após sua criação, dado que é readonly.
  descricao: string;
  valor: number; 
  categoria: categoriaDespesa;
  mesAno: mesAno; // descricao, valor, categoria e mesAno são obrigatórios, ou seja, devem ser fornecidos na criação de uma Despesa nova.
  observacao?: string; // A observação é opcional, pode ou não ser fornecida.
}

export const CATEGORIAS = ['alimentação', 'transporte', 'lazer', 'moradia']