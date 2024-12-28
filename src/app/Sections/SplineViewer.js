// components/SplineViewer.jsx
"use client";

import { useEffect } from "react";
import styles from "../Styles/page.module.css";

export default function SplineViewer() {
  useEffect(() => {
    // First, ensure the spline-viewer script is loaded
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js";
    script.async = true;
    document.body.appendChild(script);

    // Then handle the logo removal after the component loads
    const timer = setTimeout(() => {
      const viewer = document.querySelector("spline-viewer");
      if (viewer && viewer.shadowRoot) {
        const logo = viewer.shadowRoot.querySelector("#logo");
        if (logo) logo.style.display = "none";
      }
    }, 4500);

    return () => {
      clearTimeout(timer);
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
