import Container from "@/components/site/Container";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} aria-labelledby="about-heading">
      <Container className={styles.layout}>
        <div className={styles.copy}>
          <p className="eyebrow">About Artin</p>
          <h2 id="about-heading" className={styles.heading}>
            Technology with a human purpose.
          </h2>
          <p className={styles.description}>
            Artin provides software, consulting, and content. Across these areas, the focus is
            technology that empowers people and organizations.
          </p>
        </div>

        <ul className={styles.areas} aria-label="Artin’s areas of work">
          <li>Software</li>
          <li>Consulting</li>
          <li>Content</li>
        </ul>
      </Container>
    </section>
  );
}
