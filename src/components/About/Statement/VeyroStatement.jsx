import styles from "./VeyroStatement.module.css";

function VeyroStatement() {
  return (
    <section className={styles.statement}>
      <div className={styles.statement__content}>
        <span className={styles.statement__eyebrow}>THE VEYRO APPROACH</span>

        <h2>
          Technology should feel
          <span> effortless.</span>
        </h2>

        <p className={styles.statement__description}>
          Veyro is about making technology easier to discover, understand, and
          enjoy. We focus on products that combine thoughtful design, dependable
          performance, and the features that genuinely matter.
        </p>

        <p className={styles.statement__description}>
          No unnecessary complexity. No overwhelming choices. Just technology
          selected with purpose and presented with clarity.
        </p>

        <div className={styles.statement__divider} />

        <p className={styles.statement__closing}>
          <span>Veyro.</span> Technology, refined.
        </p>
      </div>
    </section>
  );
}

export default VeyroStatement;
