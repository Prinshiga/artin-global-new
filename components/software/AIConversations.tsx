import Container from "@/components/site/Container";
import MediaSlot from "./MediaSlot";
import Reveal from "./Reveal";
import styles from "./SoftwarePage.module.css";

export default function AIConversations() {
  return (
    <section
      id="ai-conversations"
      className={styles.conversationsSection}
      aria-labelledby="conversations-heading"
    >
      <Container className={styles.splitLayout}>
        <Reveal className={styles.conversationMedia}>
          <MediaSlot
            variant="landscape"
            label="AI Conversations learner image"
            alt="Learner practicing spoken English with a phone"
            src="/images/software/software-ai-conversation.png"
          />
        </Reveal>
        <Reveal className={styles.sectionCopy} delay={0.08}>
          <p className="eyebrow">SELVE</p>
          <h2 id="conversations-heading" className={styles.sectionHeading}>
            AI Conversations
          </h2>
          <p className={styles.sectionDescription}>
            Practice spoken English through realistic conversations in a supportive environment.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
