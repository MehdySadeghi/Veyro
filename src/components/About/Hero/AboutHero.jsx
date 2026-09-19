import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import styles from "./AboutHero.module.css";

import Hero from "../../../images/about/hero.webp";
import Nav from "../../Global/Navbar/Nav";

function AboutHero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <Nav />

      <div className={styles.hero__content}>
        <span className={styles.hero__eyebrow}>ABOUT VEYRO</span>

        <h1>
          Technology,
          <span> refined.</span>
        </h1>

        <p className={styles.hero__description}>
          Veyro is built around a simple idea: technology should feel as good to
          use as it is to look at.
        </p>

        <p className={styles.hero__supporting}>
          Carefully selected products, thoughtful design, and a better everyday
          experience.
        </p>

        <Link to="/products" className={styles.hero__button}>
          Explore the collection
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>

      <div className={styles.hero__scroll}>
        <span>Scroll to explore</span>
        <span className={styles.hero__scrollLine} />
      </div>
    </section>
  );
}

export default AboutHero;
