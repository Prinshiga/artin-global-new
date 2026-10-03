import Image from "next/image";
import Container from "@/components/site/Container";
import LearningAlive from "./LearningAlive";
import Reveal from "./Reveal";
import styles from "./SoftwarePage.module.css";

export default function SelveOverview() {
  return (
    <section className={styles.selveSection} aria-labelledby="selve-heading">
      <Container className={styles.selveLayout}>
        <div className={styles.selveIntro}>
          <Reveal className={styles.selveIdentity}>
            <p className="eyebrow">Meet SELVE</p>
            <Image
              className={styles.selveLogo}
              src="/images/software/selve-logo.png"
              alt="Talk With SELVE"
              width={1318}
              height={1193}
              sizes="(max-width: 680px) 88px, 144px"
            />
          </Reveal>
          <Reveal className={styles.sectionCopy} delay={0.06}>
            <h2 id="selve-heading" className={styles.sectionHeading}>
              Your AI-Powered Spoken English Buddy.
            </h2>
            <p className={styles.sectionDescription}>
              Powered by AI, SELVE helps you master the art of communication through realistic
              conversations and personalized feedback.
            </p>
          </Reveal>
        </div>
        <LearningAlive />
      </Container>
    </section>
  );
}
