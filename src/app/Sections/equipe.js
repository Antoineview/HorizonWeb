"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../Styles/equipe.module.css";

const teamMembers = [
  {
    id: 1,
    name: "Fanny ALACOQUE",
    role: "🎨 Responsable du graphisme et du mode multijoueur",
    description:
      "Née en 2006, Fanny est la cheffe de projet et l'image de l'équipe. Passionnée d'informatique et experte en programmation, elle insuffle créativité et innovation au projet. Grande amatrice de jeux vidéo, elle met sa connaissance approfondie du domaine au service de l'équipe, faisant d'elle une source d'inspiration incontournable.",
    image: "/fanny.png",
  },
  {
    id: 2,
    name: "Antoine RICHARD-CAPPONI",
    role: "🔍 Responsable de la R&D des niveaux et du site web",
    description:
      "Antoine, né en 2007, est sous-chef de l'équipe et gère la planification des réunions. Créatif et passionné, il conçoit des designs uniques et explore des idées de gameplay innovantes, inspirées notamment par l'origami. Admirateur du design épuré d'Apple, il apporte une expertise technique précieuse à l'équipe, notamment, sur le site web.",
    image: "/antoine.png",
  },
  {
    id: 3,
    name: "Louis CHABERT",
    role: "🌐 Responsable de la création et de la gestion du site web",
    description:
      "Né en 2006, Louis est un pilier de l'équipe, apprécié pour sa rigueur et son sens de l'organisation. Son expérience en assistance technique chez Apple enrichit le projet de sa patience et de son altruisme. Amateur de voyages, il puise son inspiration dans les paysages tropicaux et la plongée sous-marine.",
    image: "/louis.png",
  },
  {
    id: 4,
    name: "Garance DUFRAISSE",
    role: "🤖 Responsable de l'intelligence artificielle",
    description:
      "Née en 2006, Garance est une touche-à-tout curieuse et polyvalente, avec un excellent œil pour les détails. Forte de cinq années passées au Japon, elle combine ouverture d'esprit et créativité. Son expertise en orthographe et son enthousiasme pour les projets insolites en font une alliée précieuse pour l'équipe.",
    image: "/elian.png",
  },
  {
    id: 5,
    name: "El-Ferdaous BOUHARIS",
    role: "🎥 Responsable du son et de l'animation",
    description:
      "El-Ferdaous, née en 2006, est passionnée par l'écologie et la biodiversité. Son talent pour concevoir des paysages naturels réalistes, associé à sa créativité et son aisance à communiquer, fait d'elle un atout clé de l'équipe. Sa vision durable enrichit le projet à chaque étape.",
    image: "/firdaws.png",
  },
];

export default function Equipe() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className={styles.teamGallery}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>🤝 Notre équipe</h1>
        <p className={styles.subtitle}>Une équipe, une passion</p>
        <div className={styles.titleUnderline}></div>
      </div>

      <div className={styles.galleryGrid}>
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className={styles.memberCard}
            onClick={() => setSelectedId(member.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}  // Initial animation (hidden)
            whileInView={{ opacity: 1, y: 0 }} // Animation when the element enters the viewport
            viewport={{ once: true }}  // Trigger animation only once when it comes into view
            transition={{ duration: 0.8 }}  // Duration of animation
          >
            <div className={styles.imageContainer}>
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className={styles.memberImage}
                priority
              />
            </div>
            <h2 className={styles.memberName}>{member.name}</h2>
            <p className={styles.memberRole}>{member.role}</p>
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
              <button
                className={styles.closeButton}
                onClick={() => setSelectedId(null)}
              >
                &times;
              </button>
              {(() => {
                const member = teamMembers.find((m) => m.id === selectedId);
                if (!member) return null;
                return (
                  <>
                    <div className={styles.expandedImageContainer}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={300}
                        className={styles.expandedMemberImage}
                      />
                    </div>
                    <h2 className={styles.expandedMemberName}>
                      {member.name}
                    </h2>
                    <p className={styles.expandedMemberRole}>
                      {member.role}
                    </p>
                    <p className={styles.memberDescription}>
                      {member.description}
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
}