import styles from "./LifestyleSection.module.css";
import side1 from "../../../images/Lifestyle/side-1.webp";
import side2 from "../../../images/Lifestyle/side-2.webp";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function LifestyleSection() {
  return (
    <section className={styles.lifestyle}>
      <div className={styles.side}>
        <img
          className={`${styles.side__image} ${styles.side__image_1}`}
          src={side1}
          alt="An ASUS Vivobook S16 laptop on a chair"
        />

        <div className={styles.side__content}>
          <h2>Built for your everyday.</h2>

          <div className={styles.side__bottom}>
            <ul className={styles.side__list}>
              <li>Comfortable performance</li>
              <li>Ready for work and study</li>
              <li>Designed for everyday mobility</li>
            </ul>
            <Link to="/products/11">
              <button type="button" className={styles.side__button}>
                Explore more
                <MoveRight
                  className={styles.side__button_icon}
                  aria-hidden="true"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.side}>
        <img
          className={`${styles.side__image} ${styles.side__image_2}`}
          src={side2}
          alt="An open ASUS Vivobook 15"
        />

        <div className={styles.side__content}>
          <h2>Power wherever you go.</h2>

          <div className={styles.side__bottom}>
            <ul className={styles.side__list}>
              <li>Portable performance</li>
              <li>Sharp and immersive display</li>
              <li>Made for work and entertainment</li>
            </ul>
            <Link to="/products/1">
              <button type="button" className={styles.side__button}>
                Explore more
                <MoveRight
                  className={styles.side__button_icon}
                  aria-hidden="true"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LifestyleSection;
