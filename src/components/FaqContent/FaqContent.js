import React from 'react';
import './FaqContent.css';
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';

const FaqContent = () => {
  return (
    <section className="faq">
      <p className="blocks-title mb-4" style={{fontSize:'30px'}}>FAQ</p>
      <motion.div
        viewport={{ amount: 0.3 }}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.7 }}
        className="border-dashed"
      ></motion.div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What does the premium subscription include?
          </Accordion.Header>
          <Accordion.Body>
            Our premium subscription provides access to AI-generated
            cryptocurrency signals, real-time market analysis,
            personalized insights, and timely notifications. It's a
            comprehensive package tailored to enhance your trading
            experience. Specifically - Full scope, AI Crypto Signals,
            AI Urgently News, Technical AI Analysis Market,
            Personality Premium Support and etc.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Who is this product suitable for?
          </Accordion.Header>
          <Accordion.Body>
            Our product caters to both beginners and experienced
            traders. Whether you're new to cryptocurrency trading or a
            seasoned pro, our AI-powered signals offer valuable
            insights to help you make profitable decisions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is the advantage of your product?
          </Accordion.Header>
          <Accordion.Body>
            The uniqueness of our product lies in the utilization of
            artificial intelligence, which surpasses human
            capabilities. Our AI analyzes vast amounts of data
            instantly, providing accurate and timely signals that can
            outperform human analysis, giving you a competitive edge
            in the market.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What is the minimum amount recommended to start trading?
          </Accordion.Header>
          <Accordion.Body>
            There is no specific minimum requirement to begin trading
            with our signals. You can start with any amount you're
            comfortable with. Our signals are designed to cater to
            traders of all levels, accommodating various risk
            tolerances.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            On which platform do you provide Premium subscriptions?
          </Accordion.Header>
          <Accordion.Body>
            We chose the most accessible and widely accepted platform,
            Telegram, for quick engagement and ease of use.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default FaqContent;
