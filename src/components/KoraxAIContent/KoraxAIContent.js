import './KoraxAIContent.css';
import { motion } from 'framer-motion';
import solid from '../../assets/wawes.mp4';
import { useState } from 'react';
import poster from '../../assets/wawes-poster.jpg'


const KoraxAIContent = () => {

  const [videoLoaded1, setVideoLoaded1] = useState(false);


  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  const handleVideoLoad1 = () => {
    setVideoLoaded1(true);
  };

  return (
    <section className="koraxAI">
      <article className='koraxAI-content solid-bg'>
      {!videoLoaded1 && <img src={poster} className='video' alt="Robot" />}
      <video
        preload='auto'
          autoPlay
          muted
          loop
          src={solid}
          type="video/mp4"
          playsInline
          onContextMenu={handleContextMenu}
          onLoadedData={handleVideoLoad1}
          style={{ display: videoLoaded1 ? 'block' : 'none' }}
        />
      </article>
      <article className="koraxAI-content" style={{position: 'relative', zIndex:2222, marginTop:'11rem'}}>
        <h2
          initial={{ y: -100, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="koraxAI-title"
        >
          What is KORAX AI?
        </h2>
        <motion.h3
          initial={{ y: -100, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="koraxAI-subtitle"
        >
          TRANSFORMING INVESTMENTS WITH CUSTOMIZABLE AI TRADING
          SOLUTION
        </motion.h3>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="koraxAI-text"
        >
          Korax AI leverages the most cutting-edge scientific methods,
          including quantitative finance, machine learning, and
          behavioral finance, to develop a tailored fintech investment
          solution. Korax AI rapidly digests enormous volumes
          of data and makes intelligent, real-time trading decisions,
          allowing its client to take advantage over traditional
          human-based technique. <br/> <br/>Banks, asset managers, and brokers can
          use Korax AI to enhance their trading processes and provide
          clients with innovative investment options. Korax AI's
          collection of diverse algorithms covers many financial
          derivatives, including FOREX, Indices, Stocks, and Crypto,
          making it a flexible and adaptable solution for a variety of
          financial players.
        </motion.p>
      </article>
    </section>
  );
};

export default KoraxAIContent;
