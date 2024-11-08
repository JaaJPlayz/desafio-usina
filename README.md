---

# 📚 **Biblioteca de Filmes com Recomendações e Avaliações** 🎬

Este é um projeto de desafio técnico onde foi criada uma aplicação de **Biblioteca de Filmes** com funcionalidades de CRUD, avaliações de filmes, recomendações personalizadas e autenticação de usuários. A aplicação foi construída utilizando as tecnologias **Node.js**, **React**, **PostgreSQL** e **Docker**.

---

## 🚀 **Funcionalidades**

1. **Cadastro e Login de Usuários** 📝: Autenticação com JWT, permitindo que usuários se cadastrem, façam login e acessem a plataforma.
2. **CRUD de Filmes** 🎥: Os usuários podem adicionar, editar, listar e remover filmes da biblioteca.
3. **Avaliações de Filmes** ⭐: Usuários podem avaliar filmes de 1 a 5 estrelas, com a possibilidade de adicionar um comentário opcional.
4. **Recomendações** 🎯: O sistema sugere filmes com base nas avaliações de outros usuários que possuem perfis semelhantes.
5. **Pesquisa e Filtragem de Filmes** 🔍: Filtros para gênero, ano de lançamento, e outros critérios.
6. **Interface de Usuário** 💻: Interface interativa e intuitiva, construída com **React** e **CSS Modules**.

---

## 🛠️ **Tecnologias Utilizadas**

- **Frontend**:
  - React ⚛️
  - CSS Modules 🎨
  - TypeScript 🔤
- **Backend**:
  - Node.js 🖧
  - Express 🚦
  - TypeScript 🔤
  - JWT (JSON Web Tokens) 🔑
  - bcryptjs (para hash de senhas) 🔒
  - CORS 🌐
  - PostgreSQL 🗄️
- **Ferramentas de Desenvolvimento**:
  - Docker 🐳
  - Docker Compose ⚙️

---

## 🏗️ **Arquitetura do Projeto**

O projeto está dividido em duas partes principais: **Backend** e **Frontend**. A comunicação entre o cliente e o servidor é feita via **API RESTful**.

### Estrutura de Diretórios

```
/backend
  /src
    /controllers      # Lógica de controle das requisições HTTP
    /models           # Definição das tabelas e interações com o banco
    /services         # Funções de negócio e lógica principal
    /routes           # Roteamento de URLs
    /utils            # Utilitários, como funções auxiliares
  .env                # Variáveis de ambiente do backend
  Dockerfile          # Arquivo de configuração do Docker para o backend
  tsconfig.json       # Configuração do TypeScript
  package.json        # Dependências e scripts do backend

/frontend
  /src
    /components       # Componentes reutilizáveis de UI
    /pages            # Páginas da aplicação (Home, Login, Cadastro, etc.)
    /services         # Funções para consumir a API
    /styles           # Estilos utilizando CSS Modules
    App.tsx           # Componente raiz da aplicação
  Dockerfile          # Arquivo de configuração do Docker para o frontend
  tsconfig.json       # Configuração do TypeScript
  package.json        # Dependências e scripts do frontend

/docker-compose.yml   # Configuração do Docker Compose para orquestração do ambiente
README.md             # Documentação do projeto
```

---

## 🏃 **Como Rodar o Projeto**

### 🔧 **Pré-requisitos**

- **Node.js** v16 ou superior
- **Docker** e **Docker Compose** instalados
- **PostgreSQL** (configurado via Docker)

### 📜 **Passo a Passo**

1. **Clonar o Repositório** 

   Clone o repositório para sua máquina local:

   ```bash
   git clone git@github.com:JaaJPlayz/desafio-usina-fs.git biblioteca-filmes
   cd biblioteca-filmes
   ```

2. **Instalar as dependências**

   ```bash
   npm install
   npm run install:all
   ```

4. **Rodando com Docker** 🐳

   O projeto já está configurado para rodar com **Docker** e **Docker Compose**. Execute o seguinte comando para subir o ambiente completo:

   ```bash
   npm run run:all
   ```

   Esse comando irá:
   - Subir o banco de dados PostgreSQL 🗄️.
   - Rodar o servidor backend na porta `3001` 🚀.
   - Rodar o frontend na porta `5173` 🌍.

5. **Acessando a Aplicação**

   Após o ambiente estar rodando, acesse a aplicação no navegador:

   - **Frontend (UI)**: [http://localhost:3000](http://localhost:5173) 💻
   - **Backend (API)**: [http://localhost:5000](http://localhost:3001) 🖧

---

## 📡 **Endpoints da API**

Aqui estão alguns dos principais endpoints que a API oferece:

### **Usuários**

- `POST /register` 📝: Registra um novo usuário.
- `POST /login` 🔑: Faz login e retorna um token JWT.

### **Filmes**

- `GET /movies` 🎥: Lista todos os filmes.
- `POST /movies` ➕: Adiciona um novo filme.
- `PUT /movies/:id` ✏️: Atualiza as informações de um filme.
- `DELETE /movies/:id` 🗑️: Remove um filme da biblioteca.

---