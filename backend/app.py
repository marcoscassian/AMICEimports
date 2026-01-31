from flask import Flask, jsonify, request
from flask_cors import CORS
from backend.extensions import db
from backend.controllers.produtos import produtos_bp
from sqlalchemy.sql.expression import func
from backend.models.produto import Produto
import os
import uuid
from werkzeug.utils import secure_filename




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


@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    filename = secure_filename(file.filename)
    ext = os.path.splitext(filename)[1]
    new_name = f"{uuid.uuid4().hex}{ext}"
    images_dir = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'frontend', 'public', 'images'))
    os.makedirs(images_dir, exist_ok=True)
    save_path = os.path.join(images_dir, new_name)
    file.save(save_path)
    url = f"/images/{new_name}"
    return jsonify({'url': url}), 201

if __name__ == '__main__':
    app.run(debug=True)
