import styles from "./Product.module.css";
import ProductImg from "../../../images/about/product.webp";

function Product() {
  return (
    <section className={styles.story}>
      <div className={styles.story__content}>
        <span className={styles.story__eyebrow}>DETAILS MATTER</span>

        <h2>
          Less noise.
          <br /> More refinement.
        </h2>

        <p className={styles.story__description}>
          Good technology does more than perform. It fits naturally into your
          space, your routine, and the way you work. We value thoughtful design,
          dependable quality, and the small details that make technology better
          to live with every day.
        </p>

        <ul className={styles.story__list}>
          <li>Thoughtful design</li>
          <li>Dependable quality</li>
          <li>Purposeful details</li>
        </ul>
      </div>

      <div className={styles.story__image}>
        <img src={ProductImg} alt="Premium headphones on a dark background" />
      </div>
    </section>
  );
}

export default Product;
