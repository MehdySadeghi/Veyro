import { MoveRight } from "lucide-react";
import Imac from "../../../images/featured/Imac.jpg";
import styles from "./FeaturedProductsImac.module.css";
import { Link } from "react-router-dom";

function FeaturedProductsImac() {
  return (
    <section className={styles.featured}>
      <div className={styles.featured__content}>
        <span className={styles.featured__eyebrow}>iMAC</span>

        <h2>A workspace, reimagined.</h2>

        <p className={styles.featured__description}>
          A beautifully integrated desktop experience designed to keep your
          setup simple, focused, and refined.
        </p>

        <ul className={styles.featured__list}>
          <li>All-in-one desktop design</li>
          <li>Immersive high-resolution display</li>
          <li>Powerful everyday performance</li>
          <li>Designed for a clean workspace</li>
        </ul>
        <Link to="/products/8">
          <button className={styles.featured__button}>
            Explore iMac
            <MoveRight />
          </button>
        </Link>
      </div>

      <div className={styles.featured__image}>
        <img src={Imac} alt="a Mother using iMac while her son watching her" />
      </div>
    </section>
  );
}

export default FeaturedProductsImac;
