"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import styles from "../Styles/page.module.css";

export default function SplineViewer() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {

    // Remove the Spline logo after the component loads
    const timer = setTimeout(() => {
      const viewer = document.querySelector("spline-viewer");
      if (viewer && viewer.shadowRoot) {
        const logo = viewer.shadowRoot.querySelector("#logo");
        if (logo) logo.style.display = "none";
      }
    }, 2000);

    // Track scroll behavior
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY === 0); // Show indicator only at the top
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js" 
      />
      <div className={styles.sticky}>
      <div className={styles.stickybox}>
        <spline-viewer
          loading-anim-type="spinner-big-light"
          url="https://prod.spline.design/EaaBrHOt-GyzCiPI/scene.splinecode"
          className={styles.iframe}
        />
        {/* Scroll Down Animation */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              className={styles.scrollIndicator}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.scrollContent}>
                <motion.div
                  className={styles.arrow}
                  initial={{ y: 0 }}
                  animate={{ y: 20 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  ↓
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </>
  );
}
