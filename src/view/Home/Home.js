import Navigation from '../../components/Navigation/Navigation';
import Container from 'react-bootstrap/Container';
import HomeContent from '../../components/HomeContent/HomeContent';
import { motion } from 'framer-motion';
import './Home.css';
import Header from '../../components/Header/Header';




const Home = () => {

  return (
    <motion.div
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      
      className="home-page"
    >
      <Header/>
      <Container>
        <HomeContent />
        <Navigation/>
        <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.7 }}
        className="border-dashed"
      ></motion.div>
      </Container>
    </motion.div>
  );
};

export default Home;
