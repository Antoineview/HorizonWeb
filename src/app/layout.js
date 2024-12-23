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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.sticky}>
          <div className={styles.stickybox}>
            <spline-viewer
              loading-anim-type="spinner-big-dark"
              url="https://prod.spline.design/EaaBrHOt-GyzCiPI/scene.splinecode"
              className="{styles.iframe}"
            ></spline-viewer>
          </div>
        </div>
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
