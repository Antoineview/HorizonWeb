"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../Styles/jeu.module.css";

const features = [
  {
    id: 1,
    title: "🎲 Génération procédurale et aléatoire des salles",
    description:
      "Le cœur d'HorizonBreak repose sur une expérience unique à chaque partie grâce à la génération aléatoire et procédurale des salles. Les joueurs explorent cinq défis thématiques, chaque parcours étant imprévisible, empêchant toute anticipation. Certaines salles s'adaptent dynamiquement au contexte ou au niveau des joueurs, créant une expérience sur mesure. Cette mécanique favorise la rejouabilité et reflète l'idée que chaque décision entraîne des conséquences inattendues. Elle renforce également l'immersion en proposant un environnement toujours renouvelé.",
    image: "/images/features/feature1.jpg",
  },
  {
    id: 2,
    title: "🎮 Mini-jeux thématiques axés sur des dilemmes sociétaux",
    description:
      "Chaque salle propose un mini-jeu qui aborde des problématiques contemporaines (écologie, inclusion, responsabilité sociétale) de manière ludique et implicite. Les joueurs gèrent des ressources, coopèrent pour surmonter des obstacles ou prennent des décisions rapides face à des situations complexes. Ces scénarios éducatifs stimulent la réflexion sans moralisation directe, renforçant l'impact du jeu sur la conscience des enjeux mondiaux.",
    image: "/images/features/feature2.jpg",
  },
  {
    id: 3,
    title: "🤝 Compétition et coopération dynamique",
    description:
      "HorizonBreak mélange habilement compétition et coopération, créant une tension positive. Bien que les joueurs cherchent à s'échapper le plus vite possible, certains défis exigent une collaboration étroite pour progresser. Ce système engage les participants dans une réflexion sur la solidarité et l'importance des interactions sociales tout en maintenant une dynamique compétitive motivante.",
    image: "/images/features/feature3.jpg",
  },
  {
    id: 4,
    title: "🌍 Sensibilisation subtile à travers un gameplay immersif",
    description:
      "Le jeu utilise des mécaniques et des environnements immersifs pour sensibiliser à des enjeux majeurs comme le changement climatique ou les inégalités. Plutôt que d'être au centre des interactions, ces thèmes sont intégrés subtilement, permettant une prise de conscience naturelle. Les joueurs s'amusent tout en développant une compréhension des problématiques abordées.",
    image: "/images/features/feature4.jpg",
  },
  {
    id: 5,
    title: "🎨 Environnement graphique évolutif et immersif",
    description:
      "Le cadre visuel d'HorizonBreak sert de toile de fond dynamique, reflétant la diversité des thèmes abordés. Bien qu'il ne soit pas central dans chaque interaction, l'environnement enrichit l'expérience globale par sa richesse graphique et sa cohérence avec les messages du jeu. Les graphismes, conçus pour être accessibles et stylisés, contribuent à maintenir l'intérêt des joueurs.",
    image: "/environnement.png",
  },
  {
    id: 6,
    title: "👥 Accessibilité et convivialité",
    description:
      "Avec des commandes intuitives et des règles claires, HorizonBreak vise un public varié, allant des joueurs occasionnels aux passionnés. Cette accessibilité est renforcée par un gameplay multijoueur favorisant les échanges et le plaisir collectif. L'objectif est de rassembler des individus de différents horizons autour d'une expérience ludique et enrichissante.",
    image: "/images/features/feature6.jpg",
  },
];

export default function Jeu() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HorizonBreak - Notre Jeu</h1>
      <motion.div
        className={styles.featureList}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className={styles.featureCard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className={styles.featureImage}>
              <div className={styles.imageWrapper}>
                <Image
                  src={feature.image}
                  width={600}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.overlay}>
                <p>{feature.description}</p>
              </div>
            </div>
            <h2 className={styles.featureTitle}>{feature.title}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}