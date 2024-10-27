
# Projeto Backend em Laravel

Este é o backend de uma aplicação construída com Laravel. O objetivo deste projeto é gerenciar uma tabela de usuários, com a capacidade de criar, atualizar, listar e excluir usuários.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- PHP >= 8.0
- Composer
- MySQL (ou outro banco de dados compatível)
- Node.js (opcional, para algumas funcionalidades extras)

## Configuração do Projeto

### 1. Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_DIRETORIO>
```

### 2. Instalar Dependências

Use o Composer para instalar as dependências do Laravel:

```bash
composer install
```

### 3. Configurar o Banco de Dados

- Copie o arquivo `.env.example` para `.env`:

  ```bash
  cp .env.example .env
  ```

- Configure as variáveis de ambiente no arquivo `.env` para o seu banco de dados:

  ```
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=nome_do_banco
  DB_USERNAME=seu_usuario
  DB_PASSWORD=sua_senha
  ```

### 4. Gerar a Chave da Aplicação

Execute o seguinte comando para gerar a chave da aplicação:

```bash
php artisan key:generate
```

### 5. Executar as Migrations e Seeders

Rode as migrations para criar as tabelas no banco de dados e execute os seeders para popular o banco com dados fictícios:

```bash
php artisan migrate --seed
```

### 6. Iniciar o Servidor de Desenvolvimento

Para iniciar o servidor local, execute:

```bash
php artisan serve
```

A aplicação estará disponível em [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Endpoints da API

Abaixo estão os principais endpoints da API para gerenciar usuários:

### 1. Listar Usuários

**GET** `/api/users`

Retorna uma lista paginada de usuários.

### 2. Exibir Usuário Específico

**GET** `/api/users/{id}`

Retorna os detalhes de um usuário específico.

### 3. Criar Usuário

**POST** `/api/users`

**Body (JSON)**:
```json
{
    "name": "Nome do Usuário",
    "email": "usuario@email.com",
    "password": "senha123",
    "situation": "Ativo",
    "admission_date": "2024-01-01"
}
```

### 4. Atualizar Usuário

**PUT** `/api/users/{id}`

**Body (JSON)**:
```json
{
    "name": "Nome Atualizado",
    "email": "usuario@email.com",
    "password": "novaSenha123",
    "situation": "Inativo",
    "admission_date": "2024-01-02"
}
```

### 5. Excluir Usuário

**DELETE** `/api/users/{id}`

Exclui o usuário especificado.

## Testes

Para rodar os testes automatizados, use o seguinte comando:

```bash
php artisan test
```

## Outras Comandos Úteis

- **Limpar Cache de Configuração**:
  ```bash
  php artisan config:cache
  ```

- **Rollback de Migrations**:
  ```bash
  php artisan migrate:rollback
  ```

- **Rodar Seeders**:
  ```bash
  php artisan db:seed
  ```

## Notas Finais

- Este projeto foi desenvolvido usando a versão mais recente do Laravel.

Feito com ❤️ e Laravel.
