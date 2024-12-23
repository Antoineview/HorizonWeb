// components/SplineViewer.jsx
"use client";

import { useEffect } from "react";
import styles from "../app/page.module.css";

export default function SplineViewer() {
  useEffect(() => {
    // Load the spline-viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js";
    script.async = true;
    document.body.appendChild(script);

    // Function to check and hide the logo
    const hideLogo = () => {
      const viewer = document.querySelector("spline-viewer");
      if (viewer && viewer.shadowRoot) {
        const logo = viewer.shadowRoot.querySelector("#logo");
        if (logo) {
          logo.style.display = "none";
          return true; // Logo found and hidden
        }
      }
      return false; // Logo not yet found
    };

    // MutationObserver to monitor changes
    const observer = new MutationObserver(() => {
      if (hideLogo()) {
        observer.disconnect(); // Stop observing once the logo is hidden
      }
    });

    // Start observing the DOM for the viewer
    const observerTarget = document.body;
    observer.observe(observerTarget, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.sticky}>
      <div className={styles.stickybox}>
        <spline-viewer
          loading-anim-type="spinner-big-light"
          url="https://prod.spline.design/EaaBrHOt-GyzCiPI/scene.splinecode"
          className={styles.iframe}
        />
      </div>
    </div>
  );
}
