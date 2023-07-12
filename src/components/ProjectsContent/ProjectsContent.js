import React from 'react';
import './ProjectsContent.css';
import { motion } from 'framer-motion';

const ProjectsContent = () => {
  return (
    <section className="projects">
      <motion.h2
        // viewport={{ amount:0.3, once: true }}
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="projects-title"
      >
        Projects News
      </motion.h2>
      <motion.div
        // viewport={{once: true }}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1 }}
        className="border-dashed mb-5"
      ></motion.div>
      <article className="projects-wrapper">
        <motion.div
          // viewport={{ once: true }}
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="projects-card card-1"
        >
          <p>
            Korax AI Launches Platform Adaptation, Empowering
            Analysts' Capabilities
          </p>
        </motion.div>
        <motion.div
          // viewport={{ once: true }}
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="projects-card card-2"
        >
          <p>
          Seamless Integration of Adaptive Charts into Analytical System
          </p>
        </motion.div>
        <motion.div
          //  viewport={{ once: true }}
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="projects-card card-3"
        >
          <p>
          Thrilling Alliance Revealed with a Leading FinTech Company
          </p>
        </motion.div>
        <motion.div
          //  viewport={{ once: true }}
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="projects-card card-4"
        >
          <p>
          Introducing the Launch of 'Trading for Everyone' on Telegram
          </p>
        </motion.div>
      </article>
    </section>
  );
};

export default ProjectsContent;
