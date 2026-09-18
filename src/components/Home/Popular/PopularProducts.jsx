import { Link } from "react-router-dom";

import styles from "./PopularProducts.module.css";
import { products } from "../../../data/ProductsData";
import ProductCard from "../../Global/ProductCard/ProductCard";
import { MoveRight } from "lucide-react";

function PopularProducts() {
  const popularProducts = products.filter((product) => product.popular);

  return (
    <section className={styles.popular}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Popular products</h2>
          <Link to="/products" className={styles.viewAll}>
            View all
            <span>
              <MoveRight />
            </span>
          </Link>
        </div>

        <div className={styles.products}>
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
