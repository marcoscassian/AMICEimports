from backend.extensions import db

class Produto(db.Model):
    __tablename__ = 'produtos'

    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100), nullable=False)
    tipo = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(50), nullable=False)
    estoque = db.Column(db.Integer, nullable=False)
    preco = db.Column(db.Float, nullable=False)
    imagem_url = db.Column(db.String(255), nullable=True)

    def to_dict(self):
            return {
                "id": self.id,
                "titulo": self.titulo,
                "tipo": self.tipo,
                "status": self.status,
                "estoque": self.estoque,
                "preco": self.preco,
                "imagem_url": self.imagem_url
            }