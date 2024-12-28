"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Styles/page.module.css";
import Script from "next/script";
import Spline from "@splinetool/react-spline/next";
import Timeline from "./Sections/timeline";
import SplineViewer from "./Sections/SplineViewer";
import Equipe from "./Sections/equipe";
import Footer from "./Sections/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen to wait for spline 3D scene to load */}
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            className={styles.loader}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Progress bar animation using framer motion */}
            <motion.div className={styles.progressContainer}>
              <motion.div
                className={styles.progressBar}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 5, // 5 seconds for the animation
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            {/* Blinking animation text */}
            <motion.div
              className={styles.loadingText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Loading...
            </motion.div>
          </motion.div>
        ) : (
          <>
            <SplineViewer />
            <Timeline />
            <Equipe />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
