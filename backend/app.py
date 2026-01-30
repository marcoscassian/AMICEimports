from flask import Flask, jsonify
from flask_cors import CORS
<<<<<<< HEAD
from backend.extensions import db
from backend.controllers.produtos import produtos_bp
from sqlalchemy.sql.expression import func
from backend.models.produto import Produto 
=======
>>>>>>> 3f3fb75ac99d6d1d373e1949572019183196be57

# Support running this module either as a package from the project root
# (python -m backend.app) or as a script from the backend/ folder (python app.py).

#verificar isso
try:
    from backend.extensions import db
    from backend.controllers.produtos import produtos_bp
    from backend.models.produto import Produto
except ModuleNotFoundError:
    from extensions import db
    from controllers.produtos import produtos_bp
    from models.produto import Produto

from sqlalchemy.sql.expression import func

#verificar isso
app = Flask(__name__)
try:
    app.config.from_object('backend.config.Config')
except Exception:
    app.config.from_object('config.Config')

CORS(app)

db.init_app(app)

app.register_blueprint(produtos_bp, url_prefix="/api/produtos")

with app.app_context():
    db.create_all()


@app.route('/api/produtos/home', methods=['GET'])
def get_home_products():
    produtos = Produto.query.order_by(func.random()).limit(4).all()
    return jsonify([p.to_dict() for p in produtos])

if __name__ == '__main__':
    app.run(debug=True)
