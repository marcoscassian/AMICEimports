# 🎯 AMICEimports

Uma aplicação **full-stack moderna** para gerenciamento e importação de produtos.  
O projeto combina um **frontend responsivo em React** com um **backend robusto em Flask**, focando em organização, escalabilidade e boas práticas de desenvolvimento web.

---

## 📋 Tecnologias Utilizadas

### 🖥️ Frontend
- **React 19** — Biblioteca para construção de interfaces
- **Vite** — Build tool rápido e moderno
- **React Router DOM** — Roteamento no lado do cliente
- **CSS3** — Estilização nativa e responsiva

### ⚙️ Backend
- **Flask 3.1** — Framework web em Python
- **Flask-CORS** — Suporte a requisições cross-origin
- **SQLAlchemy 2.0** — ORM para banco de dados
- **Flask-SQLAlchemy** — Integração Flask + SQLAlchemy
- **SQLite** — Banco de dados padrão do projeto

---

## 🚀 Quick Start

### ✅ Pré-requisitos
- **Python 3.10+** (com `venv`)
- **Node.js 18+**
- **npm**
- **Git** (opcional)

---

### 1️⃣ Clonar ou Abrir o Projeto

```bash
cd AMICEimports


⸻

2️⃣ Configurar o Backend

cd backend

# Windows
env\Scripts\activate.bat

# Linux/Mac
source env/bin/activate

pip install -r requirements.txt
cd ..
python -m backend.app

📡 Backend disponível em:
http://localhost:5000

⸻

3️⃣ Configurar o Frontend

cd frontend
npm install
npm run dev

🌐 Frontend disponível em:
http://localhost:5173

⸻

📁 Estrutura do Projeto

AMICEimports/
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── extensions.py
│   ├── requirements.txt
│   ├── controllers/
│   │   └── produtos/
│   │       └── routes.py
│   ├── models/
│   │   └── produto.py
│   ├── instance/
│   └── env/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── pages/
│   │   └── components/
│   ├── public/
│   ├── index.html
│   └── vite.config.js
│
└── README.md


⸻

🔌 API Endpoints

GET /api/produtos/home

Retorna 4 produtos aleatórios para a home.

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


⸻

POST /api/produtos

Cria um novo produto.

{
  "titulo": "Novo Produto",
  "tipo": "Categoria",
  "status": "disponível",
  "estoque": 100,
  "preco": 99.99,
  "imagem_url": "https://..."
}


⸻

🛠️ Desenvolvimento

Testes do Backend

python backend/test_client.py

Build do Frontend

cd frontend
npm run build

Lint

npm run lint


⸻

⚙️ Configurações

Backend

Edite backend/config.py.
O projeto utiliza SQLite por padrão.

Frontend (.env)

VITE_API_URL=http://localhost:5000

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';


⸻

🐛 Troubleshooting

Backend não inicia

python -m backend.app

Porta 5000 em uso

Windows

netstat -ano | findstr :5000
taskkill /PID <PID> /F

Linux / Mac

lsof -i :5000
kill -9 <PID>


⸻

📝 Licença

Projeto de uso educacional.

⸻

👥 Autores
	•	Alex
	•	Marcos
	•	Ingrid
	•	Carla
	•	Emmily

⸻

AMICEimports — Sistema de gerenciamento de produtos
📅 Última atualização: Janeiro de 2026

