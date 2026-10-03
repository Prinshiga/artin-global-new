import Container from "@/components/site/Container";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/software/Reveal";
import {
  ContentCollaborationVisual,
  ContentHeroVisual,
  ContentJourneyVisual,
  ContentOptionsVisual,
} from "./ContentVisuals";
import styles from "./ContentPage.module.css";

export default function ContentPage() {
  return (
    <>
      <main>
        <section className={styles.hero} aria-labelledby="content-hero-heading">
          <Container className={`${styles.editorialGrid} ${styles.heroGrid}`}>
            <Reveal className={styles.copy}>
              <h1 id="content-hero-heading" className={styles.heroHeading}>
                Artin Content.<br />
                <span>Creativity Meets</span><br />
                Learning Science.
              </h1>
              <p className={styles.bodyCopy}>
                Our content is immersive, intelligent, and emotionally resonant. By combining
                powerful visuals, interactive design, and proven learning science, we build
                experiences that empower learners and transform organizations.
              </p>
            </Reveal>
            <Reveal className={styles.heroVisual} delay={0.08}>
              <ContentHeroVisual />
            </Reveal>
          </Container>
        </section>

        <div className={styles.sections}>
          <section className={styles.section} aria-labelledby="content-options-heading">
            <Container className={`${styles.editorialGrid} ${styles.reverseOnDesktop}`}>
              <Reveal className={styles.sectionVisual}>
                <ContentOptionsVisual />
              </Reveal>
              <Reveal className={styles.copy} delay={0.06}>
                <h2 id="content-options-heading" className={styles.sectionHeading}>
                  Your Content, Your Way — Choose What Works for You.
                </h2>
                <p className={styles.bodyCopy}>
                  We offer flexible content development strategies tailored to your organization’s
                  goals, learning needs, and resources. Whether it’s a fully customized end-to-end
                  solution or a collaborative approach, we ensure the process works for you — exactly
                  the way you want it.
                </p>
              </Reveal>
            </Container>
          </section>

          <section className={styles.section} aria-labelledby="content-journey-heading">
            <Container className={styles.editorialGrid}>
              <Reveal className={styles.copy}>
                <h2 id="content-journey-heading" className={styles.sectionHeading}>
                  Complete Content Solutions, Start to Finish.
                </h2>
                <p className={styles.bodyCopy}>
                  Tell us your learning challenge. We’ll translate it into a seamless content
                  experience — from initial strategy and creative design to final implementation
                  and learner engagement.
                </p>
              </Reveal>
              <Reveal className={styles.journeyVisual} delay={0.06}>
                <ContentJourneyVisual />
              </Reveal>
            </Container>
          </section>

          <section className={styles.section} aria-labelledby="content-collaboration-heading">
            <Container className={`${styles.editorialGrid} ${styles.reverseOnDesktop}`}>
              <Reveal className={styles.sectionVisual}>
                <ContentCollaborationVisual />
              </Reveal>
              <Reveal className={styles.copy} delay={0.06}>
                <h2 id="content-collaboration-heading" className={styles.sectionHeading}>
                  Collaborate to Build. Build to Sustain.
                </h2>
                <p className={styles.bodyCopy}>
                  Through our co-development model, your organization collaborates directly with
                  Artin’s experts — gaining both high-impact content and the knowledge to sustain
                  future learning initiatives on your own.
                </p>
              </Reveal>
            </Container>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
