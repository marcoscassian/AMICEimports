from flask import Flask
from flask_cors import CORS
from backend.extensions import db
from backend.controllers.produtos import produtos_bp

app = Flask(__name__)
app.config.from_object('backend.config.Config')

CORS(app)

db.init_app(app)

app.register_blueprint(produtos_bp)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)