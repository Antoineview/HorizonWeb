import styles from "./page.module.css";
import Script from "next/script";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.heroTitle}>HorizonBreak</h1>
      <div className={styles.heroButtons}>
        <a href="#" className={`${styles.button} ${styles.primary}`}>
          Télécharger
        </a>
        <a href="#" className={`${styles.button} ${styles.secondary}`}>
          Plus d&apos;infos
        </a>
      </div>
    </div>
  );
}
