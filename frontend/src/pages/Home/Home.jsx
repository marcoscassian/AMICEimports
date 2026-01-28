import "./Home.css";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <div className="home">
      <Hero 
      title="O melhor da Tecnologia em um só canto."
      subtitle="Explore uma seleção de produtos importados que trazem qualidade, inovação e estilo ao seu dia a dia"
      buttonText="Ver projetos"
      image="/images/hero/hero-home.png"/>
    </div>
  );
}

export default Home;
