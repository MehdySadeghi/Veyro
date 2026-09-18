import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product.id));
  }

  return (
    <article className={styles.card}>
      <Link to={`/products/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />

          <img
            src={product.hoverImage}
            alt=""
            aria-hidden="true"
            className={`${styles.image} ${styles.imageHover}`}
          />
        </div>
      </Link>

      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>

        <p className={styles.description}>{product.description}</p>
      </div>

      <div className={styles.footer}>
        <span className={styles.price}>
          ${product.price.toFixed(2).toLocaleString()}
        </span>

        <button
          type="button"
          className={styles.cartButton}
          aria-label={`Add ${product.name} to cart`}
          onClick={handleAddToCart}
        >
          <ShoppingBag size={25} strokeWidth={1.8} />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
