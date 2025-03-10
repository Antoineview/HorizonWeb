"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../Styles/navbar.module.css";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <li><a href="#jeu">Notre jeu</a></li>
            <li><a href="#timeline">Feuille de route</a></li>
            <li><a href="#equipe">Notre équipe</a></li>
            <li><a href="#entreprise">Notre entreprise</a></li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}