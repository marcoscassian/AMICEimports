import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsForm.css";

function ProductsForm() {
  const [dados, setDados] = useState({
    titulo: "",
    tipo: "",
    status: "",
    estoque: "",
    preco: "",
    imagem_url: ""
  });

  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  }

  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);
    try {
      const res = await fetch('http://localhost:5000/api/upload-image', {
        method: 'POST',
        body: formData
      });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      setDados(prev => ({ ...prev, imagem_url: data.url }));
    } catch (err) {
      console.error('Erro ao enviar imagem:', err);
      alert('Erro ao enviar imagem');
    } finally {
      setUploading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/api/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Produto cadastrado:", data);
        alert("Produto cadastrado com sucesso!");
      })
      .catch(err => {
        console.error("Erro:", err);
      });
  }

  function handleCancel() {
    navigate('/products');
  }

  return (
    <div className="card">
      <div className="title">
        <h1>Cadastro de Produto</h1>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <input
            name="titulo"
            onChange={handleChange}
            placeholder="Título"
          />

          <select name="tipo" onChange={handleChange} defaultValue="">
            <option value="" disabled>Selecione o tipo</option>
            <option value="smartphones_importados">Smartphones</option>
            <option value="acessorios_tecnologicos">Acessórios Tecnológicos</option>
            <option value="gadgets_importados">Gadgets</option>
            <option value="perifericos_gamer">Periféricos</option>
            <option value="eletronicos_premium">Eletrônicos Premium</option>
          </select>

          <select name="status" onChange={handleChange} defaultValue="">
            <option value="" disabled>Selecione o status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>

          <input
            name="estoque"
            type="number"
            onChange={handleChange}
            placeholder="Estoque"
          />

          <input
            name="preco"
            type="number"
            step="0.1"
            onChange={handleChange}
            placeholder="Preço"
          />

          <div className="image-upload">
            <label htmlFor="upload-image" className="upload-btn">
              Selecionar imagem
            </label>

            <input
              type="file"
              id="upload-image"
              name="imagem"
              accept="image/*"
              onChange={handleFileChange}
            />

            {uploading && <p>Enviando imagem...</p>}

            {dados.imagem_url && (
              <div className="image-preview">
                <img src={dados.imagem_url} alt="Preview" />
              </div>
            )}
          </div>


          <hr />

          <div className="buttons">
            <button type="submit" className="btn-salvar">
              Salvar
            </button>

            <button type="button" className="btn-cancelar" onClick={handleCancel}>
              Cancelar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ProductsForm;
