import ConsultingVisualFrame from "./ConsultingVisualFrame";
import styles from "./ConsultingPage.module.css";

export default function ConsultingHeroVisual() {
  return (
    <ConsultingVisualFrame>
      <svg className={styles.heroArtwork} viewBox="0 0 600 480" fill="none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="heroPanel" x1="105" y1="88" x2="494" y2="394" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#F7F3FF" />
          </linearGradient>
          <radialGradient id="heroGlow"><stop stopColor="#D9C8FF" stopOpacity=".54" /><stop offset="1" stopColor="#F4F0FF" stopOpacity="0" /></radialGradient>
        </defs>
        <circle cx="300" cy="239" r="220" fill="url(#heroGlow)" />
        <path className={styles.connection} d="m155 156 94 61m102-1 91-67M151 308l101-53m98 0 97 54M300 110v89m0 80v91" />
        <rect x="94" y="82" width="412" height="316" rx="28" fill="url(#heroPanel)" stroke="#E6E2EF" />
        <rect x="113" y="101" width="374" height="32" rx="11" fill="#FAF9FD" />
        <circle cx="130" cy="117" r="4" fill="#D9C8FF" /><circle cx="145" cy="117" r="4" fill="#E6E2EF" /><circle cx="160" cy="117" r="4" fill="#E6E2EF" />
        <rect x="127" y="153" width="143" height="207" rx="16" fill="#fff" stroke="#ECEAF2" />
        <rect x="146" y="174" width="58" height="7" rx="3.5" fill="#D9C8FF" />
        <rect x="146" y="192" width="101" height="5" rx="2.5" fill="#E9E7EF" />
        <rect x="146" y="206" width="83" height="5" rx="2.5" fill="#E9E7EF" />
        <rect x="146" y="233" width="104" height="76" rx="10" fill="#FAF9FD" stroke="#EFEDF4" />
        <path d="M160 289h74M166 279v-17m17 17v-29m17 29v-39m17 39v-22" stroke="#C7B1FF" strokeWidth="5" strokeLinecap="round" />
        <rect x="146" y="324" width="84" height="6" rx="3" fill="#E9E7EF" />
        <rect x="292" y="153" width="174" height="91" rx="16" fill="#fff" stroke="#ECEAF2" />
        <rect x="311" y="173" width="67" height="6" rx="3" fill="#D9C8FF" />
        <path d="M312 212h42m12 0h31m12 0h36" stroke="#E7E4EE" strokeWidth="6" strokeLinecap="round" />
        <rect x="292" y="261" width="174" height="99" rx="16" fill="#fff" stroke="#ECEAF2" />
        <rect x="311" y="280" width="87" height="6" rx="3" fill="#D9C8FF" />
        <path d="M312 319h20m10 0h31m11 0h42" stroke="#E7E4EE" strokeWidth="6" strokeLinecap="round" />
        <circle className={styles.floatSlow} cx="300" cy="239" r="31" fill="#F3EEFF" stroke="#B89AFF" strokeWidth="1.5" />
        <circle cx="300" cy="239" r="9" fill="#6D3DF5" fillOpacity=".8" />
        <circle className={styles.nodeFloatOne} cx="103" cy="151" r="12" fill="#fff" stroke="#B89AFF" strokeWidth="1.5" />
        <circle className={styles.nodeFloatTwo} cx="497" cy="151" r="12" fill="#fff" stroke="#B89AFF" strokeWidth="1.5" />
        <circle className={styles.nodeFloatThree} cx="104" cy="316" r="11" fill="#fff" stroke="#B89AFF" strokeWidth="1.5" />
        <circle className={styles.nodeFloatOne} cx="497" cy="316" r="11" fill="#fff" stroke="#B89AFF" strokeWidth="1.5" />
      </svg>
    </ConsultingVisualFrame>
  );
}
