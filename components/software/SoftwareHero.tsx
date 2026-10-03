import Container from "@/components/site/Container";
import MediaSlot from "./MediaSlot";
import Reveal from "./Reveal";
import styles from "./SoftwarePage.module.css";

export default function SoftwareHero() {
  return (
    <section className={styles.softwareHero} aria-labelledby="software-hero-heading">
      <Container className={styles.heroGrid}>
        <Reveal className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>Artin Software</p>
          <h1 id="software-hero-heading" className={styles.heroHeading}>
            <span className={styles.heroLead}>Artin Software,</span>
            <span className={styles.heroAccent}>Future-Ready.</span>
            <span>AI-Powered.</span>
            <span>World-Class.</span>
          </h1>
        </Reveal>
        <Reveal className={styles.heroMedia} delay={0.08}>
          <MediaSlot
            variant="landscape"
            label="Software hero image"
            alt="A learner using software in a modern workspace"
            preload
            src="/images/software/software-hero-ai.png"
          />
        </Reveal>
      </Container>
    </section>
  );
}
