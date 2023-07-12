import React from 'react';
import './ProjectsContent.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

<NavLink to="/platform"></NavLink>;

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
        <NavLink to="/platform" className="projects-card card-1">
          <motion.div
            // viewport={{ once: true }}
            initial={{ scale: 0.6 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Korax AI Launches Platform Adaptation, Empowering
              Analysts' Capabilities
            </p>
          </motion.div>
        </NavLink>
        <NavLink to="/platform" className="projects-card card-2">
        <motion.div
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Seamless Integration of Adaptive Charts into Analytical
            System
          </p>
        </motion.div>
        </NavLink >
         <NavLink to="/platform" className="projects-card card-3">
        <motion.div
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Thrilling Alliance Revealed with a Leading FinTech Company
          </p>
        </motion.div>
        </NavLink>
        <NavLink to="/platform" className="projects-card card-4" >
        <motion.div
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Introducing the Launch of 'Trading for Everyone' on
            Telegram
          </p>
        </motion.div>
        </NavLink>
      </article>
    </section>
  );
};

export default ProjectsContent;
