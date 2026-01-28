import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
        <div className="left">

            <div className="title">
                <h1>O Melhor da tecnologia em um só canto.</h1>
            </div>

            <div className="desc">
                <p>Explore uma seleção de produtos importados que trazem qualidade, inovação e estilo ao seu dia a dia.</p>
            </div>

            <div className="button">
                <button>Ver Produtos</button>
            </div>

        </div>
        <div className="right">
            <div className="image">
                <img src="" alt="Iphone" />
            </div>
        </div>
    </div>
  );
}

export default Hero;
