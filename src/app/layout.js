// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import SplineViewer from "./SplineViewer";

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
        <SplineViewer />
        {children}
      </body>
    </html>
  );
}
