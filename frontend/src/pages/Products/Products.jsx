import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import "./Products.css";

function Products() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  const getStatusInfo = (estoque) => {
    const qtd = parseInt(estoque);
    if (qtd === 0) return { label: "Esgotado", class: "status-esgotado" };
    if (qtd === 1) return { label: "Última peça", class: "status-ultima" };
    return { label: "Em estoque", class: "status-estoque" };
  };

  return (
    <div className="products-page">
      <Hero 
        title="Cadastre produtos de forma simples"
        subtitle="Gerencie descrições, categorias, preços e estoque com mais organização."
        buttonLink="/productsform"
        buttonText="Cadastrar Produto"
        image="/images/hero/hero-products.png"
      />

      <div className="catalog-container">
        <div className="filter-bar">
          <div className="search-input-container">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Busque por produto..." />
          </div>
          
          <select className="filter-select">
            <option>Categoria</option>
          </select>
          
          <select className="filter-select">
            <option>Status</option>
          </select>
          
          <select className="filter-select">
            <option>Ordenar Por</option>
          </select>
        </div>

        <div className="products-grid">
          {produtos.length > 0 ? (
            produtos.map((produto) => {
              const statusInfo = getStatusInfo(produto.estoque);

              return (
                <div className="product-card" key={produto.id || produto._id}>
                  <div className="card-image">
                    {produto.imagem_url ? (
                      <img src={produto.imagem_url} alt={produto.titulo} />
                    ) : (
                      <div className="no-image">Sem Imagem</div>
                    )}
                  </div>

                  <div className="card-content">
                    <h3 className="card-title">{produto.titulo}</h3>
                    
                    <div className="card-price-row">
                      <span className="card-price">
                        R$ {parseFloat(produto.preco).toFixed(2).replace('.', ',')}
                      </span>
                      <span className={`card-badge ${statusInfo.class}`}>
                        {statusInfo.label}
                      </span>
                    </div>

                    <button className="btn-utilizar">Utilizar</button>

                    <div className="card-actions">
                      <button className="btn-outline">Editar</button>
                      <button className="btn-outline">Apagar</button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="no-products">Nenhum produto cadastrado ainda.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;