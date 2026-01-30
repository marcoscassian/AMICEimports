import { useState } from "react";

function ProductsForm() {
  const [dados, setDados] = useState({
    titulo: "",
    tipo: "",
    status: "",
    estoque: "",
    preco: "",
    imagem_url: ""
  });

  function handleChange(e) {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
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

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" onChange={handleChange} placeholder="Título" />
      <input name="tipo" onChange={handleChange} placeholder="Tipo" />
      <input name="status" onChange={handleChange} placeholder="Status" />
      <input name="estoque" type="number" onChange={handleChange} />
      <input name="preco" type="number" step="0.01" onChange={handleChange} />
      <input name="imagem_url" onChange={handleChange} placeholder="URL da imagem" />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default ProductsForm;
