import React from 'react';
import './AboutUsContent.css';
import { motion } from 'framer-motion';

const AboutUsContent = () => {
  return (
    <section className="about-us">
      <p className="blocks-title">About us</p>
      <motion.h2
        viewport={{ amount: 0.3 }}
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="blocks-description blocks-description-border"
      >
        Being a responsible leader with worldwide market recognition
      </motion.h2>
      <motion.span
        // viewport={{ once: true }}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.7 }}
        className="border-dashed"
      ></motion.span>
      <motion.article
        // viewport={{ once: true }}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="about-us-content"
      >
        <p>
          Korax, an innovative machine learning, research, and
          development company, is focused on transforming the realm of
          traditional human and quantitative trading. With substantial
          investments in long-term research and development, Korax
          strives to address the obstacles prevalent in these trading
          practices, thereby reshaping the market landscape.</p>
          <br/>
         <p className='about-span'>
          Korax AI is dedicated to resolving challenges in real-time,
          utilizing a profound comprehension of the trading ecosystem,
          adeptly handling extensive data volumes, and mastering
          intricate learning algorithms.</p>

      </motion.article>
    </section>
  );
};

export default AboutUsContent;
