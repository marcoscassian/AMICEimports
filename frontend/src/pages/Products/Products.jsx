import "./Products.css";
import Hero from "../../components/Hero/Hero";

function Products() {
  return (
    <div className="products">
      <Hero 
      title="Cadastre produtos de forma simples"
      subtitle="Gerencie descrições, categorias, preços e estoque com mais organização, agilidade e controle."
      buttonLink="/productsform"
      buttonText="Cadastrar Produto"
      image="/images/hero/hero-products.png"/>
    </div>
  );
}

export default Products;
