import Container from "@/components/site/Container";
import Footer from "@/components/site/Footer";
import styles from "./RouteLanding.module.css";

type RouteLandingProps = {
  title: string;
};

export default function RouteLanding({ title }: RouteLandingProps) {
  return (
    <>
      <main className={styles.main}>
        <Container>
          <h1 className={styles.heading}>{title}</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}
