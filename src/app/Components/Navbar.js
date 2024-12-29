"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../Styles/navbar.module.css";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    // Show navbar only at the top of the page
    setIsVisible(window.scrollY <= 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={styles.navbar}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }} // Slide navbar out of view
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className={styles.navContent}>
        <h1 className={styles.logo}>HorizonWeb</h1>
        <ul className={styles.navLinks}>
          <li>
            <a href="#spline-viewer">Home</a>
          </li>
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#equipe">Team</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
