# ajeitando o readme ainda blz 🤙

```bash
- rodar frontend
cd amiceimports/frontend
npm install
npm run dev
```

```bash
| rodar backend (recomendado)
cd amiceimports
# ative o venv se necessário
backend\env\Scripts\activate
pip install -r backend/requirements.txt
# execute o app como pacote (recomendado)
python -m backend.app

# alternativas
# 1) Definir PYTHONPATH para a raiz do projeto e executar diretamente
# PowerShell:
$env:PYTHONPATH = 'C:\Users\20231101110039\Documents\AMICEimports'
python -m backend.app
# 2) Executar `backend/app.py` diretamente (menos recomendado). Se preferir isso,
# edite o topo de `backend/app.py` para ajustar `sys.path` ou execute a partir
# da raiz com PYTHONPATH configurado.
```
