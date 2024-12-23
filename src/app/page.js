"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [iframeLocked, setIframeLocked] = useState(true);

  useEffect(() => {
    const handleScrollMessage = (event) => {
      // Ensure the message is from the correct iframe origin
      if (event.origin !== "https://horizonscene.vercel.app") {
        console.warn("Message from unknown origin:", event.origin);
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = event.data;

      // Debug the received data
      console.log("Scroll Data Received:", {
        scrollTop,
        scrollHeight,
        clientHeight,
      });

      // Unlock the iframe if scrolled to the bottom
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("Scrolled to the bottom of the iframe.");
        setIframeLocked(false);
      }
    };

    // Add a listener for messages from the iframe
    window.addEventListener("message", handleScrollMessage);

    return () => {
      window.removeEventListener("message", handleScrollMessage);
    };
  }, []);

  useEffect(() => {
    // Lock or unlock scrolling on the parent document
    document.body.style.overflow = iframeLocked ? "hidden" : "auto";
  }, [iframeLocked]);

  return (
    <div className={styles.background}>
      <iframe
        id="3D-Spline-Scene"
        className={styles.iframe}
        src="https://horizonscene.vercel.app"
        sandbox="allow-same-origin allow-scripts allow-popups"
      ></iframe>
      {!iframeLocked && (
        <div className={styles.page}>
          <main className={styles.main}>
            <ol>
              <li>
                🌇 Bienvenue sur <code>HorizonWeb</code> [beta].
              </li>
              <li>
                <em>👀 Psst Scrolle dans l&apos;iFrame </em>
              </li>
            </ol>
          </main>
        </div>
      )}
    </div>
  );
}
