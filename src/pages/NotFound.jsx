import { Link } from "react-router-dom";
import Nav from "../components/Global/Navbar/Nav";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <main>
      <Nav variant="light" />
      <section className={styles.container}>
        <h1 className={styles.not_found__header}>This page doesn't exist</h1>
        <p className={styles.not_found__info}>Do you want to go back?</p>
        <Link to="/" className={styles.home__btn}>
          Home
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
