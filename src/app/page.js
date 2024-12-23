import Image from "next/image";
import styles from "./page.module.css";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <iframe src="https://horizonscene.vercel.app"></iframe>
        <ol>
          <li>
            🌇 Bienvenue sur <code>HorizonWeb</code> [beta].
          </li>
          <li>
            <em>👀 Psst Scrolle dans l&apos;iFrame </em>
          </li>
        </ol>
      </main>
    </div>
  );
}
