import ConsultingVisualFrame from "./ConsultingVisualFrame";
import styles from "./ConsultingPage.module.css";

export default function ConsultingImpactVisual() {
  return (
    <ConsultingVisualFrame>
      <svg className={styles.stageArtwork} viewBox="0 0 480 320" fill="none" aria-hidden="true" focusable="false">
        <rect x="45" y="45" width="390" height="230" rx="20" fill="#fff" stroke="#E6E2EF" />
        <rect x="66" y="65" width="83" height="8" rx="4" fill="#D9C8FF" />
        <rect x="66" y="91" width="92" height="60" rx="12" fill="#FAF9FD" stroke="#ECEAF2" />
        <circle cx="108" cy="121" r="20" stroke="#E7E1F1" strokeWidth="6" /><circle className={styles.progressArc} cx="108" cy="121" r="20" stroke="#8D6AF6" strokeWidth="6" strokeLinecap="round" />
        <rect x="170" y="91" width="92" height="60" rx="12" fill="#FAF9FD" stroke="#ECEAF2" /><path d="M187 130v-10m16 10v-22m16 22v-15m16 15v-31" stroke="#B89AFF" strokeWidth="6" strokeLinecap="round" />
        <rect x="274" y="91" width="140" height="60" rx="12" fill="#FAF9FD" stroke="#ECEAF2" /><path d="M292 111h91m-91 18h69" stroke="#E6E2EF" strokeWidth="6" strokeLinecap="round" /><circle cx="397" cy="111" r="5" fill="#B89AFF" />
        <path d="M69 237h342M78 218h324M78 199h324" stroke="#F0EDF5" strokeWidth="1" />
        <path className={styles.trendLine} d="m81 217 63-16 57 9 63-50 54 22 76-61" stroke="#8D6AF6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle className={styles.nodeFloatOne} cx="394" cy="121" r="5" fill="#6D3DF5" />
        <circle cx="144" cy="201" r="5" fill="#fff" stroke="#8D6AF6" strokeWidth="2" /><circle cx="201" cy="210" r="5" fill="#fff" stroke="#8D6AF6" strokeWidth="2" /><circle cx="264" cy="160" r="5" fill="#fff" stroke="#8D6AF6" strokeWidth="2" /><circle cx="318" cy="182" r="5" fill="#fff" stroke="#8D6AF6" strokeWidth="2" /><circle cx="394" cy="121" r="6" fill="#fff" stroke="#8D6AF6" strokeWidth="2" />
        <circle cx="393" cy="228" r="6" fill="#F3EEFF" stroke="#B89AFF" /><circle cx="411" cy="228" r="6" fill="#fff" stroke="#D9C8FF" /><circle cx="375" cy="228" r="6" fill="#fff" stroke="#D9C8FF" />
      </svg>
    </ConsultingVisualFrame>
  );
}
