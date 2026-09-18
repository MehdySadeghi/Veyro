import styles from "./People.module.css";
import PeopleImg from "../../../images/about/People.webp";

function People() {
  return (
    <section className={styles.story}>
      <div className={styles.story__image}>
        <img
          src={PeopleImg}
          alt="Person using a tablet in a bright modern interior"
        />
      </div>

      <div className={styles.story__content}>
        <span className={styles.story__eyebrow}>DESIGNED FOR PEOPLE</span>

        <h2>Technology should work for you.</h2>

        <p className={styles.story__description}>
          From the first interaction to everyday use, the experience matters.
          Veyro is designed around people first, making it easier to discover,
          compare, and choose technology that genuinely fits their needs.
        </p>

        <ul className={styles.story__list}>
          <li>Simple to discover</li>
          <li>Easy to compare</li>
          <li>Made for everyday life</li>
        </ul>
      </div>
    </section>
  );
}

export default People;
