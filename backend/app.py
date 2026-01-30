from flask import Flask, jsonify
from flask_cors import CORS
from backend.extensions import db
from backend.controllers.produtos import produtos_bp
from sqlalchemy.sql.expression import func
from backend.models.produto import Produto 

app = Flask(__name__)
app.config.from_object('backend.config.Config')

CORS(app)

db.init_app(app)

app.register_blueprint(produtos_bp)

with app.app_context():
    db.create_all()


@app.route('/api/produtos/home', methods=['GET'])
def get_home_products():
    produtos = Produto.query.order_by(func.random()).limit(4).all()
    return jsonify([p.to_dict() for p in produtos])

if __name__ == '__main__':
    app.run(debug=True)
