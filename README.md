# Cursos App – React + TypeScript + Vite

Aplicação web de listagem e detalhamento de cursos, desenvolvida em React com TypeScript e Vite, utilizando React Router para navegação entre páginas e integração com API simulada via Axios.[^1][^2]

## Funcionalidades

- Página Home com apresentação do projeto e chamada para ação.
- Listagem de cursos com filtro (FilterBar) e cartões individuais (CourseCard), consumindo dados tipados a partir de `course.ts`.[^3]
- Página de detalhes do curso com informações completas e componente reutilizável de conteúdo (`CourseDetailContent`).
- Páginas institucionais de Sobre e Contato, incluindo formulário de contato básico.
- Tratamento de erros e mensagens amigáveis ao usuário (`ErrorMessage`).
- Layout responsivo com `Header` e `Footer` presentes em todas as páginas.[^1]


## Tecnologias utilizadas

- React 19 com TypeScript.[^4]
- Vite 7 para bundling e ambiente de desenvolvimento rápido.[^5][^4]
- React Router DOM 7 para gerenciamento de rotas (Home, Cursos, CursoDetalhe, Sobre, Contato).[^1]
- Axios para consumo da API de cursos (`api.ts`).[^2]
- ESLint e TypeScript-ESLint para padronização e análise estática do código.[^4]


## Estrutura de pastas (principal)

```txt
src/
  App.tsx                # Define rotas e layout principal (Header, Footer, main)
  main.tsx               # Ponto de entrada da aplicação React
  api.ts                 # Acesso à API de cursos
  course.ts              # Tipagens/interfaces de cursos
  AuthContext.tsx        # Contexto de autenticação
  components/
    Header.tsx
    Footer.tsx
    CourseCard.tsx
    CourseList.tsx
    FilterBar.tsx
    ErrorMessage.tsx
    CourseDetailContent.tsx
  pages/
    Home.tsx
    Cursos.tsx
    CursoDetalhe.tsx
    Sobre.tsx
    Contato.tsx
  App.css
  index.css
```


## Como executar o projeto

1. Clonar o repositório:

```bash
git clone https://github.com/marcuspenha/cursos-app.git
cd cursos-app
```

2. Instalar as dependências:

```bash
npm install
```

3. Rodar em ambiente de desenvolvimento:

```bash
npm run dev
```

4. Gerar build de produção:

```bash
npm run build
```

5. (Opcional) Rodar o lint:

```bash
npm run lint
```


## Rotas da aplicação

- `/` – Home.
- `/cursos` – Listagem de cursos com filtros.
- `/cursos/:id` – Detalhe de um curso específico.
- `/sobre` – Informações sobre o projeto.
- `/contato` – Formulário de contato.
[^1]


## Próximos passos / melhorias

- Conectar a uma API real de cursos (REST ou GraphQL) em vez de dados simulados.[^2]
- Utilizar o `AuthContext` para autenticação e áreas restritas.
- Adicionar testes unitários e de integração.
- Melhorar acessibilidade (ARIA, navegação por teclado) e internacionalização (i18n).

<div align="center">⁂</div>

[^1]: App.tsx

[^2]: README.md

[^3]: vite.jpg

[^4]: package.json

[^5]: react.jpg

