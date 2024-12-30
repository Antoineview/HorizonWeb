"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Styles/page.module.css";
import Timeline from "./Sections/timeline";
import SplineViewer from "./Sections/SplineViewer";
import Equipe from "./Sections/equipe";
import Footer from "./Sections/footer";
import Jeu from "./Sections/jeu";

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
            <section id="timeline">
              <Timeline />
            </section>
            <section id="equipe">
              <Equipe />
            </section>
            <section id="footer">
              <Footer />
            </section>
            <section id="jeu">
              <Jeu />
            </section>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
