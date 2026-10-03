import styles from "./SoftwarePage.module.css";

/** Abstract product ecosystem illustration with no company marks or labels. */
export default function PartnershipVisual() {
  return (
    <svg
      className={styles.partnershipArtwork}
      viewBox="0 0 520 360"
      role="img"
      aria-label="Abstract SELVE product ecosystem with a central app and connected supporting elements"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ecosystem-wash" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FAF9FF" />
          <stop offset="1" stopColor="#F4F0FF" />
        </linearGradient>
        <linearGradient id="ecosystem-screen" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7146E8" />
          <stop offset="1" stopColor="#9578EA" />
        </linearGradient>
      </defs>

      <rect x="13" y="13" width="494" height="334" rx="30" fill="url(#ecosystem-wash)" />
      <rect x="13.5" y="13.5" width="493" height="333" rx="29.5" fill="none" stroke="#E7E3F1" />

      <path d="M129 119C157 119 158 147 181 155M391 112C364 112 363 145 339 153M128 252C158 252 161 225 183 214M392 249C363 249 359 222 338 213" fill="none" stroke="#D5C9F4" strokeWidth="1.5" />
      <path d="M129 119C157 119 158 147 181 155M391 112C364 112 363 145 339 153M128 252C158 252 161 225 183 214M392 249C363 249 359 222 338 213" fill="none" stroke="#8B6BE2" strokeWidth="1.5" strokeDasharray="3 9" className={styles.partnershipPath} />

      <g className={styles.partnershipFloatOne}>
        <rect x="41" y="79" width="91" height="79" rx="16" fill="#fff" stroke="#E5E2ED" />
        <circle cx="62" cy="101" r="8" fill="#F1ECFF" />
        <path d="M59 101l2 2 4-5" fill="none" stroke="#6841D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="77" y="97" width="38" height="5" rx="2.5" fill="#C7C5D2" />
        <rect x="55" y="119" width="61" height="4" rx="2" fill="#E4E3EA" />
        <rect x="55" y="131" width="44" height="4" rx="2" fill="#ECEBF1" />
      </g>

      <g className={styles.partnershipFloatTwo}>
        <rect x="388" y="72" width="91" height="79" rx="16" fill="#fff" stroke="#E5E2ED" />
        <rect x="405" y="89" width="57" height="37" rx="8" fill="#F7F5FC" />
        <path d="M413 115l10-10 8 6 12-14 11 13" fill="none" stroke="#8260DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="413" cy="135" r="2.5" fill="#8F73DF" />
        <rect x="420" y="133" width="42" height="4" rx="2" fill="#E0DEE9" />
      </g>

      <g className={styles.partnershipFloatThree}>
        <rect x="42" y="224" width="86" height="70" rx="16" fill="#fff" stroke="#E5E2ED" />
        <circle cx="85" cy="249" r="13" fill="#F4F0FF" />
        <path d="M79 249h12M85 243v12" stroke="#6841D9" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="59" y="272" width="52" height="4" rx="2" fill="#E1DFE9" />
      </g>

      <g className={styles.partnershipFloatFour}>
        <rect x="392" y="221" width="86" height="73" rx="16" fill="#fff" stroke="#E5E2ED" />
        <rect x="409" y="238" width="52" height="34" rx="8" fill="#F7F5FC" />
        <path d="M418 254l7 7 14-15" fill="none" stroke="#6841D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="409" y="279" width="34" height="4" rx="2" fill="#E1DFE9" />
      </g>

      <g>
        <rect x="171" y="42" width="178" height="276" rx="27" fill="#fff" stroke="#DED9EA" />
        <rect x="179" y="50" width="162" height="260" rx="20" fill="#FCFBFE" />
        <rect x="230" y="59" width="60" height="5" rx="2.5" fill="#E5E2EC" />
        <rect x="191" y="80" width="138" height="86" rx="14" fill="url(#ecosystem-screen)" />
        <circle cx="211" cy="102" r="5" fill="#E7DEFF" opacity=".9" />
        <rect x="224" y="99" width="70" height="5" rx="2.5" fill="#fff" opacity=".85" />
        <rect x="205" y="117" width="89" height="4" rx="2" fill="#fff" opacity=".55" />
        <rect x="205" y="129" width="67" height="4" rx="2" fill="#fff" opacity=".4" />
        <rect x="205" y="145" width="49" height="9" rx="4.5" fill="#fff" opacity=".9" />

        <rect x="191" y="180" width="138" height="43" rx="12" fill="#fff" stroke="#ECEAF1" />
        <circle cx="208" cy="201" r="8" fill="#F1ECFF" />
        <path d="M205 201l2 2 4-5" fill="none" stroke="#6841D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="223" y="195" width="83" height="4" rx="2" fill="#D3D1DC" />
        <rect x="223" y="204" width="57" height="4" rx="2" fill="#E9E7EF" />

        <rect x="191" y="234" width="64" height="61" rx="12" fill="#F5F2FC" />
        <rect x="263" y="234" width="66" height="61" rx="12" fill="#fff" stroke="#ECEAF1" />
        <path d="M203 276v-10l9-8 9 5 10-14 11 12" fill="none" stroke="#8260DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="280" cy="254" r="5" fill="#EAE3FC" />
        <rect x="291" y="252" width="26" height="4" rx="2" fill="#D7D4E0" />
        <rect x="276" y="267" width="42" height="4" rx="2" fill="#E5E3EC" />
        <rect x="276" y="278" width="33" height="4" rx="2" fill="#ECEAF1" />
      </g>

      <circle cx="260" cy="180" r="137" fill="none" stroke="#E7E0F6" strokeWidth="1" className={styles.partnershipPulse} />
      <circle cx="129" cy="119" r="3" fill="#8B6BE2" />
      <circle cx="391" cy="112" r="3" fill="#8B6BE2" />
      <circle cx="128" cy="252" r="3" fill="#8B6BE2" />
      <circle cx="392" cy="249" r="3" fill="#8B6BE2" />
    </svg>
  );
}
