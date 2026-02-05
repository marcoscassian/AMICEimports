import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import "./Products.css";

function Products() {
  const [produtos, setProdutos] = useState([]);
  
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [filtroStatus, setFiltroStatus] = useState(""); // Renomeado para não conflitar com propriedades
  const [ordem, setOrdem] = useState("");

  const navigate = useNavigate();

  const carregarProdutos = () => {
    fetch("http://localhost:5000/api/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const handleEdit = (id) => navigate(`/productsform/${id}`);

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja apagar?")) {
      fetch(`http://localhost:5000/api/produtos/${id}`, { method: "DELETE" })
        .then((res) => { if (res.ok) carregarProdutos(); })
        .catch((err) => console.error(err));
    }
  };

  const handleUse = (id) => {
    fetch(`http://localhost:5000/api/produtos/${id}/utilizar`, { method: "PATCH" })
      .then((res) => { if (res.ok) carregarProdutos(); })
      .catch((err) => console.error(err));
  };

  const produtosFiltrados = produtos.filter((produto) => {
    const matchBusca = produto.titulo.toLowerCase().includes(busca.toLowerCase());

    const matchCategoria = categoria ? produto.tipo === categoria : true;

    let matchStatus = true;
    if (filtroStatus === "Esgotado") {
        matchStatus = produto.estoque <= 0;
    } else if (filtroStatus) {
        matchStatus = produto.status === filtroStatus;
    }

    return matchBusca && matchCategoria && matchStatus;
  }).sort((a, b) => {
    // 4. Ordenação
    if (ordem === "menor_preco") return a.preco - b.preco;
    if (ordem === "maior_preco") return b.preco - a.preco;
    if (ordem === "a_z") return a.titulo.localeCompare(b.titulo);
    if (ordem === "z_a") return b.titulo.localeCompare(a.titulo);
    return 0;
  });

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
          
          {/* Input de Busca */}
          <div className="search-input-container">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Busque por produto..." 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          
          {/* Select de Categoria (Valores iguais ao ProductsForm) */}
          <select 
            className="filter-select"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Todas Categorias</option>
            <option value="smartphones_importados">Smartphones</option>
            <option value="acessorios_tecnologicos">Acessórios</option>
            <option value="gadgets_importados">Gadgets</option>
            <option value="perifericos_gamer">Periféricos</option>
            <option value="eletronicos_premium">Premium</option>
          </select>
          
          {/* Select de Status */}
          <select 
            className="filter-select"
            value={filtroStatus}
            onChange={(e) => setFiltroStatus(e.target.value)}
          >
            <option value="">Todos Status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="Esgotado">Esgotado (Estoque 0)</option>
          </select>
          
          {/* Select de Ordenação */}
          <select 
            className="filter-select"
            value={ordem}
            onChange={(e) => setOrdem(e.target.value)}
          >
            <option value="">Ordenar Por</option>
            <option value="menor_preco">Menor Preço</option>
            <option value="maior_preco">Maior Preço</option>
            <option value="a_z">Nome (A-Z)</option>
            <option value="z_a">Nome (Z-A)</option>
          </select>
        </div>

        <div className="products-grid">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((produto) => {
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
            <p className="no-products">
              {produtos.length === 0 
                ? "Nenhum produto cadastrado ainda." 
                : "Nenhum produto encontrado com esses filtros."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;