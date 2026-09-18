import { Link } from "react-router-dom";

import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__main}>
        <div className={styles.footer__brand}>
          <Link to="/" className={styles.footer__logo}>
            Veyro
          </Link>

          <p className={styles.footer__tagline}>Technology, refined.</p>

          <p className={styles.footer__description}>
            Premium technology for work, play, and everything between.
          </p>

          <div className={styles.footer__socials}>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Products */}
        <div className={styles.footer__column}>
          <h2>Products</h2>

          <ul>
            <li>
              <Link to="/products?category=laptops">Laptops</Link>
            </li>

            <li>
              <Link to="/products?category=monitors">Monitors</Link>
            </li>

            <li>
              <Link to="/products?category=pcs">PCs</Link>
            </li>

            <li>
              <Link to="/products?category=headphones">Headphones</Link>
            </li>

            <li>
              <Link to="/products?category=keyboards">Keyboards</Link>
            </li>

            <li>
              <Link to="/products?category=mice">Mice</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className={styles.footer__column}>
          <h2>Company</h2>

          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className={styles.footer__column}>
          <h2>Support</h2>

          <ul>
            <li>
              <a href="#">Contact</a>
            </li>

            <li>
              <a href="#">FAQ</a>
            </li>

            <li>
              <a href="#">Shipping</a>
            </li>

            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <span>© 2026 Veyro. All rights reserved.</span>

        <div className={styles.footer__legal}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

        <a href="#" className={styles.footer__top} aria-label="Back to top">
          Back to top
          <ArrowUpRight />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
