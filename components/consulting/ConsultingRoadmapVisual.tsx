import ConsultingVisualFrame from "./ConsultingVisualFrame";
import styles from "./ConsultingPage.module.css";

export default function ConsultingRoadmapVisual() {
  return (
    <ConsultingVisualFrame>
      <svg className={styles.stageArtwork} viewBox="0 0 480 320" fill="none" aria-hidden="true" focusable="false">
        <rect x="74" y="39" width="332" height="242" rx="19" fill="#fff" stroke="#E6E2EF" />
        <path d="M74 79h332" stroke="#ECEAF2" /><circle cx="95" cy="59" r="4" fill="#D9C8FF" /><circle cx="109" cy="59" r="4" fill="#E7E3ED" /><circle cx="123" cy="59" r="4" fill="#E7E3ED" />
        <rect x="95" y="98" width="113" height="54" rx="11" fill="#F8F6FC" stroke="#ECEAF2" /><rect x="109" y="112" width="52" height="5" rx="2.5" fill="#B89AFF" /><path d="M109 130h81" stroke="#E5E2EB" strokeWidth="5" strokeLinecap="round" />
        <rect x="222" y="98" width="163" height="54" rx="11" fill="#fff" stroke="#ECEAF2" /><path d="M240 126h24m15 0h24m15 0h47" stroke="#E5E2EB" strokeWidth="6" strokeLinecap="round" />
        <rect x="95" y="166" width="290" height="87" rx="12" fill="#FAF9FD" stroke="#ECEAF2" />
        <path className={styles.roadmapPath} d="M119 211h240" />
        <circle cx="127" cy="211" r="10" fill="#fff" stroke="#B89AFF" strokeWidth="2" /><circle cx="201" cy="211" r="10" fill="#fff" stroke="#B89AFF" strokeWidth="2" /><circle cx="276" cy="211" r="10" fill="#F3EEFF" stroke="#9D7BFA" strokeWidth="2" /><circle className={styles.analysisPulse} cx="351" cy="211" r="13" fill="#6D3DF5" fillOpacity=".12" stroke="#9D7BFA" strokeWidth="2" />
        <path d="M127 229v9m74-9v9m75-9v9m75-9v9" stroke="#DCD8E4" strokeWidth="2" strokeLinecap="round" />
        <rect x="20" y="123" width="42" height="36" rx="10" fill="#fff" stroke="#E6E2EF" /><path d="M31 141h20m-10-10v20" stroke="#B89AFF" strokeWidth="2" strokeLinecap="round" />
        <rect x="418" y="123" width="42" height="36" rx="10" fill="#fff" stroke="#E6E2EF" /><circle cx="439" cy="141" r="9" stroke="#B89AFF" strokeWidth="2" /><circle cx="439" cy="141" r="3" fill="#6D3DF5" />
        <path className={styles.connection} d="M62 141h12m332 0h12" />
      </svg>
    </ConsultingVisualFrame>
  );
}
