import "./Home.css";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <div className="home">
      <Hero 
      title="O melhor da Tecnologia em um só canto."
      subtitle="Explore uma seleção de produtos importados que trazem qualidade, inovação e estilo ao seu dia a dia"
      buttonText="Explorar produtos"
      buttonLink="/products"
      image="/images/hero/hero-home.png"/>

      <div className="benefits-section">
        <div className="benefit-card">
          <p>Até 24x<br />sem juros</p>
        </div>
  
        <div className="benefit-card">
          <p>Rewards</p>
        </div>
  
        <div className="benefit-card">
          <p>Frete grátis</p>
        </div>
  
        <div className="benefit-card">
          <p>Produtos<br />exclusivos</p>
        </div>
      </div>

      <footer className="footer">
        <p>
          Copyright© 1995-2026 MICEAimports. Todos os direitos reservados.<br />
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
