from flask import request, jsonify
from backend.extensions import db
from backend.models.produto import Produto
from . import produtos_bp

@produtos_bp.route('', methods=['GET'])
def listar_produtos():
    produtos = Produto.query.all()
    return jsonify([p.to_dict() for p in produtos])

@produtos_bp.route('/<int:id>', methods=['GET'])
def obter_produto(id):
    produto = Produto.query.get_or_404(id)
    return jsonify(produto.to_dict())

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

@produtos_bp.route('/<int:id>', methods=['PUT'])
def atualizar_produto(id):
    produto = Produto.query.get_or_404(id)
    data = request.json

    produto.titulo = data.get('titulo', produto.titulo)
    produto.tipo = data.get('tipo', produto.tipo)
    produto.status = data.get('status', produto.status)
    produto.estoque = data.get('estoque', produto.estoque)
    produto.preco = data.get('preco', produto.preco)
    produto.imagem_url = data.get('imagem_url', produto.imagem_url)

    db.session.commit()
    return jsonify({"message": "Produto atualizado com sucesso"})

@produtos_bp.route('/<int:id>', methods=['DELETE'])
def deletar_produto(id):
    produto = Produto.query.get_or_404(id)
    db.session.delete(produto)
    db.session.commit()
    return jsonify({"message": "Produto deletado com sucesso"})

@produtos_bp.route('/<int:id>/utilizar', methods=['PATCH'])
def utilizar_produto(id):
    produto = Produto.query.get_or_404(id)
    if produto.estoque > 0:
        produto.estoque -= 1
        # Atualiza status automaticamente se acabar
        if produto.estoque == 0:
            produto.status = "Esgotado"
        db.session.commit()
        return jsonify({"message": "Produto utilizado", "novo_estoque": produto.estoque})
    else:
        return jsonify({"error": "Produto esgotado"}), 400