import Image from "next/image";
import { ImagePlus } from "lucide-react";
import styles from "./SoftwarePage.module.css";

type MediaSlotProps = {
  alt: string;
  fit?: "contain" | "cover";
  label: string;
  preload?: boolean;
  src?: string;
  variant: "landscape" | "phone" | "logo";
};

export default function MediaSlot({ alt, fit, label, preload = false, src, variant }: MediaSlotProps) {
  return (
    <figure className={`${styles.mediaSlot} ${styles[variant]}`}>
      <div className={styles.mediaViewport}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            preload={preload}
            sizes={
              variant === "phone"
                ? "(max-width: 680px) 208px, 192px"
                : "(max-width: 800px) 90vw, 50vw"
            }
            className={styles.mediaImage}
            style={{
              objectFit: fit ?? (variant === "logo" || variant === "phone" ? "contain" : "cover"),
            }}
          />
        ) : (
          <div className={styles.mediaPlaceholder} role="img" aria-label={`${label} asset placeholder`}>
            <ImagePlus className={styles.placeholderIcon} size={21} strokeWidth={1.6} aria-hidden="true" />
            <span>{label}</span>
            <span className={styles.placeholderNote}>Asset pending</span>
          </div>
        )}
      </div>
    </figure>
  );
}
