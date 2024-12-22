import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>
            Welcome to <code>HorizonWeb</code>.
          </li>
          <li>Coming Soon.</li>
        </ol>
      </main>
    </div>
  );
}
