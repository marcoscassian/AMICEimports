from flask import request, jsonify
from backend.extensions import db
from backend.models.produto import Produto
from . import produtos_bp


@produtos_bp.route('', methods=['GET'])
def listar_produtos():
    produtos = Produto.query.all()
    return jsonify([p.to_dict() for p in produtos])


@produtos_bp.route('', methods=['POST'])
def criar_produto():
    data = request.json

    produto = Produto(
        titulo=data['titulo'],
        tipo=data['tipo'],
        status=data['status'],
        estoque=data['estoque'],
        preco=data['preco'],
        imagem_url=data.get('imagem_url')
    )

    db.session.add(produto)
    db.session.commit()

    return jsonify({"message": "Produto cadastrado com sucesso"}), 201
