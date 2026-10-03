import Container from "@/components/site/Container";
import PartnershipVisual from "./PartnershipVisual";
import Reveal from "./Reveal";
import styles from "./SoftwarePage.module.css";

export default function SelvernTrust() {
  return (
    <section className={styles.trustSection} aria-labelledby="selvern-heading">
      <Container className={styles.trustLayout}>
        <Reveal className={styles.trustCopy}>
          <p className="eyebrow">Partnership</p>
          <h2 id="selvern-heading" className={styles.trustHeading}>
            Selvern Trust
          </h2>
          <p className={styles.trustDescription}>
            Fully funded and initiated by Selvern Trust, SELVE reflects the Trust’s vision to make
            English fluency accessible to all. Artin manages the operations and software development
            of the SELVE app, collaborating with software partners and domain experts while
            providing implementation and support to ensure a seamless experience for every learner.
          </p>
        </Reveal>
        <Reveal className={styles.trustLogo} delay={0.08}>
          <PartnershipVisual />
        </Reveal>
      </Container>
    </section>
  );
}
