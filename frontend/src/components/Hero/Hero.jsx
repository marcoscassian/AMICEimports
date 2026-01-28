import "./Hero.css";

function Hero({ title, subtitle, image, buttonText, titleimg }) {
  return (
    <section className="hero">
        <div className="left">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {buttonText && <button>{buttonText}</button>}
        </div>

        <div className="right">

            <img src={image} alt={titleimg} />
        </div>
     </section>
  );
}

export default Hero;
