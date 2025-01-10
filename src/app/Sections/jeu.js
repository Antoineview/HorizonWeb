"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../Styles/jeu.module.css";

const features = [
  {
    id: 1,
    title: "🎲 Génération procédurale et aléatoire des salles",
    description:
      "Le cœur d'HorizonBreak repose sur une expérience unique à chaque partie grâce à la génération aléatoire et procédurale des salles. Les joueurs explorent cinq défis thématiques, chaque parcours étant imprévisible, empêchant toute anticipation. Certaines salles s'adaptent dynamiquement au contexte ou au niveau des joueurs, créant une expérience sur mesure. Cette mécanique favorise la rejouabilité et reflète l'idée que chaque décision entraîne des conséquences inattendues. Elle renforce également l'immersion en proposant un environnement toujours renouvelé.",
    image: "/vide.jpg",
  },
  {
    id: 2,
    title: "🎮 Mini-jeux thématiques axés sur des dilemmes sociétaux",
    description:
      "Chaque salle propose un mini-jeu qui aborde des problématiques contemporaines (écologie, inclusion, responsabilité sociétale) de manière ludique et implicite. Les joueurs gèrent des ressources, coopèrent pour surmonter des obstacles ou prennent des décisions rapides face à des situations complexes. Ces scénarios éducatifs stimulent la réflexion sans moralisation directe, renforçant l'impact du jeu sur la conscience des enjeux mondiaux.",
    image: "/vide.jpg",
  },
  {
    id: 3,
    title: "🤝 Compétition et coopération dynamique",
    description:
      "HorizonBreak mélange habilement compétition et coopération, créant une tension positive. Bien que les joueurs cherchent à s'échapper le plus vite possible, certains défis exigent une collaboration étroite pour progresser. Ce système engage les participants dans une réflexion sur la solidarité et l'importance des interactions sociales tout en maintenant une dynamique compétitive motivante.",
    image: "/vide.jpg",
  },
  {
    id: 4,
    title: "🌍 Sensibilisation subtile à travers un gameplay immersif",
    description:
      "Le jeu utilise des mécaniques et des environnements immersifs pour sensibiliser à des enjeux majeurs comme le changement climatique ou les inégalités. Plutôt que d'être au centre des interactions, ces thèmes sont intégrés subtilement, permettant une prise de conscience naturelle. Les joueurs s'amusent tout en développant une compréhension des problématiques abordées.",
    image: "/vide.jpg",
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
    image: "/vide.jpg",
  },
];

const Features = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>HorizonBreak - Notre Jeu</h1>
      <div className={styles.featureList}>
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className={styles.featureCard}
            onClick={() => setSelectedId(feature.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.imageContainer}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={600}
                height={400}
                className={styles.featureImage}
                priority
              />
            </div>
            <h2 className={styles.featureTitle}>{feature.title}</h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              key={`card-${selectedId}`}
              className={styles.expandedCard}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {(() => {
                const feature = features.find((f) => f.id === selectedId);
                if (!feature) return null;
                return (
                  <>
                    <div className={styles.expandedImageContainer}>
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className={styles.expandedFeatureImage}
                      />
                    </div>
                    <h2 className={styles.expandedFeatureTitle}>
                      {feature.title}
                    </h2>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Features;
