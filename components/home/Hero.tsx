"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  useEffect,
  useRef,
  type PointerEvent as ReactPointerEvent,
  type RefObject,
} from "react";
import Container from "@/components/site/Container";
import styles from "./Hero.module.css";

const springSettings = { stiffness: 140, damping: 24, mass: 0.45 };

type HeroActionProps = {
  children: string;
  className: string;
  href: string;
  pointerEffectsEnabled: RefObject<boolean>;
};

function HeroAction({
  children,
  className,
  href,
  pointerEffectsEnabled,
}: HeroActionProps) {
  const tiltXTarget = useMotionValue(0);
  const tiltYTarget = useMotionValue(0);
  const tiltX = useSpring(tiltXTarget, { stiffness: 190, damping: 23, mass: 0.35 });
  const tiltY = useSpring(tiltYTarget, { stiffness: 190, damping: 23, mass: 0.35 });

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (
      !pointerEffectsEnabled.current ||
      window.innerWidth <= 680 ||
      event.pointerType !== "mouse"
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    tiltXTarget.set(-y * 4.5);
    tiltYTarget.set(x * 4.5);
  }

  function resetTilt() {
    tiltXTarget.set(0);
    tiltYTarget.set(0);
  }

  return (
    <motion.div
      className={styles.actionMotion}
      style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 700 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <Link className={className} href={href}>
        {children}
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const pointerEffectsEnabled = useRef(false);
  const pointerXTarget = useMotionValue(0);
  const pointerYTarget = useMotionValue(0);
  const glowOpacityTarget = useMotionValue(0);
  const pointerX = useSpring(pointerXTarget, springSettings);
  const pointerY = useSpring(pointerYTarget, springSettings);
  const glowOpacity = useSpring(glowOpacityTarget, { stiffness: 90, damping: 26 });
  const visualXTarget = useMotionValue(0);
  const visualYTarget = useMotionValue(0);
  const visualX = useSpring(visualXTarget, springSettings);
  const visualY = useSpring(visualYTarget, springSettings);

  useEffect(() => {
    pointerEffectsEnabled.current =
      shouldReduceMotion === false &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, [shouldReduceMotion, pointerEffectsEnabled]);

  const entrance = shouldReduceMotion
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } };
  const enterTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.48,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  function handlePointerEnter(event: ReactPointerEvent<HTMLElement>) {
    if (
      !pointerEffectsEnabled.current ||
      window.innerWidth <= 680 ||
      event.pointerType !== "mouse"
    ) {
      return;
    }
    glowOpacityTarget.set(0.7);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (
      !pointerEffectsEnabled.current ||
      window.innerWidth <= 680 ||
      event.pointerType !== "mouse"
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;
    const parallaxRange = window.innerWidth < 900 ? 3.5 : 7;

    pointerXTarget.set(event.clientX - bounds.left);
    pointerYTarget.set(event.clientY - bounds.top);
    visualXTarget.set(normalizedX * parallaxRange);
    visualYTarget.set(normalizedY * parallaxRange);
  }

  function handlePointerLeave() {
    glowOpacityTarget.set(0);
    visualXTarget.set(0);
    visualYTarget.set(0);
  }

  return (
    <section
      className={styles.hero}
      aria-labelledby="home-hero-title"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className={styles.ambientGlow}
        aria-hidden="true"
        style={{ left: pointerX, top: pointerY, opacity: glowOpacity }}
      />
      <Container className={styles.layout}>
        <div className={styles.content}>
          <motion.h1
            id="home-hero-title"
            className={styles.heading}
            initial={entrance.initial}
            animate={entrance.animate}
            transition={enterTransition(0)}
          >
            Technology that <span className={styles.accent}>empowers people</span> and
            organizations.
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={entrance.initial}
            animate={entrance.animate}
            transition={enterTransition(0.08)}
          >
            Explore how technology can better serve the people and organizations who use it.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={entrance.initial}
            animate={entrance.animate}
            transition={enterTransition(0.16)}
          >
            <HeroAction
              className="button button-primary"
              href="/software"
              pointerEffectsEnabled={pointerEffectsEnabled}
            >
              Explore our solutions
            </HeroAction>
            {/* Replace this placeholder with the confirmed contact destination when available. */}
            <HeroAction
              className={`button button-secondary ${styles.secondaryAction}`}
              href="#contact"
              pointerEffectsEnabled={pointerEffectsEnabled}
            >
              Talk to us
            </HeroAction>
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          aria-hidden="true"
          initial={entrance.initial}
          animate={entrance.animate}
          transition={{ ...enterTransition(0.1), duration: shouldReduceMotion ? 0 : 0.65 }}
        >
          <motion.div className={styles.visualLayer} style={{ x: visualX, y: visualY }}>
            <div className={styles.orbit} />
            <div className={styles.orbitInner} />
            <div className={styles.risingForm} />
            <div className={styles.sphere} />
            <div className={styles.sphereAccent} />
            <div className={styles.baseForm} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
