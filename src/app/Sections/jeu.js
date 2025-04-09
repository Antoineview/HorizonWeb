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
    image: "/api_antoine.jpg",
  },
  {
    id: 2,
    title: "🕹️ Mini-jeux thématiques axés sur des dilemmes sociétaux",
    description:
      "Chaque salle propose un mini-jeu qui aborde des problématiques contemporaines (écologie, inclusion, responsabilité sociétale) de manière ludique et implicite. Les joueurs gèrent des ressources, coopèrent pour surmonter des obstacles ou prennent des décisions rapides face à des situations complexes. Ces scénarios éducatifs stimulent la réflexion sans moralisation directe, renforçant l'impact du jeu sur la conscience des enjeux mondiaux.",
    image: "/dilemme.png",
  },
  {
    id: 3,
    title: "🤝 Compétition et coopération dynamique",
    description:
      "HorizonBreak mélange habilement compétition et coopération, créant une tension positive. Bien que les joueurs cherchent à s'échapper le plus vite possible, certains défis exigent une collaboration étroite pour progresser. Ce système engage les participants dans une réflexion sur la solidarité et l'importance des interactions sociales tout en maintenant une dynamique compétitive motivante.",
    image: "/cooperation.jpg",
  },
  {
    id: 4,
    title: "🌍 Sensibilisation subtile à travers un gameplay immersif",
    description:
      "Le jeu utilise des mécaniques et des environnements immersifs pour sensibiliser à des enjeux majeurs comme le changement climatique ou les inégalités. Plutôt que d'être au centre des interactions, ces thèmes sont intégrés subtilement, permettant une prise de conscience naturelle. Les joueurs s'amusent tout en développant une compréhension des problématiques abordées.",
    image: "/sensibilisation.png",
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
    image: "/accessibilite.png",
  },
];

const Features = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Prefixe pour éviter les conflits d'ID avec le composant Equipe
  const idPrefix = "jeu-";

  return (
    <div className={styles.teamGallery}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>🎮 HorizonBreak - Notre jeu</h1>
        <p className={styles.subtitle}>Un gameplay toujours unique, à chaque partie</p>
        <div className={styles.titleUnderline}></div>
      </div>

      <div className={styles.galleryGrid}>
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            layoutId={`${idPrefix}card-${feature.id}`}
            className={styles.memberCard}
            onClick={() => setSelectedId(feature.id)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              layoutId={`${idPrefix}image-container-${feature.id}`}
              className={styles.imageContainer}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={600}
                height={400}
                className={styles.memberImage}
                priority
              />
            </motion.div>
            <motion.h2
              layoutId={`${idPrefix}title-${feature.id}`}
              className={styles.memberName}
            >
              {feature.title}
            </motion.h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            key="overlay"
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            className={styles.overlay}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`${idPrefix}card-${selectedId}`}
              className={styles.expandedCard}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={() => setSelectedId(null)}
                aria-label="Fermer"
              >
                &times;
              </button>
              {(() => {
                const feature = features.find((f) => f.id === selectedId);
                if (!feature) return null;
                return (
                  <>
                    <motion.div
                      layoutId={`${idPrefix}image-container-${feature.id}`}
                      className={styles.expandedImageContainer}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className={styles.expandedMemberImage}
                      />
                    </motion.div>
                    <motion.h2
                      layoutId={`${idPrefix}title-${feature.id}`}
                      className={styles.expandedMemberName}
                    >
                      {feature.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={styles.memberDescription}
                    >
                      {feature.description}
                    </motion.p>
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