"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import "./timeline.css";

const timelineData = [
  {
    title: "Septembre 2024",
    description: "Création d'HorizonLabs et formation de l'équipe",
    progress: {
      "Design des niveaux": 30,
      Graphisme: 20,
      IA: 20,
      Site: 70,
      Son: 10,
      Multijoueur: 60,
      "Interface utilisateur": 10,
    },
  },
  {
    title: "Décembre 2024",
    description: "Première soutenance méthodologique",
    progress: {
      "Design des niveaux": 60,
      Graphisme: 40,
      IA: 50,
      Site: 100,
      Son: 40,
      Multijoueur: 80,
      "Interface utilisateur": 60,
    },
  },
  {
    title: "Janvier 2025",
    description: "Première soutenance technique",
    progress: {
      "Design des niveaux": 80,
      Graphisme: 70,
      IA: 75,
      Site: 100,
      Son: 70,
      Multijoueur: 90,
      "Interface utilisateur": 80,
    },
  },
  {
    title: "Mai 2025",
    description: "Soutenance finale et commercialisation",
    progress: {
      "Design des niveaux": 100,
      Graphisme: 100,
      IA: 100,
      Site: 100,
      Son: 100,
      Multijoueur: 100,
      "Interface utilisateur": 100,
    },
  },
];

const Presentation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="timeline-container" ref={containerRef}>
      <header className="timeline-header">
        <h1 className="timeline-title">HorizonLabs Roadmap</h1>
        <p className="timeline-subtitle">Notre voyage vers l&apos;innovation</p>
      </header>

      <div className="timeline">
        <motion.div className="timeline-line" style={{ scaleY, originY: 0 }} />

        {timelineData.map((item, index) => (
          <TimelineItem key={index} data={item} index={index} />
        ))}
      </div>

      <footer className="timeline-footer">
        <p>&copy; 2024 HorizonLabs. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

const TimelineItem = ({ data, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.5 });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const x = useSpring(
    useTransform(
      useScroll({
        target: itemRef,
        offset: ["start end", "center center"],
      }).scrollYProgress,
      [0, 1],
      [index % 2 === 0 ? 50 : -50, 0],
    ),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(
      useScroll({
        target: itemRef,
        offset: ["start end", "center center"],
      }).scrollYProgress,
      [0, 1],
      [0, 1],
    ),
    springConfig,
  );

  return (
    <div className="timeline-item">
      <motion.div
        ref={itemRef}
        style={{ x, opacity }}
        className="timeline-item-content"
      >
        <h3 className="timeline-item-title">{data.title}</h3>
        <p className="timeline-item-description">{data.description}</p>
        {Object.entries(data.progress).map(([key, value]) => (
          <div key={key} className="timeline-progress">
            <div className="timeline-categories">
              <span>{key}</span>
              <span>{value}%</span>
            </div>
            <div className="timeline-progress-bar">
              <motion.div
                className="timeline-progress-value"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${value}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="timeline-dot"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
    </div>
  );
};

export default Presentation;
