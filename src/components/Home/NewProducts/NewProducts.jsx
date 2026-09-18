import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../../data/Producs";

import styles from "./NewProducts.module.css";
import ProductCard from "../../Global/ProductCard/ProductCard";

function NewProducts() {
  const newProducts = products.filter((product) => product.new);

  return (
    <section className={styles.popular}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>New products</h2>
          <Link to="/products" className={styles.viewAll}>
            View all
            <span>
              <MoveRight />
            </span>
          </Link>
        </div>

        <div className={styles.products}>
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewProducts;
