// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Sections/Navbar.js";
import styles from "./Styles/page.module.css";
import dynamic from "next/dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HorizonBreak",
  description: "Vers de nouveaux horizons du jeu vidéo.",
  keywords: ["HorizonBreak", "studio jeu vidéo", "innovation", "développement de jeux", "jeux vidéo", "toulouse", "étudiant"],
  openGraph: {
    title: "HorizonBreak",
    description: "Vers de nouveaux horizons du jeu vidéo. Découvrez nos projets et notre équipe passionnée.",
    url: "https://horizonweb.vercel.app", // À remplacer par l'URL finale si connue
    siteName: "HorizonWeb",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HorizonBreak",
    description: "Vers de nouveaux horizons du jeu vidéo.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
