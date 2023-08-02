import React from 'react';
import './PremiumContactContent.css';
import { motion } from 'framer-motion';
import support from '../../assets/contact.svg';

const PremiumContactContent = () => {
  return (
    <section className="premium-contact">
      <h2 className="premium-contact-title">Contact Us</h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1 }}
        className="border-dashed mb-5"
      ></motion.div>
      <div className="premium-contact-wrapper">
        <img
          src={support}
          alt="support"
          className="premium-contact-img"
        />
        <div className='premium-contact-content'>
            <p className='premium-contact-send'>Send a message:</p>
            <a href='mailto:artificial.intelligence@korax.ai' className='premium-contact-link'> Email: artificial.intelligence@korax.ai</a>
            <a href='https://t.me/Korax_support' className='premium-contact-link'> Telegram: @korax_support</a>
            <p className='premium-contact-question'>If you have any question, don’t hesitate to contact us.</p>
        </div>
      </div>
    </section>
  );
};

export default PremiumContactContent;
