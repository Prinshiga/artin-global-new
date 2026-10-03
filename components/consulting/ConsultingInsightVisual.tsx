import ConsultingVisualFrame from "./ConsultingVisualFrame";
import styles from "./ConsultingPage.module.css";

export default function ConsultingInsightVisual() {
  return (
    <ConsultingVisualFrame>
      <svg className={styles.stageArtwork} viewBox="0 0 480 320" fill="none" aria-hidden="true" focusable="false">
        <path className={styles.connection} d="M70 87h112m116 0h112M70 231h112m116 0h112M126 87v144m228-144v144" />
        <rect x="39" y="62" width="74" height="50" rx="12" fill="#fff" stroke="#E6E2EF" />
        <rect x="54" y="77" width="34" height="5" rx="2.5" fill="#C7B1FF" /><path d="M54 94h42" stroke="#E9E7EF" strokeWidth="5" strokeLinecap="round" />
        <rect x="367" y="62" width="74" height="50" rx="12" fill="#fff" stroke="#E6E2EF" />
        <path d="M382 95v-9m13 9V76m13 19V82m13 13V70" stroke="#B89AFF" strokeWidth="5" strokeLinecap="round" />
        <rect x="39" y="206" width="74" height="50" rx="12" fill="#fff" stroke="#E6E2EF" />
        <circle cx="60" cy="231" r="7" fill="#E9DEFF" /><circle cx="77" cy="231" r="7" fill="#C7B1FF" /><circle cx="94" cy="231" r="7" fill="#6D3DF5" fillOpacity=".6" />
        <rect x="367" y="206" width="74" height="50" rx="12" fill="#fff" stroke="#E6E2EF" />
        <path d="M383 232h42" stroke="#E9E7EF" strokeWidth="5" strokeLinecap="round" /><path d="m386 232 8 8 18-19" stroke="#8D6AF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle className={styles.analysisPulse} cx="240" cy="159" r="65" fill="#F4F0FF" stroke="#D9C8FF" />
        <circle cx="240" cy="159" r="45" fill="#fff" stroke="#E7DFFF" />
        <circle cx="240" cy="159" r="24" fill="#6D3DF5" fillOpacity=".1" stroke="#9D7BFA" />
        <path d="M240 146v14l10 7" stroke="#6D3DF5" strokeWidth="3" strokeLinecap="round" />
        <circle className={styles.dataDrift} cx="184" cy="100" r="4" fill="#6D3DF5" /><circle className={styles.dataDriftReverse} cx="297" cy="216" r="4" fill="#B89AFF" />
      </svg>
    </ConsultingVisualFrame>
  );
}
