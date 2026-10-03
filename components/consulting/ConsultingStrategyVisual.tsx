import ConsultingVisualFrame from "./ConsultingVisualFrame";
import styles from "./ConsultingPage.module.css";

export default function ConsultingStrategyVisual() {
  return (
    <ConsultingVisualFrame>
      <svg className={styles.stageArtwork} viewBox="0 0 480 320" fill="none" aria-hidden="true" focusable="false">
        <path className={styles.connection} d="M240 160 112 76m128 84 128-84M240 160l-128 85m128-85 128 85M112 76v169m256-169v169" />
        <rect className={styles.strategyCardFloat} x="166" y="103" width="148" height="114" rx="20" fill="#fff" stroke="#D9C8FF" />
        <rect x="190" y="127" width="100" height="8" rx="4" fill="#B89AFF" /><rect x="190" y="146" width="74" height="6" rx="3" fill="#E8E5EE" />
        <rect x="190" y="163" width="44" height="32" rx="8" fill="#F4F0FF" /><rect x="241" y="163" width="49" height="32" rx="8" fill="#FAF9FD" />
        <circle cx="112" cy="76" r="25" fill="#fff" stroke="#D9C8FF" /><circle cx="112" cy="69" r="6" fill="#B89AFF" /><path d="M100 88c2-8 22-8 24 0" stroke="#B89AFF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="368" cy="76" r="25" fill="#fff" stroke="#D9C8FF" /><circle cx="368" cy="69" r="6" fill="#C7B1FF" /><path d="M356 88c2-8 22-8 24 0" stroke="#C7B1FF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="112" cy="245" r="25" fill="#fff" stroke="#D9C8FF" /><circle cx="112" cy="238" r="6" fill="#9D7BFA" /><path d="M100 257c2-8 22-8 24 0" stroke="#9D7BFA" strokeWidth="3" strokeLinecap="round" />
        <circle cx="368" cy="245" r="25" fill="#fff" stroke="#D9C8FF" /><circle cx="368" cy="238" r="6" fill="#D9C8FF" /><path d="M356 257c2-8 22-8 24 0" stroke="#D9C8FF" strokeWidth="3" strokeLinecap="round" />
        <circle className={styles.nodeFloatOne} cx="240" cy="52" r="8" fill="#F3EEFF" stroke="#B89AFF" /><circle className={styles.nodeFloatTwo} cx="240" cy="267" r="8" fill="#F3EEFF" stroke="#B89AFF" />
      </svg>
    </ConsultingVisualFrame>
  );
}
