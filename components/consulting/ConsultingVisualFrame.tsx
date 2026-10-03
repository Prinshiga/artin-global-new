"use client";

import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import styles from "./ConsultingPage.module.css";

export default function ConsultingVisualFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 90, damping: 24, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 90, damping: 24, mass: 0.8 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || (event.pointerType !== "mouse" && event.pointerType !== "pen")) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    rawX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
    rawY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 12);
  }

  function resetPointer() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={styles.visualFrame}
      data-in-view={inView ? "true" : "false"}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {children}
    </motion.div>
  );
}
