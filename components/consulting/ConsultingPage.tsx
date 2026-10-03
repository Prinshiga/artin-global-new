import Container from "@/components/site/Container";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/software/Reveal";
import ConsultingHeroVisual from "./ConsultingHeroVisual";
import ConsultingImpactVisual from "./ConsultingImpactVisual";
import ConsultingInsightVisual from "./ConsultingInsightVisual";
import ConsultingRoadmapVisual from "./ConsultingRoadmapVisual";
import ConsultingStrategyVisual from "./ConsultingStrategyVisual";
import styles from "./ConsultingPage.module.css";

const stages = [
  {
    number: "01",
    title: "Insight Before Action.",
    content:
      "Every transformation starts with clarity. We assess your current environment, systems, and workflows to map where you stand today and define the path toward your future goals.",
    Visual: ConsultingInsightVisual,
  },
  {
    number: "02",
    title: "Designing the Right Learning Strategy for Your Organization.",
    content:
      "We work with you to develop a comprehensive learning strategy that aligns with your business goals, fills capability gaps, and maximizes ROI. Every design is shaped by your learners’ needs and your organization’s unique realities — budget, time, and resources.",
    Visual: ConsultingStrategyVisual,
  },
  {
    number: "03",
    title: "Crafting a Tailor-Made Platform and Content Roadmap.",
    content:
      "With your learning strategy as the foundation, we craft a customized platform and content roadmap that fits your people, goals, and infrastructure. We consider every detail — user types, devices, connectivity, integrations with HRIS or BI tools, and content development pathways. Together, we define how AI can power smarter learning and bring your strategy to life.",
    Visual: ConsultingRoadmapVisual,
  },
  {
    number: "04",
    title: "Driving Adoption. Measuring Impact.",
    content: "We work with your teams to ensure successful adoption and long-term ROI.",
    Visual: ConsultingImpactVisual,
  },
];

export default function ConsultingPage() {
  return (
    <>
      <main>
        <section className={styles.hero} aria-labelledby="consulting-hero-heading">
          <Container className={styles.heroGrid}>
            <Reveal className={styles.heroCopy}>
              <p className={styles.eyebrow}>Artin Consulting</p>
              <h1 id="consulting-hero-heading" className={styles.heroHeading}>
                Strategy Meets <span>Innovation</span>
                <br />
                with Artin Consulting
              </h1>
              <p className={styles.heroDescription}>
                Artin Consulting helps organizations navigate the digital era with clarity,
                strategy, and purpose — shaping learning, technology, and human growth for a
                smarter future.
              </p>
            </Reveal>
            <Reveal className={styles.heroVisual} delay={0.08}>
              <ConsultingHeroVisual />
            </Reveal>
          </Container>
        </section>

        <section className={styles.journey} aria-label="Consulting journey">
          <Container>
            {stages.map(({ number, title, content, Visual }, index) => (
              <article className={styles.stage} key={number}>
                <Reveal className={styles.stageCopy} delay={index * 0.025}>
                  <p className={styles.stageLabel}>Stage {number}</p>
                  <h2 className={styles.stageHeading}>{title}</h2>
                  <p className={styles.stageDescription}>{content}</p>
                </Reveal>
                <Reveal className={styles.stageVisual} delay={0.08}>
                  <Visual />
                </Reveal>
              </article>
            ))}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
