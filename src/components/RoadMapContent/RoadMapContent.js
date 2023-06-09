import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

const RoadMapContent = () => {
  return (
    <section className="roadmap">
      <p className="blocks-title">Roadmap</p>
      <motion.h2
        className="blocks-description blocks-description-border"
        style={{ color: '#161616' }}
        viewport={{ amount: 0.3, }}
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Season 2023
      </motion.h2>
      <motion.div
        viewport={{ amount: 0.3, }}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.7 }}
        className="border-dashed"
      ></motion.div>
      <Card />
      <p
        className="roadmap-text-footer"
        style={{
          color: '#161616',
        
        }}
      >
        Consider this a mere glimpse into what awaits us in the
        upcoming 2023 season. We've got a thrilling lineup of plans in
        store. At Korax, our unwavering commitment to innovation
        propels us to exceed your expectations, delivering exceptional
        experiences within the AI industry.
      </p>
    </section>
  );
};

export default RoadMapContent;
