"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../Styles/entreprise.module.css';

const sections = [
  {
    id: 'who',
    emoji: '🚀',
    title: 'Qui sommes-nous ?',
    subtitle: "Une start-up audacieuse et passionnée par l'innovation",
    content: {
      mainText: "HorizonLabs est une start-up dynamique et innovante qui repousse les limites de la créativité pour réinventer le paysage vidéoludique. Notre passion pour l'innovation et notre expertise technique nous permettent de créer des expériences uniques et immersives.",
      expandedContent: {
        title1: 'Notre ADN 🧬',
        text1: "HorizonLabs, c'est avant tout une entreprise à taille humaine animée par une vision audacieuse : explorer des concepts expérimentaux tout en développant des partenariats diversifiés et enrichissants.",
        title2: 'Notre impact 💫',
        text2: "Grâce à notre agilité et notre esprit d'innovation, nous contribuons activement à la transformation de l'industrie des jeux vidéo en mêlant créativité, technologie et engagement sociétal."
      }
    }
  },
  {
    id: 'strengths',
    emoji: '💪',
    title: 'Nos forces et notre vision',
    subtitle: "Un esprit d'équipe, une vision audacieuse, une quête incessante d'innovation",
    features: [
      {
        icon: '🎯',
        title: 'Agilité',
        description: "Liberté d'explorer des concepts expérimentaux et d'innover sans contrainte."
      },
      {
        icon: '🎨',
        title: 'Créativité collective',
        description: 'Chaque membre apporte sa vision unique pour enrichir nos projets.'
      },
      {
        icon: '🤝',
        title: 'Diversité des partenariats',
        description: 'Collaboration avec des experts variés pour des projets innovants.'
      }
    ],
    expandedContent: {
      title1: 'Notre vision du Futur 🔮',
      text1: "Chez HorizonLabs, nous croyons que l'innovation naît de la diversité des idées et de la collaboration. Nos équipes conjuguent expertise et créativité pour repousser les frontières de l'imaginaire, tout en développant des solutions avancées pour nos partenaires.",
      title2: 'Notre objectif 🎯',
      text2: 'Façonner un futur numérique et vidéoludique toujours plus captivant et inclusif, où chaque joueur peut vivre des expériences uniques et mémorables.'
    }
  },
  {
    id: 'commitment',
    emoji: '❤️',
    title: "Notre engagement envers l'équipe",
    subtitle: 'Soutenir, inspirer, et valoriser chaque talent',
    quote: "Chez HorizonLabs, nous croyons que la diversité des perspectives est la clé de l'innovation. Chaque voix compte, chaque idée peut changer la donne.",
    expandedContent: {
      title1: 'Notre philosophie 🌟',
      text1: "Nous investissons dans nos collaborateurs en offrant un environnement de travail inclusif, des opportunités de formation continue, et une culture où chacun peut s'exprimer librement.",
      title2: 'Notre force collective 🤝',
      text2: 'Cette approche renforce la cohésion et la créativité au sein de nos équipes, qui partagent un objectif commun : créer des expériences innovantes et impactantes qui marquent les esprits.'
    }
  },
  {
    id: 'environment',
    emoji: '🏢',
    title: 'Un environnement de travail inspirant',
    subtitle: 'À deux pas des Halles de la Cartoucherie',
    image: '/epita.jpg',
    description: "Un cadre de travail stimulant où l'équilibre et la productivité se rencontrent naturellement.",
    expandedContent: {
      title1: 'Des espaces pensés pour vous 🎨',
      text1: "Nos locaux modernes et nos espaces de détente sont conçus pour favoriser le bien-être et l'épanouissement de nos collaborateurs.",
      title2: "Un quartier dynamique 🌟",
      text2: 'Avec des infrastructures locales variées, comme des salles de sport et de théâtre, nous encourageons un équilibre harmonieux entre vie professionnelle et personnelle. Chez HorizonLabs, nous cultivons un esprit sain dans un environnement créatif.'
    }
  }
];

export default function Entreprise() {
  const [expandedSections, setExpandedSections] = React.useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className={styles.container}>
      {sections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          className={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.sectionTitle}>
            <h2>
              <span className={styles.sectionEmoji}>{section.emoji}</span>
              {section.title}
            </h2>
            <p>{section.subtitle}</p>
          </div>

          <motion.div 
            className={styles.contentCard}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {section.features ? (
              <div className={styles.grid}>
                {section.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={styles.featureCard}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h3>{feature.icon} {feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <>
                {section.image && (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={section.image}
                      alt="Nos locaux"
                      width={800}
                      height={400}
                      className={styles.image}
                      priority
                    />
                  </div>
                )}
                {section.quote && (
                  <blockquote className={styles.quote}>
                    <p>{section.quote}</p>
                  </blockquote>
                )}
                {section.content?.mainText && <p>{section.content.mainText}</p>}
                {section.description && <p>{section.description}</p>}
              </>
            )}

            <button 
              className={styles.readMoreBtn}
              onClick={() => toggleSection(section.id)}
            >
              {expandedSections[section.id] ? "Voir moins" : "En savoir plus"}
            </button>

            {expandedSections[section.id] && (
              <motion.div
                className={styles.hiddenContent}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {section.content?.expandedContent || section.expandedContent ? (
                  <>
                    <h3>{(section.content?.expandedContent || section.expandedContent).title1}</h3>
                    <p>{(section.content?.expandedContent || section.expandedContent).text1}</p>
                    <h3>{(section.content?.expandedContent || section.expandedContent).title2}</h3>
                    <p>{(section.content?.expandedContent || section.expandedContent).text2}</p>
                  </>
                ) : null}
              </motion.div>
            )}
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
}