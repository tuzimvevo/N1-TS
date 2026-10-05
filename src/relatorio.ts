import { CATEGORIAS, type categoriaDespesa, type Despesa } from "./tipos";

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
