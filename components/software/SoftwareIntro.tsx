import Container from "@/components/site/Container";
import Reveal from "./Reveal";
import styles from "./SoftwarePage.module.css";

export default function SoftwareIntro() {
  return (
    <section className={styles.softwareIntro} aria-labelledby="software-intro-heading">
      <Container className={styles.introContainer}>
        <Reveal className={styles.introHeadingWrap}>
          <p className="eyebrow">Artin Software</p>
          <h2 id="software-intro-heading" className={styles.introHeading}>
            The future of learning.
          </h2>
        </Reveal>
        <Reveal className={styles.introBody} delay={0.06}>
          <p className={styles.introDescription}>
            We bring you the future of learning – state-of-the-art, AI-powered software designed
            to unlock the full potential of your people and your organization.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
