# Projeto Integrador - Giro Urbano (Transporte Urbano)

Aplicação desenvolvida de forma integrada para as disciplinas de **Front-end** e **Programação Web**. O sistema consiste em uma plataforma de gerenciamento de bicicletas compartilhadas voltada para o transporte urbano sustentável, integrando uma interface moderna desenvolvida em React a uma API REST robusta construída em Java com Spring Boot e JdbcTemplate.

---
## 🚀 Tecnologias Utilizadas

### Front-end
- **React & JSX:** Construção da interface baseada em componentes.
- **React Router DOM:** Gerenciamento de rotas e navegação entre telas.
- **Axios:** Cliente HTTP baseado em promessas para consumo da API REST.
- **CSS Modules:** Estilização isolada e modularizada dos componentes visuais.
- **State Hooks (useState, useEffect):** Controle de estados da aplicação e tratamento de ciclos de vida e requisições.

### Back-end
- **Java & Spring Boot:** Arquitetura da API REST.
- **Spring JDBC (JdbcTemplate):** Persistência e mapeamento de dados.
- **H2 Database:** Banco de dados relacional embarcado para armazenamento dos registros.
- **CORS Config:** Configuração de liberação de origens cruzadas (`@CrossOrigin`) para comunicação com o cliente.

---

## 📋 Atendimento aos Requisitos dos Enunciados

- **Mínimo de 5 campos no cadastro:** A entidade Bicicleta possui exatamente 5 campos obrigatórios na regra de negócio (`codigoPatrimonio`, `modelo`, `status`, `quilometragem` e `localizacaoAtual`).
- **Componentização e Estados:** Aplicação totalmente componentizada com gestão de estados de carregamento, sucesso e erro.
- **Validação e Regras de Negócio:** O Back-end valida as informações recebidas antes de persistir no banco relacional.
- **Tratamento de Status HTTP:** Retornos consistentes (200 OK, 201 Created, 400 Bad Request, etc.).

---

## 📊 Documentação da API (Contratos de Integração)

O recurso gerenciado pela aplicação é a Bicicleta. Abaixo estão especificados os endpoints consumidos pelo front-end:

### 1. Listar Bicicletas
- **URL:** `http://localhost:8080/bicicletas`
- **Método:** `GET`
- **Status de Resposta:** `200 OK`
- **Exemplo de Resposta (JSON):**

```json
[
  {
    "id": 1,
    "codigoPatrimonio": "BIKE-042",
    "modelo": "Elétrica",
    "status": "Disponível",
    "quilometragem": 120.5,
    "localizacaoAtual": "Rua Haddock Lobo - Jardins"
  }
]
```

### 2. Cadastrar Bicicleta
- **URL:** `http://localhost:8080/bicicletas`
- **Método:** `POST`
- **Status de Resposta:** `201 Created` (Sucesso) | `400 Bad Request` (Dados inválidos ou violação de regra de negócio)
- **Exemplo de Requisição (JSON):**

```json
{
  "codigoPatrimonio": "BIKE-042",
  "modelo": "Elétrica",
  "status": "Disponível",
  "quilometragem": 120.5,
  "localizacaoAtual": "Rua Haddock Lobo - Jardins"
}
```

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para executar a aplicação completa em sua máquina de forma integrada:

### Passo 1: Clonar o repositório
Abra o seu terminal e clone o repositório do projeto:
```bash
git clone <url-do-seu-repositorio>
cd proj_transporte_urbano
```

### Passo 2: Executar o Back-end (API)
1. Navegue até a pasta do back-end ou abra-a em sua IDE Java de preferência (IntelliJ, Eclipse, VS Code).
2. Certifique-se de que as dependências do Maven estão carregadas.
3. Execute a aplicação Spring Boot utilizando o terminal:

```bash
cd backend
mvn spring-boot:run
```
O servidor iniciará na porta `8080`. O console web do banco H2 pode ser acessado em `http://localhost:8080/h2-console`.

### Passo 3: Executar o Front-end (Cliente React)
1. Abra um novo terminal na raiz do repositório e navegue até a pasta do front-end:
```bash
cd frontend
```
2. Instale as dependências padrão do projeto listadas no `package.json` (incluindo o Axios e o React Router DOM):
```bash
npm install
```
*(Caso prefira instalar manualmente os pacotes externos caso o ambiente exija):*
```bash
npm install axios react-router-dom
```
3. Inicie a aplicação front-end em modo de desenvolvimento (usando o Vite):
```bash
npm run dev
```
A aplicação estará acessível no navegador na URL informada pelo terminal (geralmente `http://localhost:5173`).

---

## 🔗 Integração Front-End & Back-End

O front-end consome dinamicamente os endpoints expostos pela API Java através de requisições assíncronas utilizando o Axios. A política de CORS foi devidamente configurada no controlador Java (`@CrossOrigin`), garantindo que o cliente consiga enviar e resgatar dados do banco relacional sem bloqueios de segurança.
