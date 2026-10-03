import Image from "next/image";
import Link from "next/link";
import Container from "@/components/site/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.contact}>
        <Container className={styles.contactInner}>
          <div>
            <p className={styles.eyebrow}>GET IN TOUCH</p>
            <a className={styles.email} href="mailto:info@artinglobal.com">
              info@artinglobal.com
            </a>
            <span className={styles.contactMark} aria-hidden="true" />
          </div>
        </Container>
      </div>
      <div className={styles.bottom}>
        <Container className={styles.bottomInner}>
          <Link className={styles.brand} href="/" aria-label="Artin Solutions home">
            <Image
              src="/brand/artin-logo-transparent.png"
              alt="Artin Solutions"
              width={904}
              height={492}
              className={styles.logo}
            />
          </Link>
          <small className={styles.copyright}>
            Copyright © 2025 Artin Private Ltd. All rights reserved.
          </small>
        </Container>
      </div>
    </footer>
  );
}
