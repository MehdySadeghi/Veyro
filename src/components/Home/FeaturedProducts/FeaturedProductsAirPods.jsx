import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

import AirPodsMax from "../../../images/featured/airPodsMax.jpg";
import styles from "./FeaturedProductsAirPods.module.css";

function FeaturedProductsAirPods() {
  return (
    <section className={styles.featured}>
      <div className={styles.featured__image}>
        <img src={AirPodsMax} alt="A woman using AirPods Max 2" />
      </div>

      <div className={styles.featured__content}>
        <span className={styles.featured__eyebrow}>AIRPODS MAX 2</span>

        <h2>Sound, refined.</h2>

        <p className={styles.featured__description}>
          Immersive audio, premium materials, and a design made for everyday
          listening.
        </p>

        <ul className={styles.featured__list}>
          <li>Immersive high-fidelity audio</li>
          <li>Premium over-ear comfort</li>
          <li>Active noise cancellation</li>
          <li>Designed for everyday listening</li>
        </ul>

        <Link to="/products/2">
          <button className={styles.featured__button}>
            Explore AirPods Max
            <MoveRight />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProductsAirPods;
