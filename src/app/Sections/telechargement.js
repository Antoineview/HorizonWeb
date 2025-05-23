"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Styles/entreprise.module.css';

export default function Telechargement() {
  return (
    <motion.section
  className={`${styles.section} ${styles.downloadSection}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionTitle}>
        <h2><span className={styles.sectionEmoji}>⬇️</span>Téléchargements</h2>
        <p>Accédez à toutes les ressources essentielles du projet</p>
      </div>

      <motion.div className={styles.contentCard}>
        <div className={styles.downloadGrid}>
  <a href="/downloads/jeu-horizonlabs.zip" className={styles.readMoreBtn} download>
    🎮 Télécharger le jeu
  </a>
  <a href="/downloads/rapport1.pdf" className={styles.readMoreBtn} download>
    📘 Rapport 1
  </a>
  <a href="/downloads/rapport2.pdf" className={styles.readMoreBtn} download>
    📗 Rapport 2
  </a>
  <a href="/downloads/rapport3.pdf" className={styles.readMoreBtn} download>
    📙 Rapport 3
  </a>
  <a href="/downloads/notice.pdf" className={styles.readMoreBtn} download>
    📄 Notice d'utilisation
  </a>
</div>
      </motion.div>
    </motion.section>
  );
}