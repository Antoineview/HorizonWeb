import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HorizonWeb",
  description: "Vers de nouveaux horizons du jeu vidéo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Scène 3D avec Spline */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Boite contenant la scène 3D */}
        <div className={styles.sticky}>
          {/* En étant sticky, la scène 3D peut être animée de manière fluide */}
          <div className={styles.stickybox}>
            {/* La scène 3D est chargée depuis Spline */}
            <spline-viewer
              loading-anim-type="spinner-big-light"
              // URL de la scène Spline
              url="https://prod.spline.design/EaaBrHOt-GyzCiPI/scene.splinecode"
              className="{styles.iframe}"
            ></spline-viewer>
          </div>
        </div>
        {/* Le contenu de la page sera ici */}
        {children}
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js"
          async
        ></script>
      </body>
    </html>
  );
}
