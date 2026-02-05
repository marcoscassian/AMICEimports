import "./Header.css";
import { Link } from "react-router-dom"; 

function Header() {
  return (
    <div className="header">

        <div className="left">
            <div className="micea"> MICEA </div>
            <div className="imports"> imports </div>
        </div>

        <div className="center">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/products">Produtos</Link>
        </div>

        <div className="right">
            <Link to="/productsform">Cadastrar Produto</Link>
        </div>
    </div>
  );
}

export default Header;