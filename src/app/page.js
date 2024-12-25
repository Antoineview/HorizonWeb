"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";
import Script from "next/script";
import Spline from "@splinetool/react-spline/next";
import Timeline from "./entreprise/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            className={styles.loader}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
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
            {/* Section 1: Spline */}
            {/* Section 2: Timeline */}
            <Timeline />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
