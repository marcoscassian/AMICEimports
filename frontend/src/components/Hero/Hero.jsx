import "./Hero.css";
import { Link } from "react-router-dom"; 

function Hero({ title, subtitle, image, buttonText, titleimg, buttonLink }) { 
  return (
    <section className="hero">
        <div className="left">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {buttonText && buttonLink ? (
                <Link to={buttonLink}>
                    <button>{buttonText}</button>
                </Link>
            ) : (
                buttonText && <button>{buttonText}</button>
            )}
        </div>

        <div className="right">
            <img src={image} alt={titleimg} />
        </div>
     </section>
  );
}

export default Hero;