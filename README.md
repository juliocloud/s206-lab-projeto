# Projeto Final - S206

Este repositório contém a resolução da prova prática de laboratório da
disciplina S206. O projeto consiste em testes automatizados de interface
(UI) utilizando Cypress e testes de API utilizando Postman

## Estrutura do Projeto

-   **cypress/e2e/**: Contém os casos de teste de UI (arquivo
    `the-internet.cy.js`).
-   **cypress/reports/**: Pasta onde os relatórios do Mochawesome são
    gerados.
-   **postman/**: Contém a collection do Postman
    (`S206-LAB-PROVA.postman_collection.json`).
-   **newman/**: Contém o relatório HTML da execução via Newman (se
    executado via linha de comando).

## Pré-requisitos

-   Node.js instalado.
-   NPM 
-   Postman  ou Newman 

## Instalação

1.  Clone o repositório ou baixe os arquivos.
2.  Abra o terminal na pasta raiz do projeto.
3.  Instale as dependências listadas 

``` bash
npm install
```

## Executando os Testes de UI (Cypress)

### Modo Interativo 

Para abrir o Cypress e ver os testes rodando no navegador:

``` bash
npx cypress open
```

Selecione **E2E Testing** e depois o navegador de sua preferência.
Clique no arquivo `the-internet.cy.js` para rodar.

### Modo Headless

Pra rodar os testes sem abrir o navegador e gerar o relatório do
Mochawesome:

``` bash
npx cypress run
```

O relatório será gerado na pasta **cypress/reports**. Abra o arquivo
`.html` gerado para visualizar os resultados.

### Cenários cobertos

-   Checkboxes (marcar e desmarcar).
-   Drag and Drop (arrastar elementos).
-   Notification Messages (cenário negativo - fechar notificação).
-   Dropdown (seleção de opções).
-   Dynamic Loading (espera de elementos renderizados).
-   Hovers (interação com mouse sobre imagens).

## Executando os Testes de API (Postman)

A API testada foi a GoRest: https://gorest.co.in/

### Passos:

1.  Abra o Postman.

2.  Clique em **Import** e selecione o arquivo localizado em
    `postman/S206-LAB-PROVA.postman_collection.json`.

3.  A collection contém 5 requisições que devem ser rodadas em ordem
    sequencial, pois utilizam variáveis de ambiente (como `userId`)
    geradas dinamicamente:

    -   Listar usuários (GET).
    -   Criar usuário (POST) --- salva o ID gerado.
    -   Buscar usuário específico (GET) --- usa o ID salvo.
    -   Atualizar usuário (PUT) --- usa o ID salvo.
    -   Criar usuário negativo (POST) --- testa validação de erro.

**Observação:** O Token de acesso já está configurado na
aba *Authorization* da collection. Caso expire, gere um novo token no
site do GoRest e atualize na collection.
