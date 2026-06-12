# 🏨 Sistema de Reservas de Hotel

Sistema web desenvolvido para gerenciamento de quartos e reservas de hotel, permitindo o cadastro, consulta e exclusão de quartos e reservas através de uma interface web integrada a uma API e banco de dados.

---

## Tecnologias Utilizadas

### Frontend
- HTML5 (Estrutura semântica)
- CSS3 (Estilização responsiva e moderna)
- JavaScript Vanilla (Consumo da API e manipulação do DOM)

### Backend
- Express (Estruturação de rotas e servidor web)
- CORS (Gerenciamento de rotas)
- Prisma (Comunicação com o banco de dados)
- MySQL / MariaDB (Persistência dos dados)

## Global 
- VsCode
- Node.js
- XAMPP
- GitHub
- Git
- Insomnia (Teste de URL)
- Live Server Extensão

---

## Como testa localmente

1. Clone o repositório:
    ``` bash
    git clone https://github.com/SEU_USUARIO/hotelreservas.git
    ```

2. Abra com Git Bash Terminal

3. Clone este repositório com o comando ```git clone``` + link do repositório - (Utilize `SHIFT + Insert`)

4. Abra a pasta com VsCode 

---

## Como Executar o Projeto

### 1. Configurar o Backend (API)

1. Navegue até o diretório da API:
   ```bash
   cd api
   ```
2. Instale as dependências necessárias:
   ```bash
   npm i
   ```
3. Configure as variáveis de ambiente no arquivo `.env` na pasta `/api` com a URL de conexão do seu banco de dados:
   ```env
   DATABASE_URL="mysql://root@localhost:3306/mydb"
   ```
4. Sincronize o banco de dados utilizando as definições do Prisma:
   * Migrate:
        ```bash
        npx prisma migrate dev
        ```
   * Generate:
        ```bash
        npx prisma generate
        ```
  
5. Inicie o servidor de desenvolvimento:
   ```bash
   node server.js
   ```
   *A API iniciará por padrão no endereço `http://localhost:3000`.*

### 2. Executar o Frontend

1. Navegue até a pasta `web`.
2. Abra o arquivo `index.html` no seu navegador de preferência ou inicie utilizando o *Live Server* no VS Code.

---

## Demonstração (Screenshots)

---
#### 1. Tela dos quartos cadastrados:
<img src="WIREFRAMES/img 01.png" alt="Quartos Cadastrados" width="80%">

---
#### 2. Tela das reservas feitas:
<img src="WIREFRAMES/img 02.png" alt="Reservas Cadastradas" width="80%">

---
#### 3. Informações para cadastro do quarto:
<img src="WIREFRAMES/img 03.png" alt="Informações quarto" width="80%">

---
#### 4. Opções de quartos:
<img src="WIREFRAMES/img 04.png" alt="Tipos de quarto" width="80%">

---
#### 5. Quarto cadastrado:
<img src="WIREFRAMES/img 05.png" alt="Quarto cadastrado" width="80%">

---
#### 6. Informações para cadastro de reserva:
<img src="WIREFRAMES/img 06.png" alt="Informações reserva" width="80%">

---
#### 7. Reservas feitas:
<img src="WIREFRAMES/img 07.png" alt="Reservas feitas" width="80%">

---
#### 8. Tela de exclusão de reserva:
<img src="WIREFRAMES/img 08.png" alt="Excluir reserva" width="80%">

---
#### 9. Tela de exclusão de quarto:
<img src="WIREFRAMES/img 09.png" alt="Excluir quarto" width="80%">
