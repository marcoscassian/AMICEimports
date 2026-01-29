fetch("http://localhost:5000/api/produtos", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(dados)
})
