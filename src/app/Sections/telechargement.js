"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../Styles/entreprise.module.css';

export default function Telechargement() {
  const [jeuLink, setJeuLink] = useState('');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isMac = /Macintosh|MacIntel|MacPPC|Mac68K|Mac OS X/i.test(userAgent);
    const isLinux = /Linux|X11/i.test(userAgent) && !/Android/i.test(userAgent);

    let link = 'https://drive.google.com/file/d/1OJXI-3Oi_9Yi2MGJruYdGdzW5MsoNpaL/view?usp=share_link'; // Windows par défaut

    if (isMac) {
      link = 'https://drive.google.com/file/d/1PYCnqnjA1N59JqajsRK3lz9WDyS9yU0K/view?usp=share_link';
    } else if (isLinux) {
      link = 'https://cdn.kalitsune.net/lend/louis-chabert/ProjetSUP/jeu.flatpak';
    }

    setJeuLink(link);
  }, []);

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
          {jeuLink && (
            <div className={styles.jeuContainer}>
              <a href={jeuLink} className={styles.readMoreBtn} download>
                🎮 Télécharger le jeu
              </a>
            </div>
          )}
          <a href="https://drive.google.com/file/d/1NhXAZA8aXOX3X95jEAaWT9MoMB1hTTI8/view?usp=share_link" className={styles.readMoreBtn} download>
            📘 Cahier des charges
          </a>
          <a href="https://drive.google.com/file/d/1kjzGZ5Bexs7q4vJvuvD4L706Sgctdlrg/view?usp=share_link" className={styles.readMoreBtn} download>
            📘 Rapport 1
          </a>
          <a href="https://drive.google.com/file/d/1OFwu0ci6BuUWx888AjB85A0o4JWHnkPu/view?usp=share_link" className={styles.readMoreBtn} download>
            📗 Rapport 2
          </a>
          <a href="https://drive.google.com/file/d/1ZQT86urlT6BSu317CYgQbD6adtOB6nGI/view?usp=share_link" className={styles.readMoreBtn} download>
            📙 Rapport 3
          </a>
          <a href="https://drive.google.com/file/d/1ZiaFGRj_3QUWLdpfXp5mA01pkHfem02a/view?usp=share_link" className={styles.readMoreBtn} download>
            📄 Notice d'utilisation
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}