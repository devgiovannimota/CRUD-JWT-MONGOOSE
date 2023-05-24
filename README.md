API de autenticação utilizando NodeJS e express.

🪧 Sobre
API de autenticação utilizando jwt desenvolvido juntamente com a video aula do Carreira Desenvolvedor Como criar uma API [NodeJS + Express + Mongo] Cadastro(CRUD) e autenticação(JWT) - PARTE #1 e PARTE #2

🚀 Frameworks utilizados
Express - Abstração do servidor
Insomnia - Para o teste da API
Mongoose - mongodb

📦 Como baixar o projeto

# Clonar o repositório

$ git clone https://github.com/devgiovannimota/CRUD-JWT-MONGOOSE.git

# Entrar no repositório

$ cd CRUD-JWT-MONGOOSE

# Instalar as dependências

$ npm install

# Iniciar o projeto

$ npm run dev

# Usando a API

Voce pode acessar a API usando os seguintes endpoints:

### `POST`

- `/auth/register` : Criação do usuário
  - Body:
    - `name: string` Nome do usuário
    - `email: string` Email do usuário
    - `password: string` Senha do user

### `POST`

- `/auth/authenticate` : Gera um novo token"
  - Body:
    - `email: string` Nome da atividade
    - `password: string`

### `GET`

- `/admin/users` : Apenas um teste para saber se o middleware estava autenticando
