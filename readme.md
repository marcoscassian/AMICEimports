# 🎯 MICE Imports

Uma aplicação full-stack moderna para gerenciamento e importação de produtos. O projeto combina um **frontend responsivo em React** com um **backend robusto em Flask**.

---

## 📋 Tecnologias

### Frontend
- **React 19** - UI library
- **Vite** - Build tool rápido e moderno
- **React Router DOM** - Roteamento cliente
- **CSS3** - Styling nativo

### Backend
- **Flask 3.1** - Web framework Python
- **Flask-CORS** - Suporte a requisições cross-origin
- **SQLAlchemy 2.0** - ORM para banco de dados
- **Flask-SQLAlchemy** - Integração Flask + SQLAlchemy

---

## 🚀 Quick Start

### Pré-requisitos
- **Python 3.10+** (com venv)
- **Node.js 18+** (com npm)
- **Git** (opcional)

### 1️⃣ Clonar/Abrir Projeto

```bash
cd MICEAimports
```

### 2️⃣ Configurar Backend

```bash
# Entrar na pasta backend
cd backend

# Ativar virtualenv (Windows)
env\Scripts\activate.bat

# Ativar virtualenv (Linux/Mac)
source env/bin/activate

# Instalar dependências
pip install -r requirements.txt

# Voltar à raiz do projeto
cd ..

# Rodar o servidor (recomendado - a partir da raiz)
python -m backend.app
```

O backend estará disponível em **`http://localhost:5000`**

### 3️⃣ Configurar Frontend

```bash
# Em outro terminal, entrar na pasta frontend
cd frontend

# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em **`http://localhost:5173`** (ou outra porta indicada pelo Vite)

---

## 📁 Estrutura do Projeto

```
MICEAimports/
├── backend/
│   ├── app.py                 # Aplicação Flask principal
│   ├── config.py              # Configurações do app
│   ├── extensions.py          # Extensões (db, cors)
│   ├── requirements.txt        # Dependências Python
│   ├── controllers/
│   │   └── produtos/
│   │       ├── __init__.py
│   │       └── routes.py      # Rotas para produtos
│   ├── models/
│   │   ├── __init__.py
│   │   └── produto.py         # Modelo de Produto
│   ├── instance/               # Dados da aplicação (SQLite, etc)
│   └── env/                    # Virtual environment
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Componente raiz
│   │   ├── main.jsx           # Entry point
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Products/
│   │   │   └── ProductsForm/
│   │   └── components/
│   │       ├── Header/
│   │       ├── Hero/
│   │       └── ProductCard/
│   ├── public/                # Arquivos estáticos
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
└── README.md                  # Este arquivo
```

---

## 🔌 API Endpoints

### GET `/api/produtos/home`
Retorna 4 produtos aleatórios para exibição na home.

**Response (200):**
```json
[
  {
    "id": 1,
    "titulo": "Produto X",
    "tipo": "Eletrônicos",
    "status": "disponível",
    "estoque": 50,
    "preco": 199.99,
    "imagem_url": "https://..."
  }
]
```

### POST `/api/produtos`
Cria um novo produto no banco de dados.

**Request Body:**
```json
{
  "titulo": "Novo Produto",
  "tipo": "Categoria",
  "status": "disponível",
  "estoque": 100,
  "preco": 99.99,
  "imagem_url": "https://..."
}
```

**Response (201):**
```json
{
  "message": "Produto cadastrado com sucesso"
}
```

---

## 🛠️ Desenvolvimento

### Rodar Testes (Backend)

```bash
# A partir da raiz do projeto
python backend/test_client.py
```

### Build Frontend para Produção

```bash
cd frontend
npm run build
```

### Lint Frontend

```bash
cd frontend
npm run lint
```

---

## ⚙️ Configuração

### Backend (`backend/config.py`)

Edite as variáveis de ambiente e banco de dados conforme necessário. Por padrão usa **SQLite**.

### Frontend (`.env`)

Se precisar alterar a URL base da API, crie um `.env` na pasta `frontend`:

```
VITE_API_URL=http://localhost:5000
```

E use em seus componentes:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
```

---

## 🐛 Troubleshooting

### Backend não inicia

**Erro:** `ModuleNotFoundError: No module named 'backend'`

**Solução:** Execute sempre a partir da raiz do projeto:
```bash
python -m backend.app
```

### Frontend não conecta ao backend

**Erro:** `CORS error` ou conexão recusada

**Solução:** Certifique-se de que:
1. Backend está rodando em `http://localhost:5000`
2. Seu `fetch()` aponta para a URL correta
3. CORS está ativado (já está em `backend/app.py`)

### Porta 5000 já está em uso

```bash
# Windows - liberar porta
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :5000
kill -9 <PID>
```

---

## 📝 Licença

Este projeto é de uso pessoal/educacional.

---

## 👥 Autor

**AMICE Imports** - Projeto de gerenciamento de produtos | 2026

---

**Última atualização:** Janeiro 2026
