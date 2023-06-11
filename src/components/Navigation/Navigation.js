import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import { motion } from 'framer-motion';
import { useState } from 'react';


const Navigation = ({handleNav}) => {


    const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
    handleNav(activeSlide);
  };
  return (
     <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration:1}}
    className='navigation'>
      <Nav className="me-auto">
        <Nav.Link onClick={() => handleSlideChange(1)} >Korax AI</Nav.Link>
        <Nav.Link onClick={() => handleSlideChange(2)} >Processes</Nav.Link>
        <Nav.Link onClick={() => handleSlideChange(3)} >About us</Nav.Link>
        <Nav.Link onClick={() => handleSlideChange(4)} >Road map</Nav.Link>
        <Nav.Link onClick={() => handleSlideChange(5)}>Projects News</Nav.Link>
        <Nav.Link onClick={() => handleSlideChange(6)} >Contact</Nav.Link>
      </Nav>
    </motion.div>
  );
};

export default Navigation;
