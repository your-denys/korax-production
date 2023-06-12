import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import { motion } from 'framer-motion';
import { useSwiper } from 'swiper/react';


const Navigation = () => {

  const swiper = useSwiper();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='navigation'>
      <Nav className="me-auto">
        <Nav.Link onClick={() => swiper.slideNext()} >Korax AI</Nav.Link>
        <Nav.Link onClick={() => swiper.slideTo(2)} >Processes</Nav.Link>
        <Nav.Link onClick={() => swiper.slideTo(3)} >About us</Nav.Link>
        <Nav.Link onClick={() => swiper.slideTo(4)} >Road map</Nav.Link>
        <Nav.Link onClick={() => swiper.slideTo(5)}>Projects News</Nav.Link>
        <Nav.Link onClick={() => swiper.slideTo(6)} >Contact</Nav.Link>
      </Nav>
    </motion.div>
  );
};

export default Navigation;
