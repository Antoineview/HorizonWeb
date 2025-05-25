"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../Styles/navbar.module.css";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [jeuLink, setJeuLink] = useState("");

  const handleScroll = () => {
    setIsVisible(window.scrollY <= 15);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isMac = /Macintosh|MacIntel|MacPPC|Mac68K|Mac OS X/i.test(userAgent);
    const isLinux = /Linux|X11/i.test(userAgent) && !/Android/i.test(userAgent);

    let link = 'https://cdn.kalitsune.net/lend/louis-chabert/ProjetSUP/jeu.exe'; // Par défaut Windows

    if (isMac) {
      link = 'https://cdn.kalitsune.net/lend/louis-chabert/ProjetSUP/jeu.pkg';
    } else if (isLinux) {
      link = 'https://cdn.kalitsune.net/lend/louis-chabert/ProjetSUP/jeu.flatpak';
    }

    setJeuLink(link);
  }, []);

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={styles.navContent}>
        <h1 className={styles.logo}>HorizonWeb</h1>

        <button 
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <div className={`${styles.menuContainer} ${isMobileMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li><a href="#entreprise">Notre entreprise</a></li>
            <li><a href="#timeline">Feuille de route</a></li>
            <li><a href="#equipe">Notre équipe</a></li>
            <li><a href="#jeu">Notre jeu</a></li>
          </ul>
        </div>

        {jeuLink && (
          <div className={styles.downloadButtonContainer}>
            <a 
              href={jeuLink} 
              className={styles.downloadButton} 
              download
            >
              Télécharger
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}