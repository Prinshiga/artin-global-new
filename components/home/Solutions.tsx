import Link from "next/link";
import { ArrowRight, Code2, FileText, UsersRound } from "lucide-react";
import Container from "@/components/site/Container";
import styles from "./Solutions.module.css";

const solutions = [
  {
    title: "Software",
    description: "Discover Artin’s software offering.",
    href: "/software",
    Icon: Code2,
  },
  {
    title: "Consulting",
    description: "Discover Artin’s consulting offering.",
    href: "/consulting",
    Icon: UsersRound,
  },
  {
    title: "Content",
    description: "Discover Artin’s content offering.",
    href: "/content",
    Icon: FileText,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className={styles.section} aria-labelledby="solutions-heading">
      <Container>
        <div className={styles.intro}>
          <p className="eyebrow">Our solutions</p>
          <h2 id="solutions-heading" className={styles.heading}>
            Three areas of work
          </h2>
          <p className={styles.description}>
            Artin provides software, consulting, and content.
          </p>
        </div>

        <div className={styles.cards}>
          {solutions.map(({ title, description, href, Icon }) => (
            <Link className={styles.card} href={href} key={title}>
              <div className={styles.iconWrap} aria-hidden="true">
                <Icon className={styles.icon} size={22} strokeWidth={1.8} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDescription}>{description}</p>
              <span className={styles.cardLink}>
                <span>Explore {title}</span>
                <ArrowRight className={styles.arrow} size={17} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
