import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import { motion } from 'framer-motion';


const Navigation = () => {
  return (
     <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration:1}}
    className='navigation'>
      <Container />
      <Nav className="me-auto">
        <Nav.Link href="#koraxAI">Korax AI</Nav.Link>
        <Nav.Link href="#processes">Processes</Nav.Link>
        <Nav.Link href="#about-us">About us</Nav.Link>
        <Nav.Link href="#road-map">Road map</Nav.Link>
        <Nav.Link href="#projects">Projects News</Nav.Link>
        <Nav.Link href="#contact-us">Contact</Nav.Link>
      </Nav>
      <Container />
    </motion.div>
  );
};

export default Navigation;
