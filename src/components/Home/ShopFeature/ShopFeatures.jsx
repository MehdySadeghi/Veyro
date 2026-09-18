import { Headset, RotateCcw, ShieldCheck, Truck } from "lucide-react";

import styles from "./ShopFeatures.module.css";

function ShopFeatures() {
  return (
    <section className={styles.shopFeatures}>
      <div className={styles.feature}>
        <div className={styles.feature__header}>
          <Truck />
          <h2>Fast & Secure Shipping</h2>
        </div>

        <p>
          Reliable delivery with careful handling from our store to your door.
        </p>
      </div>

      <div className={styles.feature}>
        <div className={styles.feature__header}>
          <RotateCcw />
          <h2>Easy Returns</h2>
        </div>

        <p>
          A straightforward return process when something isn't quite right.
        </p>
      </div>

      <div className={styles.feature}>
        <div className={styles.feature__header}>
          <ShieldCheck />
          <h2>Secure Payments</h2>
        </div>

        <p>
          Your payment information is protected with secure checkout technology.
        </p>
      </div>

      <div className={styles.feature}>
        <div className={styles.feature__header}>
          <Headset />
          <h2>Expert Support</h2>
        </div>

        <p>Get helpful guidance from people who understand technology.</p>
      </div>
    </section>
  );
}

export default ShopFeatures;
