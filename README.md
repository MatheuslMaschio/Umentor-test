
# Projeto de CRUD de Usuários com Atualização em Tempo Real

## Descrição do Projeto

Este projeto consiste em um aplicativo web que exibe uma tabela de usuários e a atualiza em tempo real à medida que novos usuários são adicionados. O sistema permite realizar um CRUD completo (Criar, Ler, Atualizar e Deletar) de usuários, com filtros de pesquisa e validação de formulário. A interface é moderna e responsiva, utilizando componentes do Material UI, e a integração é feita por meio de requisições assíncronas.

### Funcionalidades Principais

- Exibir uma tabela de usuários com as seguintes informações:
  - ID
  - Nome
  - Email
  - Situação
  - Data de Admissão
  - Data e Hora de Cadastro
  - Data e Hora de Atualização
- Adicionar novos usuários com validação de formulário.
- Atualizar e excluir usuários existentes.
- Filtro de pesquisa por nome, email ou situação.
- Atualização em tempo real da tabela sem recarregar a página.
- Design responsivo e amigável.

## Tecnologias Utilizadas

### Backend
- **PHP (Laravel)**: Framework utilizado para desenvolver a API do backend.
- **Banco de Dados MySQL**: Utilizado para armazenar os dados de usuários.
- **XAMPP**: Utilizado para configurar o servidor PHP local e o banco de dados MySQL.
- **Arquitetura MVC**: Organiza o código em Model-View-Controller para maior manutenção e clareza.

### Frontend
- **React**: Biblioteca JavaScript para criar a interface do usuário.
- **Material UI**: Biblioteca de componentes de interface para React.
- **React Hook Form**: Gerenciamento de formulários no React.
- **SweetAlert2**: Biblioteca para exibir alertas modernos e estilizados.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Zod**: Biblioteca de validação para garantir a integridade dos dados.
- **Styled-components**: Biblioteca para aplicar estilos diretamente nos componentes React.
- **Dayjs**: Biblioteca para manipulação de datas no frontend.

### Outras Ferramentas
- **Git**: Para controle de versão do projeto.
- **GitHub**: Para hospedagem do repositório e compartilhamento do código.
- **XAMPP**: Para configurar o ambiente de desenvolvimento local.

## Instalação e Execução

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **NPM** ou **Yarn**
- **XAMPP** (para executar o backend localmente)
- **Composer** (para instalar as dependências do Laravel)
- **Git** (para clonar o repositório)

### Instruções para Instalar e Rodar o Projeto

#### 1. Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
```

#### 2. Configurar o Backend

##### Instalar as Dependências do Backend

No diretório do backend, execute:

```bash
composer install
```

##### Configurar o Arquivo `.env`

- Copie o arquivo `.env.example` e renomeie para `.env`.
- Configure as variáveis de ambiente, incluindo o banco de dados:
  - `DB_CONNECTION=mysql`
  - `DB_HOST=127.0.0.1`
  - `DB_PORT=3306`
  - `DB_DATABASE=nome_do_banco`
  - `DB_USERNAME=usuario`
  - `DB_PASSWORD=senha`

##### Migrar e Popular o Banco de Dados

```bash
php artisan migrate --seed
```

##### Rodar o Servidor Laravel

```bash
php artisan serve
```

O backend estará disponível em `http://127.0.0.1:8000`.

#### 3. Configurar o Frontend

##### Instalar as Dependências do Frontend

No diretório do frontend, execute:

```bash
npm install
```

ou

```bash
yarn install
```

##### Rodar o Servidor de Desenvolvimento do Frontend

```bash
npm start
```

ou

```bash
yarn start
```

O frontend estará disponível em `http://localhost:5173`.

### Endpoints da API

- **GET** `/api/users` - Lista todos os usuários.
- **POST** `/api/users` - Cria um novo usuário.
- **PUT** `/api/users/{id}` - Atualiza um usuário existente.
- **DELETE** `/api/users/{id}` - Exclui um usuário.

### Estrutura do Projeto

- **Backend (Laravel)**:
  - **Controllers**: Controlam a lógica da aplicação.
  - **Models**: Representam os dados e interagem com o banco.
  - **Migrations**: Estrutura do banco de dados.
  - **Routes**: Define as rotas da API.

- **Frontend (React)**:
  - **Components**: Contém os componentes reutilizáveis.
  - **Pages**: Contém as páginas principais, como a de usuários.
  - **Styles**: Contém os arquivos de estilo.
  - **lib/axios**: Configuração de requisições HTTP.

### Observações

- Este projeto utiliza requisições assíncronas para atualizar a tabela de usuários em tempo real, garantindo que novos registros apareçam sem a necessidade de recarregar a página.
- O filtro de pesquisa é implementado diretamente no frontend para filtrar a lista de usuários por nome, email ou situação.
- O frontend foi estilizado com Material UI e SweetAlert2 para criar uma interface amigável e moderna.

## Contribuição

Se você deseja contribuir com o projeto, fique à vontade para abrir uma pull request ou criar uma issue no repositório.

---

Se tiver dúvidas ou sugestões, entre em contato por meio do repositório!
