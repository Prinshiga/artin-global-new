import MediaSlot from "./MediaSlot";
import Reveal from "./Reveal";
import styles from "./SoftwarePage.module.css";

const learningStages = [
  {
    number: "01",
    title: "Presenter",
    src: "/images/software/presenter.jpeg",
    alt: "SELVE lesson presenter screen",
  },
  {
    number: "02",
    title: "Progress",
    src: "/images/software/Score.jpeg",
    alt: "SELVE learner profile and progress screen",
  },
  {
    number: "03",
    title: "Learning path",
    src: "/images/software/lesson.jpeg",
    alt: "SELVE learning path and lesson screen",
  },
];

export default function LearningAlive() {
  return (
    <div className={styles.learningExperience}>
      <Reveal className={styles.learningIntro}>
        <p className="eyebrow">Learning experience</p>
        <h3 id="learning-heading" className={styles.sectionHeading}>
          Learning That Feels Alive.
        </h3>
        <p className={styles.sectionDescription}>
          Each SELVE lesson blends expert-led presenter videos with captivating animations,
          helping you understand, remember, and confidently use English in real conversations.
        </p>
      </Reveal>

      <div className={styles.journeyGrid}>
        {learningStages.map(({ number, title, src, alt }, index) => (
          <Reveal className={styles.journeyItem} delay={index * 0.06} key={number}>
            <span className={styles.journeyNumber}>{number}</span>
            <MediaSlot
              variant="phone"
              fit="contain"
              label={`${title} screenshot`}
              alt={alt}
              src={src}
            />
            <h4 className={styles.journeyTitle}>{title}</h4>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.practiceNote}>
        <div>
          <p className="eyebrow">SELVE practice</p>
          <h3 className={styles.practiceHeading}>Practice. Play. Progress.</h3>
        </div>
        <p className={styles.practiceDescription}>
          SELVE blends education and play with interactive exercises that reinforce lessons through
          instant feedback, and rewards — turning practice into progress.
        </p>
      </Reveal>
    </div>
  );
}
