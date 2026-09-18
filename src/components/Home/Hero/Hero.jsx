import styles from "./Hero.module.css";
import heroBg from "../../../images/hero-bg.jpg";
import Nav from "../../Global/Navbar/Nav";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className={styles.hero__image}
      />

      <Nav variant="dark" />

      <div className={styles.hero__content}>
        <h1>Technology, refined.</h1>

        <p className={styles.hero__description}>
          Premium technology for work, play, and everything between.
        </p>
        <Link to="/products">
          <button type="button" className={styles.hero__button}>
            Explore products
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
