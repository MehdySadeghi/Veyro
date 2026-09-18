import { useMemo, useState } from "react";
import { products } from "../data/Producs";
import { useSearchParams } from "react-router-dom";

import styles from "./Products.module.css";
import ProductCard from "../components/Global/ProductCard/ProductCard";
import Nav from "../components/Global/Navbar/Nav";
import Footer from "../components/Global/Footer/Footer";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("featured");

  const category = searchParams.get("category") || "all";

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      result = result.filter((product) =>
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(query),
      );
    }

    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        break;
    }

    return result;
  }, [category, searchQuery, sort]);

  return (
    <main className={styles.productsPage}>
      <Nav />
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>COLLECTION</span>

          <h1>Products</h1>

          <p>
            Explore technology designed for work, play, and everything between.
          </p>
        </div>
      </section>

      <section className={styles.catalogSection}>
        <div className={styles.container}>
          <div className={styles.toolbar}>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className={styles.searchInput}
            />

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className={styles.sortSelect}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <div className={styles.catalog}>
            <aside className={styles.categories}>
              <h2>Categories</h2>

              <button
                className={category === "all" ? styles.active : ""}
                onClick={() => setSearchParams({})}
              >
                All products
              </button>

              <button
                className={category === "laptops" ? styles.active : ""}
                onClick={() => setSearchParams({ category: "laptops" })}
              >
                Laptops
              </button>

              <button
                className={category === "monitors" ? styles.active : ""}
                onClick={() => setSearchParams({ category: "monitors" })}
              >
                Monitors
              </button>

              <button
                className={category === "pcs" ? styles.active : ""}
                onClick={() => setSearchParams({ category: "pcs" })}
              >
                PCs
              </button>

              <button
                className={category === "headphones" ? styles.active : ""}
                onClick={() => setSearchParams({ category: "headphones" })}
              >
                Headphones
              </button>

              <button
                className={category === "keyboards" ? styles.active : ""}
                onClick={() => setSearchParams({ category: "keyboards" })}
              >
                Keyboards
              </button>

              <button
                className={category === "mice" ? styles.active : ""}
                onClick={() => setSearchParams({ category: "mice" })}
              >
                Mice
              </button>
            </aside>

            <div className={styles.results}>
              <div className={styles.resultHeader}>
                <span>
                  {filteredProducts.length}
                  {filteredProducts.length === 1 ? " product" : " products"}
                </span>
              </div>

              {filteredProducts.length > 0 ? (
                <div className={styles.grid}>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className={styles.emptyState}>
                  <h2>No products found</h2>
                  <p>Try another search or choose a different category.</p>

                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSearchParams({});
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Products;
