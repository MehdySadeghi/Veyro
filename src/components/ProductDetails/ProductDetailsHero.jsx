import { MoveRight, ShoppingCart, Star } from "lucide-react";
import { useDispatch } from "react-redux";

import { addToCart } from "../../features/cartSlice";
import styles from "./ProductDetailsHero.module.css";

function ProductDetailsHero({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(product.id));
  }

  return (
    <main className={styles.productsPage}>
      <section className={styles.headerSection}>
        <div className={styles.Headercontainer}>
          <h1>{product.name} Details</h1>
          <p>Everything you need to know.</p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.price__section}>
          <select
            className={styles.warranty__container}
            name="warranty"
            aria-label="Select warranty period"
            defaultValue="18"
          >
            <option value="18" className={styles.warranty}>
              18 months warranty
            </option>

            <option value="12" className={styles.warranty}>
              12 months warranty
            </option>
          </select>

          <div className={styles.price__container}>
            <p className={styles.price__text}>Price:</p>

            <span className={styles.price__number}>
              ${Number(product.price).toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            className={styles.cta__btn}
            onClick={handleAddToCart}
          >
            Add to cart
            <span>
              <ShoppingCart aria-hidden="true" />
            </span>
          </button>
        </div>

        <div className={styles.rating__section}>
          <h2 className={styles.rating__header}>{product.name}</h2>

          <span className={styles.rating__stars} aria-label="5 out of 5 stars">
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
          </span>

          <div className={styles.review}>
            <button type="button" className={styles.see_more__btn}>
              See more
              <MoveRight aria-hidden="true" />
            </button>

            <p className={styles.rating__avg}>2 ratings out of 5</p>
          </div>

          <div className={styles.return__container}>
            <h2 className={styles.return__header}>The return policy</h2>

            <p className={styles.return__info}>
              Products can only be returned according to our return policy and
              if the original packaging has not been opened.
            </p>
          </div>
        </div>
        <div className={styles.image__section}>
          <img
            src={product.image}
            alt={`${product.name} front view`}
            className={styles.image__primary}
          />

          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className={styles.image__side}
          />
        </div>
      </section>
    </main>
  );
}

export default ProductDetailsHero;
