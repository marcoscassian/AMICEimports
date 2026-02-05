import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import "../../components/ProductCard/ProductCard.css";
import "./Home.css";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/produtos/home")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  const handleEdit = (id) => {
    navigate(`/productsform/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja apagar este produto?")) {
      fetch(`http://localhost:5000/api/produtos/${id}`, {
        method: "DELETE",
      })
      .then((res) => {
        if (res.ok) {
           setProdutos(prev => prev.filter(p => (p.id || p._id) !== id));
        } else {
          alert("Erro ao deletar produto");
        }
      })
      .catch((err) => console.error("Erro:", err));
    }
  };

  const handleUse = (id) => {
    fetch(`http://localhost:5000/api/produtos/${id}/utilizar`, {
        method: "PATCH",
    })
    .then(async (res) => {
        if (res.ok) {
            const data = await res.json();
            // Atualiza estoque localmente
            setProdutos(prev => prev.map(p => {
                if ((p.id || p._id) === id) {
                    return { 
                        ...p, 
                        estoque: data.novo_estoque,
                        status: data.novo_estoque === 0 ? "Esgotado" : p.status 
                    };
                }
                return p;
            }));
        } else {
            const error = await res.json();
            alert(error.error || "Erro ao utilizar produto");
        }
    })
    .catch((err) => console.error("Erro:", err));
  };

  const getStatusInfo = (estoque) => {
    const qtd = parseInt(estoque);
    if (qtd === 0) return { label: "Esgotado", class: "status-esgotado" };
    if (qtd === 1) return { label: "Última peça", class: "status-ultima" };
    return { label: "Em estoque", class: "status-estoque" };
  };

  

  return (
    <div className="home-page">
      <Hero 
        title="O melhor da Tecnologia em um só canto."
        subtitle="Explore uma seleção de produtos importados que trazem qualidade, inovação e estilo ao seu dia a dia"
        buttonText="Explorar Produtos"
        buttonLink="/products"
        image="/images/hero/hero-home.png"
      />

      <div className="catalog-container">
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Destaques</h2>
        
        <div className="products-grid">
          {produtos.length > 0 ? (
            produtos.map((produto) => {
              const statusInfo = getStatusInfo(produto.estoque);
              const id = produto.id || produto._id;

              return (
                <div className="product-card" key={id}>
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

                    <div className="stock-display">
                        <small>Estoque: {produto.estoque}</small>
                    </div>

                    <button 
                        className="btn-utilizar" 
                        onClick={() => handleUse(id)}
                        disabled={produto.estoque <= 0}
                    >
                        Utilizar
                    </button>

                    <div className="card-actions">
                      <button className="btn-outline" onClick={() => handleEdit(id)}>
                        Editar
                      </button>
                      <button className="btn-outline" onClick={() => handleDelete(id)}>
                        Apagar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="no-products">Nenhum produto cadastrado ainda...</p>
          )}
        </div>
      </div>

      {}
      <div className="benefits-section">
        <div className="benefit-card"><p>Até 24x<br />sem juros</p></div>
        <div className="benefit-card"><p>Rewards</p></div>
        <div className="benefit-card"><p>Frete grátis</p></div>
        <div className="benefit-card"><p>Produtos<br />exclusivos</p></div>
      </div>

      {}
      <footer className="footer">
        <p>
          Copyright© 1995-2026 MICEAimports. Todos os direitos reservados...<br />
          MICEAimports Eletrônica da Amazônia LTDA., com sede em Av. dos Oitis, nº 1.460, Distrito Industrial, Manaus/AM, 69.007-002, inscrita no CNPJ/MF sob o nº. 00.280.273/0001-37.
        </p>
        <p>
          Esse website é melhor visualizado nas versões Microsoft Internet Explorer 11 ou superior e/ou nas últimas versões dos navegadores Google Chrome e Mozilla Firefox.
        </p>
        <p>
          Formas de pagamento aceitas: Pix, Cartão de crédito (Visa, MasterCard, Elo, American Express, Diners Club, Hipercard, Elo) e Cartão Samsung Itaú.
        </p>
      </footer>
    </div>
  );
}

export default Home;