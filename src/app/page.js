import styles from "./page.module.css";
import Script from "next/script";
import Spline from "@splinetool/react-spline/next";
import Timeline from "./entreprise/page";

export default function Home() {
  return (
    <>
      {/* // Section 1 : Gros Titre et Call to Action */}
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
      {/* // Section 2 : Timeline */}
      <Timeline />
    </>
  );
}
