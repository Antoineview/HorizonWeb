"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../Styles/entreprise.module.css';

const contacts = [
  { name: "Garance DUFRAISSE", email: "garance.dufraisse@epita.fr" },
  { name: "Antoine RICHARD-CAPPONI", email: "antoine.richard-capponi@epita.fr" },
  { name: "Louis CHABERT", email: "louis.chabert@epita.fr" },
  { name: "Fanny ALACOQUE", email: "fanny.alacoque@epita.fr" },
  { name: "El-Ferdaous BOUHARIS", email: "el-ferdaous.bouharis@epita.fr" },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className={`${styles.section} ${styles.contactSection}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionTitle}>
        <h2>
          <span className={styles.sectionEmoji}>📬</span>
          Contact
        </h2>
        <p>Une question, une collaboration, ou juste un bonjour ?</p>
      </div>

      <div className={styles.contentCard}>
        <p>📍 81 avenue de Grande-Bretagne, 31300 Toulouse</p>
        <div className={styles.grid}>
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>{contact.name}</h3>
              <p>
                <a href={`mailto:${contact.email}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                  {contact.email}
                </a>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}