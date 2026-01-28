import "./Header.css";

function Header() {
  return (
    <div className="header">

        <div className="left">
            <div className="micea"> MICEA </div>
            <div className="imports"> imports </div>
        </div>

        <div className="center">
            <a href="/">Início</a>
            <a href="">Sobre</a>
            <a href="/products">Produtos</a>
        </div>

        <div className="right">
            <a href="/productsform">Cadastrar Produto</a>
        </div>
    </div>
  );
}

export default Header;
