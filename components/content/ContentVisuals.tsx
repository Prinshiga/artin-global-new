"use client";

import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";
import styles from "./ContentPage.module.css";

function VisualFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const reduceMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 90, damping: 24, mass: 0.8 });
  const y = useSpring(rawY, { stiffness: 90, damping: 24, mass: 0.8 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
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

export function ContentHeroVisual() {
  return (
    <VisualFrame>
      <svg className={styles.heroArt} viewBox="0 0 600 470" fill="none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="contentCanvas" x1="105" y1="65" x2="487" y2="405" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" /><stop offset="1" stopColor="#F7F4FF" />
          </linearGradient>
          <linearGradient id="contentMedia" x1="310" y1="104" x2="464" y2="250" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E9DEFF" /><stop offset="1" stopColor="#DDEBFF" />
          </linearGradient>
          <filter id="contentShadow" x="0" y="0" width="600" height="470" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="9" stdDeviation="12" floodColor="#44316D" floodOpacity=".08" />
          </filter>
        </defs>
        <circle cx="314" cy="237" r="211" fill="#F3EEFF" fillOpacity=".82" />
        <circle cx="463" cy="97" r="31" fill="#E1F3ED" /><circle cx="126" cy="354" r="24" fill="#FFF0DF" />
        <path className={styles.contentConnector} d="M138 152h74m181 0h67M138 318h75m180 0h68M300 85v47m0 213v48" />
        <g filter="url(#contentShadow)">
          <rect x="96" y="70" width="408" height="333" rx="26" fill="url(#contentCanvas)" stroke="#E3DFEB" />
          <rect x="116" y="91" width="368" height="31" rx="10" fill="#fff" stroke="#EFEDF4" />
          <circle cx="133" cy="106" r="4" fill="#B99AFB" /><circle cx="148" cy="106" r="4" fill="#DED9E8" /><circle cx="163" cy="106" r="4" fill="#DED9E8" />
          <rect className={styles.contentCardFloat} x="119" y="143" width="162" height="218" rx="16" fill="#fff" stroke="#E8E4EE" />
          <rect x="135" y="159" width="130" height="83" rx="11" fill="#EDE6FF" />
          <circle cx="200" cy="200" r="21" fill="#fff" fillOpacity=".9" /><path d="m196 190 15 10-15 10v-20Z" fill="#7651DE" />
          <rect x="136" y="257" width="76" height="6" rx="3" fill="#9472E9" /><rect x="136" y="273" width="113" height="5" rx="2.5" fill="#E7E3ED" /><rect x="136" y="286" width="94" height="5" rx="2.5" fill="#E7E3ED" />
          <rect x="136" y="310" width="42" height="28" rx="8" fill="#E7F4EE" /><rect x="184" y="310" width="81" height="28" rx="8" fill="#F6F4FA" />
          <rect className={styles.mediaFloat} x="300" y="143" width="164" height="112" rx="15" fill="url(#contentMedia)" stroke="#E2DDED" />
          <path d="M318 224c23-39 35-25 48-40 15-18 25-20 49 9 16 19 25 17 36 4v43H318v-16Z" fill="#fff" fillOpacity=".68" />
          <circle cx="426" cy="168" r="11" fill="#FFF0DF" />
          <rect x="300" y="270" width="164" height="91" rx="15" fill="#fff" stroke="#E8E4EE" />
          <rect x="316" y="286" width="73" height="6" rx="3" fill="#C5B0FA" />
          <path d="M320 338v-18m23 18v-30m23 30v-23m23 23v-39m23 39v-14" stroke="#79B9A3" strokeWidth="7" strokeLinecap="round" />
          <rect x="414" y="317" width="32" height="7" rx="3.5" fill="#FFE0B8" />
        </g>
        <circle className={styles.contentNodeA} cx="106" cy="150" r="12" fill="#fff" stroke="#9B7AE7" strokeWidth="2" />
        <circle className={styles.contentNodeB} cx="494" cy="150" r="12" fill="#fff" stroke="#8ABBAA" strokeWidth="2" />
        <circle className={styles.contentNodeC} cx="106" cy="320" r="11" fill="#fff" stroke="#E5AE73" strokeWidth="2" />
        <circle cx="494" cy="320" r="11" fill="#fff" stroke="#9B7AE7" strokeWidth="2" />
      </svg>
    </VisualFrame>
  );
}

export function ContentOptionsVisual() {
  return (
    <VisualFrame>
      <svg className={styles.sectionArt} viewBox="0 0 520 350" fill="none" aria-hidden="true" focusable="false">
        <path className={styles.pathCustom} d="M260 168 103 76v198l157-94" />
        <path className={styles.pathCo} d="M260 168h158" />
        <path className={styles.pathFlexible} d="m260 168 157-92v198l-157-94" />
        <circle className={styles.hubPulse} cx="260" cy="168" r="57" fill="#F0E9FF" stroke="#8E6AE8" strokeWidth="2" />
        <circle cx="260" cy="168" r="35" fill="#fff" stroke="#D7C8F8" strokeWidth="2" />
        <rect x="245" y="151" width="30" height="34" rx="6" fill="#7954DC" fillOpacity=".14" stroke="#7954DC" strokeWidth="2" /><path d="M251 160h18m-18 7h18m-18 7h12" stroke="#7954DC" strokeWidth="2" strokeLinecap="round" />
        <rect className={styles.optionCardCustom} x="30" y="46" width="147" height="62" rx="14" fill="#fff" stroke="#D8C9F7" strokeWidth="2" />
        <circle cx="53" cy="77" r="10" fill="#EEE7FF" /><path d="M49 77h8m-4-4v8" stroke="#7954DC" strokeWidth="2" strokeLinecap="round" />
        <text x="72" y="82" className={styles.svgLabel}>CUSTOM</text>
        <rect className={styles.optionCardCo} x="343" y="140" width="151" height="62" rx="14" fill="#fff" stroke="#D5E9E1" strokeWidth="2" />
        <circle cx="367" cy="171" r="10" fill="#E5F3ED" /><circle cx="364" cy="169" r="3" fill="#5C9E84" /><circle cx="371" cy="173" r="3" fill="#5C9E84" />
        <text x="386" y="176" className={styles.svgLabel}>CO-DEVELOPMENT</text>
        <rect className={styles.optionCardFlexible} x="30" y="229" width="147" height="62" rx="14" fill="#fff" stroke="#F0DCC4" strokeWidth="2" />
        <circle cx="53" cy="260" r="10" fill="#FFF1DF" /><path d="m49 260 3 3 6-7" stroke="#C58342" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="72" y="265" className={styles.svgLabel}>FLEXIBLE</text>
        <circle className={styles.contentNodeA} cx="104" cy="76" r="5" fill="#8E6AE8" /><circle className={styles.contentNodeB} cx="418" cy="168" r="5" fill="#5C9E84" /><circle className={styles.contentNodeC} cx="104" cy="274" r="5" fill="#C58342" />
      </svg>
    </VisualFrame>
  );
}

export function ContentJourneyVisual() {
  return (
    <VisualFrame>
      <svg className={styles.journeyArt} viewBox="0 0 700 350" fill="none" aria-hidden="true" focusable="false">
        <path className={styles.pipeline} d="M74 159h549" />
        <path className={styles.pipelineGlow} d="M74 159h549" />
        <g className={styles.journeyNodeOne}><circle cx="85" cy="159" r="31" fill="#EEE7FF" stroke="#9A79E9" strokeWidth="2" /><path d="M74 151h22m-22 8h22m-22 8h15" stroke="#7954DC" strokeWidth="2" strokeLinecap="round" /></g>
        <g className={styles.journeyNodeTwo}><circle cx="217" cy="159" r="31" fill="#EAF4F0" stroke="#83B9A4" strokeWidth="2" /><path d="m203 169 10-20 11 12 8-10" stroke="#5C9E84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g>
        <g className={styles.journeyNodeThree}><circle cx="350" cy="159" r="31" fill="#F0ECFA" stroke="#B2A0D8" strokeWidth="2" /><rect x="337" y="146" width="26" height="26" rx="5" stroke="#7954DC" strokeWidth="2" /><path d="M342 153h16m-16 6h16m-16 6h11" stroke="#7954DC" strokeWidth="1.7" strokeLinecap="round" /></g>
        <g className={styles.journeyNodeFour}><circle cx="483" cy="159" r="31" fill="#FFF1DF" stroke="#D9B27E" strokeWidth="2" /><path d="M471 159h24m-8-8 8 8-8 8" stroke="#B77A38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g>
        <g className={styles.journeyNodeFive}><circle cx="615" cy="159" r="31" fill="#E8F0FC" stroke="#8AA9D7" strokeWidth="2" /><circle cx="615" cy="151" r="6" fill="#7298CC" /><path d="M603 169c2-8 22-8 24 0" stroke="#7298CC" strokeWidth="2" strokeLinecap="round" /></g>
        <rect x="49" y="63" width="72" height="36" rx="10" fill="#fff" stroke="#E5E1EC" /><rect x="61" y="76" width="48" height="5" rx="2.5" fill="#C0AAF2" />
        <rect x="183" y="220" width="68" height="36" rx="10" fill="#fff" stroke="#E5E1EC" /><path d="M197 239h39m-39 7h26" stroke="#DCD6E8" strokeWidth="4" strokeLinecap="round" />
        <rect x="316" y="63" width="68" height="36" rx="10" fill="#fff" stroke="#E5E1EC" /><rect x="329" y="76" width="42" height="8" rx="3" fill="#E9DEFF" />
        <rect x="449" y="220" width="68" height="36" rx="10" fill="#fff" stroke="#E5E1EC" /><circle cx="466" cy="238" r="6" fill="#E5F3ED" /><path d="M479 238h24" stroke="#DCD6E8" strokeWidth="4" strokeLinecap="round" />
        <rect x="579" y="63" width="72" height="36" rx="10" fill="#fff" stroke="#E5E1EC" /><path d="M593 81h43" stroke="#DCD6E8" strokeWidth="4" strokeLinecap="round" />
        <text x="42" y="313" className={styles.svgLabel}>STRATEGY</text><text x="150" y="313" className={styles.svgLabel}>CREATIVE DESIGN</text><text x="314" y="313" className={styles.svgLabel}>DEVELOPMENT</text><text x="433" y="313" className={styles.svgLabel}>IMPLEMENTATION</text><text x="570" y="313" className={styles.svgLabel}>LEARNER ENGAGEMENT</text>
        <circle className={styles.pipelineDot} cx="85" cy="159" r="6" fill="#7954DC" />
      </svg>
    </VisualFrame>
  );
}

export function ContentCollaborationVisual() {
  return (
    <VisualFrame>
      <svg className={styles.sectionArt} viewBox="0 0 520 350" fill="none" aria-hidden="true" focusable="false">
        <path className={styles.collabLine} d="M101 106 180 152m239-46-79 46m-239 93 79-46m239 46-79-46" />
        <rect className={styles.boardFloat} x="155" y="91" width="210" height="159" rx="20" fill="#fff" stroke="#DCD5E9" strokeWidth="2" />
        <rect x="177" y="113" width="91" height="7" rx="3.5" fill="#9B7AE7" /><rect x="177" y="132" width="163" height="5" rx="2.5" fill="#E8E4EE" />
        <rect x="177" y="153" width="71" height="73" rx="11" fill="#EEE7FF" /><circle cx="212" cy="181" r="15" fill="#fff" /><path d="M208 173v16l12-8-12-8Z" fill="#7954DC" />
        <rect x="261" y="153" width="79" height="32" rx="9" fill="#E8F3EE" /><path d="M274 169h51" stroke="#83B9A4" strokeWidth="5" strokeLinecap="round" />
        <rect x="261" y="194" width="79" height="32" rx="9" fill="#FFF1DF" /><path d="M274 210h37" stroke="#D9B27E" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="94" r="29" fill="#EEE7FF" stroke="#A88CE8" strokeWidth="2" /><circle cx="100" cy="86" r="7" fill="#8E6AE8" /><path d="M85 106c3-10 27-10 30 0" stroke="#8E6AE8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="420" cy="94" r="29" fill="#E7F3EE" stroke="#8ABBAA" strokeWidth="2" /><circle cx="420" cy="86" r="7" fill="#65A68E" /><path d="M405 106c3-10 27-10 30 0" stroke="#65A68E" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="258" r="29" fill="#FFF1DF" stroke="#D9B27E" strokeWidth="2" /><circle cx="100" cy="250" r="7" fill="#C58342" /><path d="M85 270c3-10 27-10 30 0" stroke="#C58342" strokeWidth="3" strokeLinecap="round" />
        <circle cx="420" cy="258" r="29" fill="#E8F0FC" stroke="#8AA9D7" strokeWidth="2" /><circle cx="420" cy="250" r="7" fill="#7298CC" /><path d="M405 270c3-10 27-10 30 0" stroke="#7298CC" strokeWidth="3" strokeLinecap="round" />
        <rect x="109" y="282" width="95" height="27" rx="9" fill="#fff" stroke="#E6E1EC" /><rect x="210" y="282" width="58" height="27" rx="9" fill="#fff" stroke="#E6E1EC" /><rect x="274" y="282" width="58" height="27" rx="9" fill="#fff" stroke="#E6E1EC" /><rect x="338" y="282" width="70" height="27" rx="9" fill="#fff" stroke="#E6E1EC" />
        <text x="116" y="300" className={styles.svgLabel}>COLLABORATE</text><text x="219" y="300" className={styles.svgLabel}>BUILD</text><text x="282" y="300" className={styles.svgLabel}>LEARN</text><text x="344" y="300" className={styles.svgLabel}>SUSTAIN</text>
      </svg>
    </VisualFrame>
  );
}
