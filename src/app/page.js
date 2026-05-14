"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "./Styles/page.module.css";
import SplineViewer from "./Sections/SplineViewer";

const Timeline = dynamic(() => import("./Sections/timeline"), { ssr: false });
const Equipe = dynamic(() => import("./Sections/equipe"), { ssr: false });
const Footer = dynamic(() => import("./Sections/footer"), { ssr: false });
const Jeu = dynamic(() => import("./Sections/jeu"), { ssr: false });
const Entreprise = dynamic(() => import("./Sections/entreprise"), { ssr: false });
const Telechargement = dynamic(() => import('./Sections/telechargement'), { ssr: false });
const Contact = dynamic(() => import('./Sections/Contact'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Simulate loading effect with percentage increment
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false); // Stop loading when 100% is reached
          return 100;
        }
        return prev + 1; // Increment percentage
      });
    }, 20); // Adjust interval speed for percentage increment

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            className={styles.loader}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* "Chargement" Text */}
            <div className={styles.loadingTitle}>Chargement de la scène 3D</div>

            {/* Percentage Text */}
            <motion.div className={styles.loadingText}>
              {percentage}%
            </motion.div>
          </motion.div>
        ) : (
          <>
            {/* Main Sections */}
            <section id="spline-viewer">
              <SplineViewer />
            </section>
            <section id="entreprise">
              <Entreprise />
            </section>

            <section id="timeline">
              <Timeline />
            </section>
            <section id="equipe">
              <Equipe />
            </section>
            <section id="jeu">
              <Jeu />
            </section>
            <section id="téléchargement">
              <Telechargement />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <section id="footer">
              <Footer />
            </section>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
