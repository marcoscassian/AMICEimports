import React from 'react';
import './ProductCard.css';

function ProductCard({ produto }) {
  const getStatusClass = (status) => {
    if (status === 'Esgotado') return 'badge-red';
    if (status === 'Última peça') return 'badge-orange';
    return 'badge-gray';
  };

  return (
    <div className="product-card">
      <div className="card-image-container">
        {}
        <img 
          src={produto.imagem_url || "https://via.placeholder.com/150"} 
          alt={produto.titulo} 
        />
      </div>

      <div className="card-info">
        <h3>{produto.titulo}</h3>
        
        <div className="price-row">
          <span className="price">R$ {produto.preco.toFixed(2).replace('.', ',')}</span>
          <span className={`status-badge ${getStatusClass(produto.status)}`}>
            {produto.status || "Em estoque"}
          </span>
        </div>

        <button className="btn-primary">Utilizar</button>

        <div className="card-actions">
          <button className="btn-outline">Editar</button>
          <button className="btn-outline">Apagar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;