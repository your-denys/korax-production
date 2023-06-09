import './RoadMapContent.css';
import { motion } from 'framer-motion';

const Card = () => {
  return (
    <motion.article className="card-wrapper">
      <motion.button
        // viewport={{ once: true }}
        initial={{ x: -200, y: 100, scale: 0.7 }}
        whileInView={{ x: 0, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card-item"
        style={{ backgroundColor: '#59575A' }}
      >
        <span>Q1</span>
        <h2>Revolutionary Tech Integration</h2>
        <p>
          We are focused on seamlessly integrating revolutionary
          technologies into Korax AI cryptocurrency trading project.
        </p>
      </motion.button>
      <motion.button
        // viewport={{ once: true }}
        initial={{ x: -200, y: 100, scale: 0.7 }}
        whileInView={{ x: 0, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card-item"
        style={{ backgroundColor: '#0A080B' }}
      >
        <span>Q2</span>
        <h2>AI Trading For Everyone</h2>
        <p>
          We are introducing the launch of Korax AI in a public
          environment, ensuring that it is available to every user who
          desires to benefit from its exceptional capabilities.
        </p>
      </motion.button>
      <motion.button
        // viewport={{ once: true }}
        initial={{ x: -200, y: 100, scale: 0.7 }}
        whileInView={{ x: 0, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card-item"
        style={{ backgroundColor: '#06593B' }}
      >
        <span>Q3</span>
        <h2>Public App</h2>
        <p>
          We have developed a unified public application that serves
          the needs of all users who utilize the majority of our
          company's features.
        </p>
      </motion.button>
      <motion.button
        // viewport={{ once: true }}
        initial={{ x: -200, y: 100, scale: 0.7 }}
        whileInView={{ x: 0, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card-item"
        style={{ backgroundColor: '#52C4BC' }}
      >
        <span>Q4</span>
        <h2>New Classified Product</h2>
        <p>
          Introducing our latest innovation in the AI sector, a
          cutting-edge product that we are diligently developing in
          parallel.
        </p>
      </motion.button>
    </motion.article>
  );
};

export default Card;
