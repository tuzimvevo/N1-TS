# N1 TS - Projeto em TypeScript

## INSTALAÇÃO E UTILIZAÇÃO

## Dependências

- Node.js e npm.
- TypeScript, `tsx`, Vitest e `@types/node` são instalados pelo npm.

## Instalação

Na pasta do projeto, instale as dependências listadas em `package.json`:

```sh
npm install
```

## Executar

Inicie o projeto em modo de desenvolvimento:

```sh
npm run dev
```

O comando observa alterações nos arquivos e executa `src/index.ts`. Para encerrar, pressione `Ctrl+C`.

## Testes

Execute a suíte de testes:

```sh
npm test
```

## ARQUIVOS DE CONFIG

- `package.json`: define os scripts do projeto e suas dependências.
- `package-lock.json`: fixa as versões instaladas para que instalações futuras sejam reproduzíveis.
- `tsconfig.json`: configura o compilador TypeScript e as opções de verificação de tipos.
- `.gitignore`: impede que `node_modules/` e `dist/` sejam incluídos no Git.

## REGISTRO DE USO DE IA

### A IA auxiliou na implementação das funções seguintes a partir de seus testes:

- `adicionarDespesa`
- `removerDespesa`
- `despesasDaCategoria`
- `totalGasto`
- `maiorDespesa`

Além disso, também auxiliou na implementação das funções de `relatorio.ts`.

### Reflexões ao utilizar a IA:

A IA, tendo sido utilizada somente a partir dos testes escritos manualmente, apesar de implementar as funções de forma totalmente correta a partir do que tinha, não implementou tudo o que era necessário para o funcionamento correto do programa. O caso que mais se destacou foi na função `adicionarDespesa`, na qual não havia um teste ou indicador provando que a mesma não alterava o array original. Assim, foi adicionado um teste adicional para poder provar tal fato.
Apesar disso, a IA foi utilizada majoritariamente sem nenhum problema. Em casos de dúvidas e verificações, foi extremamente útil para um esclarescimento rápido, sendo uma boa alternativa a threads de fóruns e pesquisas na internet. Entender o raciocínio da IA é fácil e pedir correções do próprio código que ela escreveu também é útil, tendo um controle fácil de que linhas entram no projeto ou não.
