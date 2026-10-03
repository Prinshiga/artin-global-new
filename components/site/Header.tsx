"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import Container from "@/components/site/Container";
import styles from "./Header.module.css";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Software", href: "/software" },
  { label: "Consulting", href: "/consulting" },
  { label: "Content", href: "/content" },
];

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function handleMenuKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link className={styles.brand} href="/" aria-label="Artin Solutions home">
          <Image
            src="/brand/artin-logo-transparent.png"
            alt="Artin Solutions"
            width={904}
            height={492}
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.desktopNavigation} aria-label="Main navigation">
          {navigation.map(({ label, href }) => {
            const isActive = isActivePath(pathname, href);

            return (
              <Link
                key={href}
                className={`${styles.navigationLink}${isActive ? ` ${styles.activeLink}` : ""}`}
                href={href}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link className={`button button-primary ${styles.desktopCta}`} href="#contact">
          Talk to us
        </Link>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>

        <nav
          id="mobile-site-navigation"
          className={`${styles.mobileNavigation}${isMenuOpen ? ` ${styles.mobileNavigationOpen}` : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!isMenuOpen}
          onKeyDown={handleMenuKeyDown}
          inert={!isMenuOpen}
        >
          {navigation.map(({ label, href }) => {
            const isActive = isActivePath(pathname, href);

            return (
              <Link
                key={href}
                className={`${styles.mobileNavigationLink}${isActive ? ` ${styles.activeLink}` : ""}`}
                href={href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <Link
            className={`button button-primary ${styles.mobileCta}`}
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Talk to us
          </Link>
        </nav>
      </Container>
    </header>
  );
}
