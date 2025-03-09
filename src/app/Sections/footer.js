import styles from "../Styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.timelineFooter}>
        <p>&copy; 2025 HorizonLabs. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
