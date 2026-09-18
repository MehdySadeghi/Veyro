import styles from "./WorkSpace.module.css";
import WorkSpaceImg from "../../../images/about/WorkSpace.webp";

function WorkSpace() {
  return (
    <section className={styles.story}>
      <div className={styles.story__image}>
        <img
          src={WorkSpaceImg}
          alt="Modern technology workspace with multiple computer displays"
        />
      </div>

      <div className={styles.story__content}>
        <span className={styles.story__eyebrow}>BUILT AROUND TECHNOLOGY</span>

        <h2>Made for the way technology moves.</h2>

        <p className={styles.story__description}>
          Technology is constantly evolving, and so are the ways we work,
          create, communicate, and entertain ourselves. Veyro brings together
          modern devices and essential tools designed to keep up with that pace
          without adding unnecessary complexity.
        </p>

        <ul className={styles.story__list}>
          <li>Thoughtful selection</li>
          <li>Modern technology</li>
          <li>Everyday performance</li>
        </ul>
      </div>
    </section>
  );
}

export default WorkSpace;
